const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const template = require('gulp-template');
const rename = require('gulp-rename');
const argv = require('yargs').argv;

const conf = require('../conf/gulp.conf');
const envs = require('../conf/env.conf');

gulp.task('clean', clean);
gulp.task('other', other);
gulp.task('environment', env);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js}')
  ], {dot: true})
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}

function env() {
  const domain = envs.baseDomains[argv.env] || envs.baseDomains['dev'];
  const basePath = envs.basePaths[argv.env] || envs.basePaths['dev'];
  return gulp.src('conf/env.tpl.ejs')
    .pipe(template({domain, basePath}))
    .pipe(rename('env.js'))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app/constants')));
}
