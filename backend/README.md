<!--
https://github.com/othneildrew/Best-README-Template/blob/master/README.md -->

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- [![Forks][forks-shield]][forks-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.etsystatic.com%2F22467704%2Fr%2Fil%2F907556%2F2998547453%2Fil_fullxfull.2998547453_rxym.jpg&sp=1686906565Taf4a310b738e5cf1f6dbb2e13b643f7e39a4b95856919790483c77c147ca17d4" alt="Logo" width="160" height="160">
  </a>

  <h3 align="center">Pesmarica 2: Electric Boogaloo</h3>
  <h3 align="center"><strong>BACKEND</strong></h3>
  <br>
  <p align="center">
    <a href="https://pesmarica2-production-91cd.up.railway.app/api">API URL</a>
    ·
    <a href="https://github.com/wem1c/pesmarica2/issues">Report Bug</a>
    ·
    <a href="https://github.com/wem1c/pesmarica2/issues">Request Feature</a>
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
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This doc explains how the **backend** of the [main project](https://github.com/wem1c/pesmarica2) works.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![Python][python-shield]][python-url]
-   [![Django][django-shield]][django-url]
-   [![django-rest-framework][django-rest-framework-shield]][django-rest-framework-url]
-   [![djoser][djoser-shield]][djoser-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is a monorepo holding both the frontend and the backend in the `/frontend/` and `/backend/` folders, respectively.

You can find the frontend documentation [here][frontend-readme-url], and the main documentation [here](https://github.com/wem1c/pesmarica2/blob/main/README.md).

The rest of this document focuses only on the backend environment.

### Prerequisites

-   [git][git-url]
-   [python][python-url]
-   [pip][pip-url]

### Installation

1. Clone the repo

```sh
git clone https://github.com/wem1c/pesmarica2.git
```

2. cd into the backend folder

```sh
cd backend
```

3. create a virtual environment

```sh
python -m venv .venv
```

4. activate the virtual environment

```sh
source .venv/bin/activate
```

5. install the dependencies

```sh
pip install -r requirements.txt
```

6. make migrations

```sh
python manage.py makemigrations
```

7. migrate

```sh
python manage.py migrate
```

8. run the server

```sh
python manage.py runserver
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

### API Schema

The API schema is available:

-   in the file `/backend/openapi-schema.yml`
-   at an endpoint at [/api/schema](https://pesmarica2-production-91cd.up.railway.app/api/schema)
-   as an online doc via [Redoc](https://redocly.github.io/redoc/?url=https://pesmarica2-production-91cd.up.railway.app/api/schema).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Conor C. Peterson - [@wemic](https://social.linux.pizza/@wemic) - conorpetersondev@gmail.com

Project Link: [https://github.com/wem1c/pesmarica2](https://github.com/wem1c/pesmarica2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [Conventional Commits](https://conventionalcommits.org)
-   [mdn web docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django)
-   [SQLite](https://www.sqlite.org/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [OpenAPI](https://www.openapis.org/)
-   [Redoc](https://redocly.github.io/redoc/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/wem1c/pesmarica2/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/wem1c/pesmarica2/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/wem1c/pesmarica2/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[python-shield]: https://img.shields.io/badge/Python-3.11.3-3673a6?style=for-the-badge&logo=python&labelColor=white
[python-url]: https://python.org/
[django-shield]: https://img.shields.io/badge/Django-4.2.1-white?style=for-the-badge&logo=django&logoColor=ffffff&labelColor=092E20
[django-url]: https://www.djangoproject.com/
[frontend-readme-url]: https://github.com/wem1c/pesmarica2/blob/main/frontend/README.md
[backend-readme-url]: https://github.com/wem1c/pesmarica2/blob/main/backend/README.md
[pip-url]: https://pip.pypa.io/en/stable/
[git-url]: https://git-scm.com/
[django-rest-framework-shield]: https://img.shields.io/badge/Django%20REST%20Framework-3.14.0-a30000?style=for-the-badge&labelColor=black
[django-rest-framework-url]: https://www.django-rest-framework.org/
[djoser-shield]: https://img.shields.io/badge/djoser-2.2.0-white?style=for-the-badge&labelColor=2980b9
[djoser-url]: https://djoser.readthedocs.io/en/latest/
