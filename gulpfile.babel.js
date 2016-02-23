import gulp from 'gulp';
import requireDir from 'require-dir';
requireDir('./gulp');

gulp.task('default', ['js', 'ejs', 'webserver', 'watch']);
