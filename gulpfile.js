'use strict';
var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var eslint = require('gulp-eslint');
var webpackConfig = require('./webpack.config.js');
var webpack = require('webpack');
var paths = {
    scripts: ['./src/js/*.js', '!./src/js/*jquery.ripples.js'],
    scss: ['./src/scss/*.scss'],
    css: ['./src/css/*.css']
};

gulp.task("scss", function() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('webpack', function() {
    webpack(webpackConfig, function(err, stats) {
        if (err) {
            console.log(err);
        }
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.scss, ['scss']);
    gulp.watch(paths.scripts, ['lint']);
});

gulp.task('default', ['lint', 'scss', 'watch']);
