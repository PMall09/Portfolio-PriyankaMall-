const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const scssPath = '_scss/*.scss';
const destPath = '_site/css';
module.exports = gulp => {
  gulp.task('sass', () => {
    return gulp
      .src(scssPath)
      .pipe(
        sass({
