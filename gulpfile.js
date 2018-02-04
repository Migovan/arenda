let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

let sassPath = 'app/sass/**/*.scss'

gulp.task('sass', function() {
  return gulp.src(sassPath)
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () { 
  browserSync({ 
    server: { 
      baseDir: 'app',
      routes : {
        '/node_modules' : './node_modules'
      }
    },
    notify: false 
  });
});

gulp.task('watch', gulp.parallel('browser-sync', 'sass', function() {
  gulp.watch(sassPath, gulp.series('sass'))
}))
