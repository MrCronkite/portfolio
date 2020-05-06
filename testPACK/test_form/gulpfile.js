// connect the necessary packages
const gulp = require("gulp");
const sass = require("gulp-sass");
const autopref = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const browsersync = require("browser-sync").create();
const del = require("del");

// configure sass compilation, collect all the files in one "main.css",
// configure autoprefixer, minimize the main file with styles
function styles() {
	return gulp
		.src("./src/styles/scss/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(concat("main.css"))
		.pipe(
			autopref({
				cascade: false
			})
		)
		.pipe(cleanCss({ compatibility: "ie8" }))
		.pipe(gulp.dest("./dist/css/"))
		.pipe(browsersync.stream());
}

// clear the dist folder
function clean() {
	return del(["dist/css/"]);
}

// configure page auto-refresh
function watch() {
	browsersync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("./src/styles/scss/*.scss", styles);
	gulp.watch("./*.html").on("change", browsersync.reload);
}

// tasks to run gulp
gulp.task("watch", watch);

gulp.task("build", gulp.series(clean, gulp.parallel(styles)));

gulp.task("dev", gulp.series("build", "watch"));
