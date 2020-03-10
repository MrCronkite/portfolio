const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const del = require("del");

function styles() {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("all.css"))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

function clean() {
  return del(["dist/*"]);
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/styles/**/*.scss", styles);
  gulp.watch("./src/img/", image);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

function image() {
  return gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/imgs"))
    .pipe(browserSync.stream());
}

gulp.task("styles", styles);

gulp.task("del", clean);

gulp.task("watch", watch);

gulp.task("build", gulp.series(clean, gulp.parallel(styles, image)));

gulp.task("dev", gulp.series("build", "watch"));
