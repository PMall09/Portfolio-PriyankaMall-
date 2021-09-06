const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');

const jsPath = '_scripts/*.js';
const destPath = '_site/js';

module.exports = gulp => {
  gulp.task('scripts', () => {
