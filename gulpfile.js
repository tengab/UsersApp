const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const jade = require('gulp-jade');
const less = require('gulp-less');
const image = require('gulp-image');
const browserSync = require('browser-sync').create();
const scripts = require('./scripts');
const styles = require('./styles');

gulp.task('image', () => {
    gulp.src('./src/common/images/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task('less', () => {
    gulp.src(styles)
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('jade', buildHTML = () => {
    gulp.src('./src/components/**/*.jade')
        .pipe(jade({
            doctype: 'html',
            pretty: false
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', () => {
    gulp.src(scripts)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('babel', () => {
    gulp.src('./src/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', () => {
    gulp.start(['image', 'less', 'jade', 'js', 'babel']);
});

gulp.task('browser-sync', () => {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('start', () => {
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./src/common/images/*'], ['images']);
    gulp.watch(['./src/**/*.less'], ['less']);
    gulp.watch(['./src/**/*.jade'], ['jade']);
    gulp.watch(['./src/**/*.js'], ['babel']);
});