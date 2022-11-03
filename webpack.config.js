const path = require("path");

module.exports = {
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    mode: "development",
    // module: {
    //     rules: [
    //         {
    //             test: /\.js?$/,
    //             use: 'js-loader',
    //             exclude: /node_modules/
    //         }
    //     ]
    // },
    resolve: {
        extensions: [".ts", ".js"]
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "heywhale.format.js"
    }
};