const path=require("path");
const ROOT_PATH=path.resolve(__dirname,"../");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const HappyPack=require("happypack");

const CleanWebpackPlugin=require("clean-webpack-plugin");
const CopyWebpackPlugin=require("copy-webpack-plugin");
module.exports={
    entry:{
        index:path.resolve(ROOT_PATH,"src/index.js")
    },
    output:{
        filename:'[name]_[hash:8].js',
        path:path.resolve(ROOT_PATH,"dist")
    },
    plugins:[
        new CleanWebpackPlugin(['dist'],{
            root:ROOT_PATH
            // ,exclude:['_dll_react.js','manifest.json']
        }),
		new CopyWebpackPlugin([
            {from:path.resolve(ROOT_PATH,"src/public/static"),to:"./"}
        ]),
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
            filename:"index.html",
           inject:true,
            hash: true, //是否添加hash值
            minify: { //压缩HTML文件
                removeComments: true,//移除HTML中的注释
                collapseWhitespace: true ,//删除空白符与换行符
                removeAttributeQuotes:true
            },
            chunks:['index']
        }),
        new webpack.BannerPlugin('by feng lin')
        // ,new webpack.IgnorePlugin() // 忽略编译
        // ,new webpack.DllReferencePlugin({manifest:path.resolve(ROOT_PATH,"dist","manifest.json")}) // dll 动态连接库
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
                use:[{
                        loader:"url-loader",
                        options:{
                            limit:200*1024,
                            outputPath:"/img/"
                        }
                    },
                    'image-webpack-loader'//图片压缩工具
                ]
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
                    {loader:"css-loader"},
					{loader:"postcss-loader"},
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