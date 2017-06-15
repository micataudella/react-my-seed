# Test Web App for bHERE Framework

A minimal Web application to test story composed for bHERE.
It is based on a Gulp + WebPack workflow.

Needs [NodeJS](https://nodejs.org/it/) and [Gulp](http://gulpjs.com/) to run,

## Usage

1. Clone this repo
2. Inside cloned repo run `npm install`.
3. Run `gulp serve` to run the app.
or
4. Run `gulp serve:dist` to build into dist folder a package for distribution.

### Environments

The dist package can be built for various environment with argument `--env` and the name of the environemnt.
Example: `gulp serve:dist --env staging`

For a list of the environments see file `conf/env.conf.js`

## Local Preview

1. Clone this repo
2. Run `./startLocalPreview.sh /path/to/local/resources/directory/`

Make sure you have **NodeJS**, **NPM**, **Gulp** and **Google Chrome** browser installed on your system.
