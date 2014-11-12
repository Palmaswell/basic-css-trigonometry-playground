var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').styles;

gulp.task('styles',  function () {
  return gulp.src(config.src)
    .pipe(sass({
      compass: true,
      bundleExec: false,
      sourcemap: true,
      sourcemapPath: '../sass'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
