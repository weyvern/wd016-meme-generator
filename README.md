# Meme generator (with ImgFlip API)

![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

## Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

# Commands | ⚠️The project is setup with Yarn as package manager, if you are to use npm, remove yarn.lock and run npm install!⚠️

## Start

Start commands runs app with Node

```bash
npm/yarn start
```

## Start

Start commands runs app with Node

```bash
npm/yarn run build
```

## Structure

- 📦src
- ┣ 📂components
- ┃ ┣ 📜MemeCanvas.js 👉 Shows current template
- ┃ ┣ 📜MemeInput.js 👉 Renders a form with n inputs where n is equal to the length of the inputs array
- ┃ ┣ 📜MemeSelector.js 👉 Gets list of templates from imgflip's API and renders a list of TemplateItem components
- ┃ ┗ 📜TemplateItem.js 👉 Renders individual template selector and sets selected template and inputs
- ┣ 📜App.js 👉 Main component
- ┗ 📜index.js 👉 Mount point

## Features

- [] Get list of templates
- [] Select one template to work on
- [] Allow user to input text
- [] Submit to API and get meme back
- [] Save/share meme
- [] Refactor to Context API
