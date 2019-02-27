const webpackMerge=require("webpack-merge");
const baseConfig=require("./webpack.config.base.js");
const path=require("path");
const ROOT_PATH=path.resolve(__dirname,"../");
const CleanWebpackPlugin=require("clean-webpack-plugin");
const CopyWebpackPlugin=require("copy-webpack-plugin");
module.exports=webpackMerge(baseConfig,{
    mode:"production",
    plugins:[
        new CleanWebpackPlugin(path.resolve(ROOT_PATH,"dist")),
        new CopyWebpackPlugin([
            {from:path.resolve(ROOT_PATH,"src/public/static"),to:"./"}
        ])
    ]
});