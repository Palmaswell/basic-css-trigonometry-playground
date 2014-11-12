var gulp   = require('gulp');
var haml   = require('gulp-haml');
var config = require('../config').views;

gulp.task('views', function() {
  return gulp.src(config.src)
  	.pipe(haml())
    .pipe(gulp.dest(config.dest));
});
