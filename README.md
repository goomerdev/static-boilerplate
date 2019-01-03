# Static Page Boilerplate

A boilerplate for building static pages using Webpack, Pug and SCSS.

## Table of Contents

+ [Requisites](#requisites)
+ [Usage](#usage)
+ [Directory Structure](#directory-structure)

## Requisites

+ [Git](https://git-scm.com/downloads/)
+ [Node.js - LTS](https://nodejs.org/en/download/)

## Usage

```console
$ git clone https://github.com/goomerdev/static-boilerplate
$ cd static-boilerplate
$ npm i && npm run dev
```

## Directory Structure

```
.
├── src
│   ├── img
│   ├── js
│   │   └── script.js
│   ├── scss
│   │   ├── modules
│   │   │   ├── _breakpoints.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── partials
│   │   │   ├── atoms
│   │   │   ├── molecules
│   │   │   └── organisms
│   │   └── styles.scss
│   ├── index.js
│   └── index.pug
├── .babelrc
├── .gitignore
├── .stylelintrc
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── webpack.config.js

```
