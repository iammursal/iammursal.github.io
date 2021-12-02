const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = {
  root: "./src/",
  publicDir: "static",
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "../dist/",
    sourcemap: "hidden",
    output: {
      entryFileNames: `assets/[name].js`,
      chunkFileNames: `assets/[name].js`,
      assetFileNames: `assets/[name].[ext]`,
    },
  },
  // cacheDir: "../cache/",
  sourcemap: true,
};
