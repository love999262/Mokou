'use strict';
const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const paths = {
    scripts: ['./src/js/*.js', '!./src/js/*jquery.ripples.js', '!./src/js/*min*'],
    scss: ['./src/scss/*.scss'],
    css: ['./src/css/*.css']
};

gulp.task('scss', function() {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('webpack', ['lint'], function() {
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
