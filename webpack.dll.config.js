var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        angular: [path.join(__dirname, 'docs/angular.ts')]
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name].dll.js',
        /**
         * output.libraryss
         * 将会定义为 window.${output.library}
         */
        library: '[name]_library'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: [{
                    loader: 'awesome-typescript-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.DllPlugin({
            /**
             * path
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。 
             */
            name: '[name]_library'
        })
    ],
    devtool: 'source-map' //'cheap-module-source-map' | 'source-map'
};
