#!/usr/bin/env node
import { Octokit } from 'octokit';
import libSodiumWrappers from 'libsodium-wrappers';
import { config as dotEnvConfig } from 'dotenv';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'fs';
import { getCustomEnvs } from './custom-envs.js';

const sodium = libSodiumWrappers;

const envActionsSetup = {};

// get project path from project argument and check if it exists
const args = yargs(hideBin(process.argv)).argv;
const projectPath = args.project;
console.log('Project path:', projectPath);
function checkProjectPath(projectPath) {
  try {
    if (fs.existsSync(`./projects/${projectPath}`)) {
      return true;
    }
  }
  catch (err) {
    console.error(err);
    return false;
  }
}
if (!projectPath || !checkProjectPath(projectPath)) {
  console.error('Project path is required');
  process.exit(1);
}

// Launch script main business logic

dotEnvConfig({
  path: `projects/${projectPath}/.env.github-actions-setup`,
  processEnv: envActionsSetup,
});
const envActionsSecrets = {};
dotEnvConfig({
  path: `projects/${projectPath}/.env.github-actions-secrets`,
  processEnv: envActionsSecrets,
});
const env = {};
dotEnvConfig({ path: `projects/${projectPath}/.env`, processEnv: env });

const GITHUB_USER = envActionsSetup.user;
const GITHUB_REPO_NAME = projectPath;
const GITHUB_TOKEN = envActionsSetup.token;

// Secrets.
const arrSecretsGhActions = [];
Object.entries(envActionsSecrets).forEach(([key, value]) => {
  arrSecretsGhActions.push([key, value]);
});
const arrSecretsDotEnv = [];

// sum up all object key and value pairs with dotenv syntax
// into one value and set it in arrSecrets2 with key `ENV_CONTENT`
arrSecretsDotEnv.push([
  'ENV_CONTENT',
  Buffer.from(
    Object.entries(env)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n'),
  ).toString('base64'),
]);

// Get custom env files and create secrets
const customEnvs = getCustomEnvs(projectPath);
const arrCustomEnvSecrets = customEnvs.map(({ fileName, secretName }) => {
  const content = fs.readFileSync(fileName, 'utf8');
  return [secretName, Buffer.from(content).toString('base64')];
});

// Oktakit.
const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});
/**
 *
 * @param {Array<Record<string, string>>} arr
 */
async function pushSecrets(arr) {
  const {
    data: { key, key_id },
  } = await octokit.rest.actions.getRepoPublicKey({
    owner: GITHUB_USER,
    repo: GITHUB_REPO_NAME,
  });

  // Loop through the key/value arrays.
  arr.forEach(async ([secretKey, secretValue]) => {
    // Encrypt secret value.
    await sodium.ready;

    // Convert the secret and key to a Uint8Array.
    const binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL);
    const binsec = sodium.from_string(secretValue);

    // Encrypt the secret using libsodium.
    const encBytes = sodium.crypto_box_seal(binsec, binkey);

    // Convert the encrypted Uint8Array to Base64.
    const secretValueEncrypted = sodium.to_base64(
      encBytes,
      sodium.base64_variants.ORIGINAL,
    );

    // Set secret.
    await octokit.rest.actions
      .createOrUpdateRepoSecret({
        owner: GITHUB_USER,
        repo: GITHUB_REPO_NAME,
        secret_name: secretKey,
        encrypted_value: secretValueEncrypted,
        key_id: key_id,
      })
      .then(() => {
        console.log(`Successfully set secret: ${secretKey}`);
      });
  });
}

await pushSecrets(arrSecretsGhActions);
await pushSecrets(arrSecretsDotEnv);
await pushSecrets(arrCustomEnvSecrets);
