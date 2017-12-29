const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        "./src/index.tsx",
        "./src/styles.less"
    ],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // Extract '.less' style files into a single CSS file. Use style-loader in development.
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!postcss-loader!less-loader',
                    fallback: 'style-loader',
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: process.env.NODE_ENV === "development"
        }),
    ],
};
