const webpack = require('webpack');
const path = require('path');
const libraryName = 'redcube';

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, `/src/${libraryName}.ts`),
    output: {
        filename: `${libraryName}.js`,
        path: path.join(__dirname, '/dist'),
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    node: {
        fs: 'empty'
    },
    devServer: {
        publicPath: '/dist/'
    },
    devtool: "source-map",
    resolve: {extensions: ['.ts', '.js']},
    module: {
        rules: [ 
            { 
                test: /\.ts$/, 
                use: "awesome-typescript-loader?configFileName=tsconfig.client.json"
            },
            {
                test: /\.(glsl|vert|frag)$/,
                use: 'raw-loader'
            }, 
            {
                test: /\.(jpeg|jpg|png|gif)$/,
                use: 'url-loader'
            } 
        ]
    }
};
