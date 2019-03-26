"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const mqpacker = require("css-mqpacker");
const minify = require("gulp-csso");
const gcmq = require('gulp-group-css-media-queries');
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const svgstore = require("gulp-svgstore");
const run = require("run-sequence");
const del = require("del");
const svgo = require('gulp-svgo');
const sourcemaps = require(`gulp-sourcemaps`);
const rollup = require(`gulp-better-rollup`);
const babel = require(`rollup-plugin-babel`);
const resolve = require(`rollup-plugin-node-resolve`);
const commonjs = require(`rollup-plugin-commonjs`);
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task(`scripts`, function() {
  return gulp.src([`src/js/**/*.js`, `!src/js/svg4everybody.js`]).
    pipe(plumber()).
    pipe(sourcemaps.init()).
    pipe(rollup({
      plugins: [
        resolve({browser: true}),
        commonjs(), 
        babel({
          babelrc: false,
           exclude: `node_modules/**`,
           presets: [`@babel/env`] 
        })
      ]
    }, `iife`)).
    pipe(uglify()).
    pipe(concat('main.js')).
    pipe(sourcemaps.write(``)).
    pipe(gulp.dest(`build/js/`));
});

gulp.task("style", function() {
  gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions",
        'Android >= 4',
        'IE >= 9'
      ]})
      // mqpacker({
      //   sort: true
      // })
    ]))
    .pipe(gcmq())
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function() {
  return gulp.src("build/img/icons/*.svg")
  .pipe(svgo())
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
});

gulp.task("html:copy", function() {
 return gulp.src("src/*.html")
 .pipe(gulp.dest("build"));
});

gulp.task("html:update", ["html:copy"], function(done) {
 server.reload();
 done();
});

gulp.task(`js-watch`, [`scripts`], (done) => {
  server.reload();
  done();
});

gulp.task("serve", function() {
  server.init({
    server: "build/"
  });

  gulp.watch("src/sass/**/*.scss", ["style"]);
  gulp.watch("src/*.html", ["html:update"]);
  gulp.watch(`src/js/**/*.js`, [`js-watch`]);
});

gulp.task("copy", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**",
    "src/*.html",
    "src/js/svg4everybody.js",
  ], {
    base: "./src"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", function(fn) {
    run(
      "clean",
      "copy",
      "scripts",
      "style",
      "images",
      "sprite",
      fn
  );
});
