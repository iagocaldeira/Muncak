const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
    [
        withCss(
            withSass()
        ),
        [
            optimizedImages,
            {
                optimizeImagesInDev: true
            }
        ]
    ],
    nextConfig
);