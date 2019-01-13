const optimizedImages = require("next-optimized-images");
const withFonts = require('next-fonts');
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");

module.exports = withPlugins(
    [
        withFonts(),
        [
            withSass,
            {
                cssLoaderOptions: {
                    localIdentName: '[local]___[hash:base64:5]'
                }
            }
        ]
        ,
        [
            optimizedImages,
            {
                optimizeImagesInDev: false
            }
        ]
    ]
);