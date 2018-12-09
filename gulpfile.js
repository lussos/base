var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
// var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: './dist'
    }
  })
});

// Moving html to /dist
gulp.task('html', function () {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});
// Optimizing Images 
gulp.task('images', function () {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images/'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

// Copying fonts 
gulp.task('fonts', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

// Scss task
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie6', 'ie7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('/css'))
    .pipe(gulp.dest('./dist/css/')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

// Babel js task
gulp.task("scripts", function () {
  return browserify("./src/js/main.js")
    .transform(babelify)
    .bundle()
    .pipe(source('base.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});
// Watchers
gulp.task('watch', function () {
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch('./src/images/**/*', ['images']);
  gulp.watch('./src/fonts/**/*', ['fonts']);
});




gulp.task('default', ['sass', 'scripts', 'html', 'fonts', 'images', 'browserSync', 'watch']);