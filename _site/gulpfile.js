var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer');

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('default', ['scripts', 'sass', 'watch']);

// Scripts Task
gulp.task('scripts', function(){
  return gulp.src('js/*.js')
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .on('error', errorLog)
  .pipe(gulp.dest('dist'));
});

// Sass

gulp.task('sass', function () {
  return sass('_sass/main.scss')
    .on('error', errorLog)
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'))
});


// Img Compress

gulp.task('compress', function () {
  return gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img'));
});


//watch

gulp.task('watch',function(){
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

