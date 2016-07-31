/**
 * Created by Administrator on 2016/6/9 0009.
 */
var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');

var scripts = require('./app.scripts.json');

var source = {
    js: {
        main: 'app/main.js',
        src: [
            // application config
            //'app.config.js',

            // application bootstrap file
            'app/main.js',

            // main module
            'app/app.js',

            // module files
            'app/**/module.js',

            // other js files [controllers, services, etc.]
            'app/**/!(module)*.js'

        ],
        tpl: 'app/**/*.tpl.html'
    }
};

var destinations = {
    js: 'build'
};

gulp.task('vendor', function(){
    var paths = [];
    scripts.prebuild.forEach(function(script){
        paths.push(scripts.paths[script]);
    });
    gulp.src(paths)
        .pipe(concat('vendor.js'))
        //.on('error', swallowError)
        .pipe(gulp.dest(destinations.js))
});

gulp.task('build', function(){
    return es.merge(gulp.src(source.js.src) , getTemplateStream())
        // .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destinations.js));
});

gulp.task('watch', function(){
    gulp.watch(source.js.src, ['build']);
    gulp.watch(source.js.tpl, ['build']);
});

/*gulp.task('watchdebug', function(){
 gulp.watch(source.js.src, ['injectdebug']);
 //gulp.watch(source.js.tpl, ['injectdebug']);
 });*/

gulp.task('connect', function() {
    connect.server({
        port: 8888
    });
});

/*
 gulp.task('injectdebug', function () {
 var target = gulp.src('./pages/index.html');
 // It's not necessary to read the files (will speed up things), we're only after their paths:
 var sources = gulp.src(source.js.src, {read: false});

 return target.pipe(inject(sources))
 .pipe(gulp.dest('./'));
 });
 */

gulp.task('inject', function () {
    var target = gulp.src('./pages/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['build/app.js'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['vendor', 'build', 'inject', 'watch', 'connect']);
//gulp.task('debug', ['vendor','injectdebug', 'watchdebug', 'connect']);

var swallowError = function(error){
    console.log(error.toString());
    this.emit('end')
};

var getTemplateStream = function () {
    return gulp.src(source.js.tpl)
        .pipe(templateCache({
            root: 'app/',
            module: 'app'
        }))
};