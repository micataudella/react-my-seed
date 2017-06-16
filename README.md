# `react-my-seed` — My seed for React JS apps

This project is an application skeleton for a typical [React][react] web app. You can use it
to quickly bootstrap your React webapp projects and dev environment for these projects.

The seed contains a sample React JS application and is preconfigured to install the React
framework and a bunch of development and testing tools for instant web development gratification.


## Getting Started

To get you started you can simply clone the `react-my-seed` repository and install the dependencies:

### Prerequisites

You need git to clone the `react-my-seed` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `react-my-seed`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `react-my-seed`

Clone the `react-my-seed` repository using git:

```
git clone https://github.com/micataudella/react-my-seed.git
cd react-my-seed
```

If you just want to start a new project without the `react-my-seed` commit history then you can do:

```
git clone --depth=1 https://github.com/micataudella/react-my-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

To install the project dependencies simply run:

```
npm install
```

### Script

After clone you can also run `./initDev.sh` to install dependencies and git hooks for commit messages.

### Run the Application

The Project is inspired by a [fountainJS][fountainjs] scaffolded app with Gulp. So commands are more or less the same:

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode

Run `gulp serve:dist --env staging|prod` if you have to manage different development environments (domains and paths). The config file to edit is `env.conf.js` under `/conf`.

Local server is launched on [`localhost:3000/`][local-app-url].

**If you don't have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global, you should have this error:**
> /usr/local/lib/node_modules/gulp/bin/gulp.js:121
    gulpInst.start.apply(gulpInst, toRun);
TypeError: Cannot read property 'apply' of undefined

## Directory structure

```
conf/                   --> configuration files for the application
gulp_tasks/             --> task files for Gulp workflow
src/                    --> all of the source files for the application
  index.css             --> default stylesheet
  app/                  --> all app specific files
    actions/              --> service files
    constants/            --> constants files
    components/           --> view components files
    pages/                --> page components files
  assets/                 --> the asset files
  index.js                --> main application component
  index.html            --> app layout file (the main html template file of the app)
```
## Features

![Logo](src/assets/images/logos/gulp.png)
![Logo](src/assets/images/logos/react.png)
![Logo](src/assets/images/logos/bootstrap.png)
![Logo](src/assets/images/logos/webpack.png)
![Logo](src/assets/images/logos/karma.png)
![Logo](src/assets/images/logos/browsersync.png)

![Logo](src/assets/images/logos/babel.png)
![Logo](src/assets/images/logos/sass.png)
![Logo](src/assets/images/logos/eslint.png)

![Logo](src/assets/images/logos/material-ui.png)


[react]: https://facebook.github.io/react/
[fountainjs]: http://fountainjs.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[local-app-url]: http://localhost:3000/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
