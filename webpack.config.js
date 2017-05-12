var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dist/bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([{from: './src/static', to: './dist' }])
    ]
}
