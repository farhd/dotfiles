var gulp = require('gulp'), 
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    pls = require('gulp-pleeease'),
    plsOptions = {
      optimizers: {
        "autoprefixer": { "browser": [ "> 1%", "last 3 versions", "Firefox ESR", "Opera 12.1" ]},
        "filters": true,
        "rem": true,
        "pseudoElements": true,
        "opacity": true,
        "import": true,
        "minifier": true,
        "mqpacker": false,
        "sourcemaps": false,
        "next": false
      }
};

gulp.task('js', function () {
  return gulp.src('util/js/zettings/*.js')
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('util/js/zettings/minified'));
});

gulp.task('css', function () {
  return gulp.src('util/css/all.dev.css')
    .pipe(pls(plsOptions))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('util/css/minified'));
});

gulp.task('watch', function () {
  gulp.watch('util/js/zettings/*.js', ['js']);
  gulp.watch('util/css/*.css', ['css']);
});

gulp.task('default', ['js', 'css']);