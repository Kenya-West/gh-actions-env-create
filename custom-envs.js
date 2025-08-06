import fs from 'fs';
import path from 'path';

/**
 * Get custom env files from a project.
 *
 * @param {string} projectName 
 * @returns {Array<{fileName: string, secretName: string}>}
 */
function getCustomEnvs(projectName) {
    const projectDir = `./projects/${projectName}`;
    const files = fs.readdirSync(projectDir);
    const envFiles = files.filter(file => file.startsWith('.envfile.'));
    const validEnvFiles = envFiles.map(file => {
        const parts = file.split('.');
        if (parts.length === 3 && parts[0] === '' && parts[1] === 'envfile') {
            return {
                fileName: path.join(projectDir, file),
                secretName: parts[2]
            };
        }
        return null;
    }).filter(Boolean);
    return validEnvFiles;
}

export { getCustomEnvs };