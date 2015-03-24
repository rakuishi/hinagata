var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch(['./*.html', './css/style.css'], ['bs-reload']);
});
