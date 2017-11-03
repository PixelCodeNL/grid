var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

/* Set src / distribution paths */
var src = 'src';
var paths = {
    sassGlobal: src + '/**/*.scss',
    sassCompile: src + '/*.scss'
};

/* Sass */
gulp.task('sass', function () {
    gulp.src(paths.sassCompile)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass())
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function () {
    gulp.watch(paths.sassGlobal, ['sass']);
});

/* Default task(s) when gulp is called without arguments */
gulp.task('default', ['watch']);

/* Build task */
gulp.task('build', ['sass']);
