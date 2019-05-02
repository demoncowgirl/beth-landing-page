var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

// task to copy all htm/html files from app directory to dist directory
gulp.task('copyhtml', function() {
  return gulp.src('app/*.+(htm|html)')
	.pipe(gulp.dest('dist/'))
 });

// function to change sass code to css
gulp.task('copycss', function() {
	return gulp.src('app/css/*.css')
		.pipe(gulp.dest('dist/'))
});

gulp.task('watch', function() {
	gulp.watch('app/*.+(htm|html)', gulp.series('copyhtml'));
  gulp.watch('app/**/*.css', gulp.series('copycss'));
});

gulp.task('default', function(callback) {
	runSequence(['sass', 'copycss', 'copyjs'], callback)
});
