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
    ]
}