var gulp = require('gulp');
		notify = require('gulp-notify');
    rename = require('gulp-rename');
		sass = require('gulp-sass');
		autoprefixer = require('gulp-autoprefixer');
		minifyCSS = require('gulp-cssnano');
		browserSync = require('browser-sync');
		plumber = require('gulp-plumber');
		webpack = require('webpack-stream');

gulp.task('compile-react', function() {
	return gulp.src('./js/main.jsx')
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>"
		)}))
		.pipe(webpack({
			output: {
				filename: 'main.js'
			},
			module: {
				loaders: [{
					test: /\.jsx?$/,
					exclude: /node-modules/,
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					}
				}]
			}
		}))
		.pipe(gulp.dest('./build/scripts'));
});

gulp.task('sass', function (){
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('browser-sync', ['compile-react'], function() {

	browserSync.init({
    server: {
      baseDir: './'
    }
  });

	gulp.watch(['./scss/**/*.scss'], ['sass']);
	gulp.watch(['./js/**/*.jsx'], ['compile-react']);
	gulp.watch(['./build/scripts/main.js', 'index.html', './build/css/style.css']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
