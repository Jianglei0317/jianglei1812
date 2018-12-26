const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve('dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.(jp|jpe|pn)g$/,
                use:'file-loader'
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: '/node_modules/'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template:path.resolve('index.html')
        })
    ],
    mode:'development',
    resolve:{
        extensions:['.vue','.js','.jsx','.scss'],
        alias:{
            'vue':'vue/dist/vue.esm.js',
            '@':path.resolve('src')
        }
    },
    devServer:{
        contentBase:path.resolve('dist'),
        port:8081
    }
}