const gulp = require('gulp')
const concat = require('gulp-concat')
const jade = require('gulp-jade');
const browserSync = require('browser-sync').create()

const scripts = require('./scripts')
const styles = require('./styles')

var devMode = false

gulp.task('css', function () {
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('js', function () {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('html', function () {
    gulp.src('./src/templates/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('jade', function buildHTML() {
    return gulp.src('./src/templates/**/*.jade')
    .pipe(jade({
        doctype: 'html',
        pretty: false
     }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({
        stream: true
    }))
  });

gulp.task('build', function () {
    gulp.start(['css', 'js', 'html', 'jade'])
})

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist'
        }
    })
})

gulp.task('start', function () {
    devMode = true
    gulp.start(['build', 'browser-sync'])
    gulp.watch(['./src/css/**/*.css'], ['css'])
    gulp.watch(['./src/js/**/*.js'], ['js'])
    gulp.watch(['./src/templates/**/*.html'], ['html'])
    gulp.watch(['./src/templates/**/*.jade'], ['jade'])
})