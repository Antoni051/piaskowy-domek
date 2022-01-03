const webpack = require('webpack')

module.exports = {
    entry: './app.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
};

