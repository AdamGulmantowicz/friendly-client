const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require('postcss-import');
const nesting = require('postcss-nesting');
const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
        //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
        postcssImport(),
        nesting(),
        tailwindcss(),
        //But others, like autoprefixer, need to run after,
        autoprefixer(),
        !dev && cssnano({
			preset: "default",
		})
    ],
};

module.exports = config;