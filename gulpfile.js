const gulp = require("gulp");
const sass = require("gulp-sass");
const htmlMin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
/**
 * NOTE: Transpiles our ES6 to ES5
 * @babel/core AND @babel/preset-env are needed for full transpilation to work
 */
// const babel = require("gulp-babel");
//NOTE: Minifies our JS
// const uglify = require("gulp-uglify");

const browserSync = require("browser-sync").create();

//TODO: COPY HTML FILES FROM SRC TO DIST USING A FUNCTION
function minifyHTML() {
	return gulp
		.src("./src/*.html")
		.pipe(
			htmlMin({
				collapseWhitespace: true,
				removeComments: true
			})
		)
		.pipe(gulp.dest("./build/"));
}

function style() {
	return gulp
		.src("./src/sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest("./build/css"))
		.pipe(browserSync.stream());
}

function copyIconsCSS() {
	return gulp.src("./src/css/*").pipe(cleanCSS()).pipe(gulp.dest("./build/css/"));
}

function copyImages() {
	return gulp.src("./src/img/*").pipe(gulp.dest("./build/img"));
}

function copyJS() {
	return gulp.src("./src/js/index.js").pipe(gulp.dest("./build/js"));
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./build"
		}
	});
	gulp.watch("./src/*.html", minifyHTML);
	gulp.watch("./src/sass/**/*.scss", style);
	gulp.watch("./src/Images/*", copyImages);
	gulp.watch("./src/css/**/*", copyIconsCSS);
	gulp.watch("./src/js/index.js", copyJS);
	gulp.watch("./src/*.html").on("change", browserSync.reload);
	gulp.watch("./src/js/index.js").on("change", browserSync.reload);
}

exports.minifyHTML = minifyHTML;
exports.style = style;
exports.copyImages = copyImages;
exports.watch = watch;
exports.copyJS = copyJS;
exports.copyIconsCSS = copyIconsCSS;
