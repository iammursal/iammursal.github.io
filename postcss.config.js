module.exports = {
  map: true,
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.html", "./src/**/*.js"],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ""
        );
        return (
          contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
          []
        );
      },
      whitelist: [],
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
      ],
    },
    // "postcss-preset-env": {
    //   autoprefixer: {
    //     flexbox: "no-2009",
    //   },
    //   stage: 3,
    //   features: {
    //     "custom-properties": false,
    //   },
    // },
    autoprefixer: {},
    cssnano: {
      preset: ["default", { svgo: false }],
    },
    
  },
};
