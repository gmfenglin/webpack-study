const path=require("path");
const ROOT_PATH=path.resolve(__dirname,"../");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:{
        index:path.resolve(ROOT_PATH,"src/index.js")
    },
    output:{
        filename:'[name]-[hash].js',
        path:path.resolve(ROOT_PATH,"dist")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(ROOT_PATH,"src/public/template/index.html"),
            filename:"index.html"
        })
    ],
    module:{
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
                        limit:200*1024
                    }
                }
            },
            {
                test:/\.js$/,
                exclude:/mode_modules/,
                include:path.resolve(ROOT_PATH,"src"),
                use:{
                        loader:"babel-loader",
                        options:{
                            presets:['@babel/preset-env'],
                            plugins:[
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                                "@babel/plugin-transform-runtime"
                            ]
                        }
                      
                    }
                  
                
            },
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"sass-loader"}
                ]
            },
            {
                test:/\.less$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    {loader:"less-loader"}
                ]
            }
        ]
    }
}