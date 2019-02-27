const path=require("path");
const ROOT_PATH=path.resolve(__dirname,"../");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const HappyPack=require("happypack");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");
module.exports={
    entry:{
        index:path.resolve(ROOT_PATH,"src/index.js")
    },
    output:{
        filename:'[name]-[hash].js',
        path:path.resolve(ROOT_PATH,"dist")
    },
    plugins:[
        new CleanWebpackPlugin(path.resolve(ROOT_PATH,"dist")),
        new MiniCssExtractPlugin({
            filename:"/css/[name]_[hash].css"
        }),
        new HappyPack({
            id:"js",
            use:[{
                loader:"babel-loader",
                options:{
                    presets:['@babel/preset-env'],
                    plugins:[
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                        "@babel/plugin-transform-runtime"
                    ]
                }
              
            }]
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(ROOT_PATH,"src/public/template/index.html"),
            filename:"index.html"
        }),
        new webpack.BannerPlugin('by feng lin')
        // ,new webpack.IgnorePlugin() // 忽略编译
        // ,new webpack.DllPlugin({manifest:path.resolve(ROOT_PATH,"dist","manifest.json")}) // dll 动态连接库
    ],
    module:{
        // noParse:/jquery/, // 不解析jquery模块的依赖关系
        rules:[
            {
                test:/\.html$/,
                use:"html-withimg-loader"
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:200*1024,
                        outputPath:"/img/"
                    }
                }
            },
            {
                test:/\.js$/,
                exclude:/mode_modules/,
                include:path.resolve(ROOT_PATH,"src"),
                use:"happypack/loader?id=js"
                  
                
            },
            {
                test:/\.css$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:"postcss-loader"},
                    {loader:"css-loader"}
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:"css-loader"},
                    {loader:"postcss-loader"},
                    {loader:"sass-loader"}
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {loader:"css-loader"},
                    {loader:"postcss-loader"},
                    {loader:"less-loader"}
                ]
            }
        ]
    }
}