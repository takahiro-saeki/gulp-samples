import gulp from 'gulp';
import ejs from 'gulp-ejs';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import PATHS from './path';

gulp.task('ejs', () => {
  gulp.src([PATHS.EJS])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(ejs())
  .pipe(gulp.dest(PATHS.TEMP_EJS))
});
