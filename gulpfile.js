/**
 * Settings
 * Turn on/off build features
 */

var settings = {
  clean: true,
  html: true,
  scripts: true,
  polyfills: false,
  styles: true,
  imgs: true,
  copy: true,
  reload: true,
};

/**
 * Paths to project folders
 */

var paths = {
  input: "src/",
  output: "dist/",
  scripts: {
    input: "src/js/*",
    polyfills: ".polyfill.js",
    output: "dist/js/",
  },
  html: {
    input: "src/**/*.html",
    output: "dist/",
  },
  styles: {
    input: "src/sass/**/*.{scss,sass}",
    output: "dist/css/",
  },
  imgs: {
    input: "src/img/**/*",
    output: "dist/img/",
  },
  copy: {
    input: "src/copy/**/*",
    output: "dist/",
  },
  reload: "./dist/",
};

/**
 * Template for banner to add to file headers
 */

var banner = {
  main:
    "/*!" +
    " <%= package.name %> v<%= package.version %>" +
    " | (c) " +
    new Date().getFullYear() +
    " <%= package.author.name %>" +
    " | <%= package.license %> License" +
    " | <%= package.repository.url %>" +
    " */\n",
};

/**
 * Gulp Packages
 */

// General
var { gulp, src, dest, watch, series, parallel, task } = require("gulp");
var del = require("del");
var flatmap = require("gulp-flatmap");
var lazypipe = require("lazypipe");
var rename = require("gulp-rename");
var header = require("gulp-header");
var package = require("./package.json");
const ghPages = require("gulp-gh-pages");

// HTML
const htmlmin = require("gulp-htmlmin");
const fileinclude = require("gulp-file-include");

// Scripts
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var concat = require("gulp-concat");
var uglify = require("gulp-terser");
var optimizejs = require("gulp-optimize-js");

// Styles
var sass = require("gulp-sass")(require("node-sass"));
var purgecss = require("gulp-purgecss");
var postcss = require("gulp-postcss");
var prefix = require("autoprefixer");
var minify = require("cssnano");

// Images
var imagemin = require("gulp-imagemin");

// BrowserSync
var browserSync = require("browser-sync");

/**
 * Gulp Tasks
 */

// Remove pre-existing content from output folders
var cleanDist = function (done) {
  // Make sure this feature is activated before running
  if (!settings.clean) return done();

  // Clean the dist folder
  del.sync([paths.output]);

  // Signal completion
  return done();
};

// Repeated JavaScript tasks
var jsTasks = lazypipe()
  .pipe(header, banner.main, { package: package })
  .pipe(optimizejs)
  .pipe(dest, paths.scripts.output)
  .pipe(rename, { suffix: ".min" })
  .pipe(uglify)
  .pipe(optimizejs)
  .pipe(header, banner.main, { package: package })
  .pipe(dest, paths.scripts.output);

// Repeated JavaScript tasks (Fast)
var jsTasksMin = lazypipe()
  .pipe(dest, paths.scripts.output)
  .pipe(rename, { suffix: ".min" })
  .pipe(dest, paths.scripts.output);

// Repeated FileInclude Config
var fileIncludeConfig = {
  prefix: "@@",
  basepath: "@file",
};

/* -------------------------------------------------------------------------- */
/*                                    FULL                                    */
/* -------------------------------------------------------------------------- */
// Lint, minify, and concatenate scripts
var buildScripts = function (done) {
  // Make sure this feature is activated before running
  if (!settings.scripts) return done();

  // Run tasks on script files
  return src(paths.scripts.input).pipe(
    flatmap(function (stream, file) {
      // If the file is a directory
      if (file.isDirectory()) {
        // Setup a suffix variable
        var suffix = "";

        // If separate polyfill files enabled
        if (settings.polyfills) {
          // Update the suffix
          suffix = ".polyfills";

          // Grab files that aren't polyfills, concatenate them, and process them
          src([
            file.path + "/*.js",
            "!" + file.path + "/*" + paths.scripts.polyfills,
          ])
            .pipe(concat(file.relative + ".js"))
            .pipe(jsTasks());
        }

        // Grab all files and concatenate them
        // If separate polyfills enabled, this will have .polyfills in the filename
        src(file.path + "/*.js")
          .pipe(concat(file.relative + suffix + ".js"))
          .pipe(jsTasks());

        return stream;
      }

      // Otherwise, process the file
      return stream.pipe(jsTasks());
    })
  );
};

// Lint scripts
var lintScripts = function (done) {
  // Make sure this feature is activated before running
  if (!settings.scripts) return done();

  // Lint scripts
  return src(paths.scripts.input)
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
};

// Process, lint, and minify Sass files
var buildStyles = function (done) {
  // Make sure this feature is activated before running
  if (!settings.styles) return done();

  // Run tasks on all Sass files
  return src(paths.styles.input)
    .pipe(
      sass({
        outputStyle: "expanded",
        sourceComments: true,
      })
    )
    .pipe(
      purgecss({
        content: [paths.html.input],
      })
    )
    .pipe(
      postcss([
        prefix({
          cascade: true,
          remove: true,
        }),
      ])
    )
    .pipe(header(banner.main, { package: package }))
    .pipe(dest(paths.styles.output))
    .pipe(rename({ suffix: ".min" }))
    .pipe(
      postcss([
        minify({
          discardComments: {
            removeAll: true,
          },
        }),
      ])
    )
    .pipe(dest(paths.styles.output));
};

// Optimize IMG files
var buildIMGs = function (done) {
  // Make sure this feature is activated before running
  if (!settings.imgs) return done();

  // Optimize IMG files
  return src(paths.imgs.input)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(paths.imgs.output));
};

// Copy static files into output folder
var copyFiles = function (done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src(paths.copy.input).pipe(dest(paths.copy.output));
};

// HTML minify
var buildHtml = function (done) {
  if (!settings.html) return done();

  return src(paths.html.input)
    .pipe(fileinclude(fileIncludeConfig))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.html.output));
};

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                    FAST                                    */
/* -------------------------------------------------------------------------- */

// Concatenate and rename scripts
var buildScriptsFast = function (done) {
  // Make sure this feature is activated before running
  if (!settings.scripts) return done();

  //Scripts
  // Run tasks on script files
  return src(paths.scripts.input).pipe(
    flatmap(function (stream, file) {
      // If the file is a directory
      if (file.isDirectory()) {
        // Setup a suffix variable
        var suffix = "";

        // If separate polyfill files enabled
        if (settings.polyfills) {
          // Update the suffix
          suffix = ".polyfills";

          // Grab files that aren't polyfills, concatenate them, and process them
          src([
            file.path + "/*.js",
            "!" + file.path + "/*" + paths.scripts.polyfills,
          ])
            .pipe(concat(file.relative + ".js"))
            .pipe(dest, paths.scripts.output);
        }

        // Grab all files and concatenate them
        // If separate polyfills enabled, this will have .polyfills in the filename
        src(file.path + "/*.js")
          .pipe(concat(file.relative + suffix + ".js"))
          .pipe(jsTasksMin());

        return stream;
      }

      // Otherwise, process the file
      return stream.pipe(jsTasksMin());
    })
  );
};

// Compile to css, gen map and rename styles
var buildStylesFast = function (done) {
  // Make sure this feature is activated before running
  if (!settings.styles) return done();
  // Styles
  return src(paths.styles.input)
    .pipe(
      sass({
        outputStyle: "expanded",
        sourceComments: true,
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest(paths.styles.output));
};

// HTMl Compile
var buildHtmlFast = function (done) {
  // Make sure this feature is activated before running
  if (!settings.html) return done();
  // HTML
  return src(paths.html.input)
    .pipe(fileinclude(fileIncludeConfig))
    .pipe(dest(paths.html.output));
};

// Copy some none processed stuffs
var copyFilesExtra = function (done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  src(paths.copy.input).pipe(dest(paths.copy.output));

  // IMGs
  src(paths.imgs.input).pipe(dest(paths.imgs.output));

  done();
};
/* -------------------------------------------------------------------------- */

/* ---------------------------- Watch for changes --------------------------- */
var watchSource = function (done) {
  watch(paths.input, series(exports.dev, reloadBrowser));
  done();
};
var watchHTML = function (done) {
  watch(paths.html.input, series(exports.html, reloadBrowser));
  done();
};
var watchScripts = function (done) {
  watch(paths.scripts.input, series(exports.scripts, reloadBrowser));
  done();
};
var watchStyle = function (done) {
  watch(paths.styles.input, series(exports.styles, reloadBrowser));
  done();
};
var watchOthers = function (done) {
  watch(
    [paths.copy.input, paths.imgs.input],
    // { ignored: [paths.styles.input, paths.scripts.input] },
    series(exports.copyFilesExtra, reloadBrowser)
  );
  done();
};
/* -------------------------------------------------------------------------- */

// Watch for changes to the src directory
var startServer = function (done) {
  // Make sure this feature is activated before running
  if (!settings.reload) return done();

  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: paths.reload,
    },
  });

  // Signal completion
  done();
};

// Reload the browser when files change
var reloadBrowser = function (done) {
  if (!settings.reload) return done();
  browserSync.reload();
  done();
};

/* -------------------------------------------------------------------------- */
/*                                Export Tasks                                */
/* -------------------------------------------------------------------------- */
// Build for production
exports.prod = series(
  cleanDist,
  buildHtml,
  parallel(buildScripts, buildStyles, buildIMGs, copyFiles)
);
// Build for development(faster)
exports.dev = series(
  cleanDist,
  parallel(
    buildHtmlFast,
    buildScriptsFast,
    buildStylesFast,
    lintScripts,
    copyFilesExtra
  )
);
// Build for html(faster)
exports.html = series(buildHtmlFast);
// Build for scripts(faster)
exports.scripts = series(parallel(buildScriptsFast, lintScripts));
// Build for styles(faster)
exports.styles = buildStylesFast;
// Build for styles(faster)
exports.copyFilesExtra = copyFilesExtra;

// Build Dev, Start Server and Watch
exports.watch = series(
  exports.dev,
  watchHTML,
  startServer,
  watchStyle,
  watchScripts,
  watchOthers
);

// Github Pages
task("deploy", () => src("./dist/**/*").pipe(ghPages()));
/* -------------------------------------------------------------------------- */
