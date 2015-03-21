var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.watch('watch', function() {
  gulp.watch('./scss/*.scss', ['sass']);
});
