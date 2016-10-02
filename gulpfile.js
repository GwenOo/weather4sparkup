var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/'));
});