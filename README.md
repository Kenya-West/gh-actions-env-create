<!-- Based on https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Kenya-West/gh-actions-env-create">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GitHub Actions environment create</h3>

  <p align="center">
    Create GitHub Actions secrets needed for any of your repository to be build and deployed
    <br />
    <br />
    <a href="https://github.com/Kenya-West/gh-actions-env-create/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/Kenya-West/gh-actions-env-create/issues/new">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The reason this repository exist is a had to repeatedly create typical secrets with the same keys again and again, and decided to automate it with Node.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![Node][NodeJS.org]][NodeJS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started: usage

### Prerequisites

- Ensure `git` and `node` are installed;
- You need to have an own [GitHub PAT](https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) with `write` access for GitHub Actions secrets.

Is recommended:
- To have specific SSH key for GitHub Actions.

### Installation

1. First, you need to clone this repo using Git:
    ```sh
    git clone https://github.com/Kenya-West/xui-api-server.git
    ```
2. Install NPM packages:
    ```sh
    npm ci
    ```
3. Duplicate directory `./projects/some-proj/` at the same level with desired project name and write down the following values in `.env` files:
   - `.env.github-actions-setup`: data required for script to run;
   - `.env.github-actions-secrets`: list of secrets to be set in GitHub Actions secrets for the project;
   - `.env` contents. They may (or may not) be used to create `.env` file in destination machine, decoded from `base64`.
4. After setuping project and filling needed values, you can launch the script with the following command:
    ```sh
    node ./index.js --project=YOUR_PROJECT_NAME
    ```
    The output would be like so:
    ```sh
    node ./index.js --project=sd-article-summarizer-bot
    Project path: sd-article-summarizer-bot
    Successfully set secret: VPS_USERNAME
    Successfully set secret: VPS_IP
    Successfully set secret: SSH_PRIVATEKEY
    Successfully set secret: PROJECT_DOCKERCONTAINERNAME
    Successfully set secret: PROJECT_DIRNAME
    Successfully set secret: DOCKERHUB_USERNAME
    Successfully set secret: DOCKERHUB_TOKEN
    Successfully set secret: DOCKERHUB_REPONAME
    Successfully set secret: ENV_CONTENT
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started: contributing & development

### Prerequisites

- Ensure `git` and `node` are installed;
- You need to have an own [GitHub PAT](https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) with `write` access for GitHub Actions secrets.

Is recommended:
- To have specific SSH key for GitHub Actions.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

First, you need to clone this repo using Git:
1. git:
   ```sh
   git clone https://github.com/Kenya-West/xui-api-server.git
   ```
2. Install NPM packages:
   ```sh
   npm ci
   ```
3. Enjoy exploring things!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Rest this weekend well

See the [open issues](https://github.com/Kenya-West/gh-actions-env-create/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/Kenya-West/gh-actions-env-create/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Kenya-West/gh-actions-env-create" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - @Kenya-West - [Kenya-West@example.com](mailto:Kenya-West+gh-actions-env-create@example.com)

Project Link: [https://github.com/Kenya-West/gh-actions-env-create](https://github.com/Kenya-West/gh-actions-env-create)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kenya-West/gh-actions-env-create.svg?style=for-the-badge
[contributors-url]: https://github.com/Kenya-West/gh-actions-env-create/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kenya-West/gh-actions-env-create.svg?style=for-the-badge
[forks-url]: https://github.com/Kenya-West/gh-actions-env-create/network/members
[stars-shield]: https://img.shields.io/github/stars/Kenya-West/gh-actions-env-create.svg?style=for-the-badge
[stars-url]: https://github.com/Kenya-West/gh-actions-env-create/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kenya-West/gh-actions-env-create.svg?style=for-the-badge
[issues-url]: https://github.com/Kenya-West/gh-actions-env-create/issues
[license-shield]: https://img.shields.io/github/license/Kenya-West/gh-actions-env-create.svg?style=for-the-badge
[license-url]: https://github.com/Kenya-West/gh-actions-env-create/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kenyawest
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[NodeJS.org]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org 