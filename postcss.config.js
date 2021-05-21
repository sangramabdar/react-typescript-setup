const tailwind = require("tailwindcss");
const purgeCss = require("postcss-purgecss");

module.exports = {
  plugins: [
    tailwind("./tailwind.config.js"),
    require("autoprefixer"),
    purgeCss({
      content: ["./src/***.tsx", "./public/index.html"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
