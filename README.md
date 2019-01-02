# Static Page Boilerplate

A boilerplate for building static pages using Webpack, Pug and SCSS.

## Table of Contents

+ [Requisites](#requisites)
+ [Usage](#usage)
+ [Environment Examples](#environment-examples)
+ [Development](#development)
+ [DDD and Clean Architecture](#ddd-and-clean-architecture)
+ [Directory Structure](#directory-structure)

+ ## Requisites

+ [Git](https://git-scm.com/downloads/)
+ [Node.js - LTS](https://nodejs.org/en/download/)

## Usage

```console
$ git clone https://github.com/goomerdev/static-boilerplate
$ cd static-boilerplate
$ npm i && npm run dev
```

## Development

This project has a commit hook already configured that will run [Eslint](https://github.com/eslint/eslint) based on [Airbnb JavsScript Style Guide](https://github.com/airbnb/javascript) and [Prettier](https://github.com/prettier/prettier) to provide with uniform and formated code style.

## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure as follows:

![Image of Layers](http://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

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
