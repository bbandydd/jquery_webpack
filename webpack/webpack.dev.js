const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { jsRules, cssRules, scssRules, imageRules, svgIconRules } = require('./commonModuleRules');

class WebpackDevConfig {
    constructor() {
        this.config = {
            devtool: 'cheap-module-eval-source-map',
            entry: {
                bundle: ['./src/js/index.js']
            },
            output: {
                path: path.resolve(__dirname, '../dist'),
            },
            module: {
                rules: [
                    jsRules(false),
                    cssRules,
                    scssRules,
                    imageRules,
                    svgIconRules
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'src/index.html'
                })
            ],
            devServer: {
                hot: true,
                inline: true
            }
        }
    }
}

module.exports = WebpackDevConfig;