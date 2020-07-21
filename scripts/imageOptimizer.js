const fs = require('fs-extra');
const glob = require('glob');
const sharp = require('sharp');

// const matches = glob.sync("src/images/**/*.{png,jpg,jpeg}");
const matches = glob.sync('src/images/**/*.{png,jpg,jpeg}', {
    // ignore: ["src/images/parallax/**/*.{png,jpg,jpeg}"]
});

const MAX_WIDTH = 2550;
const QUALITY = 100;

Promise.all(
    matches.map(async (match) => {
        const stream = sharp(match);
        const info = await stream.metadata();

        if (info.width <= MAX_WIDTH) {
            return;
        }

        const optimizedName = match.replace(
            /(\..+)$/,
            (match, ext) => `--optimized${ext}`,
        );

        await stream
            .resize(MAX_WIDTH)
            .jpeg({ quality: QUALITY })
            .toFile(optimizedName);

        return fs.rename(optimizedName, match);
    }),
);
