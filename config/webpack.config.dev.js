const webpackMerge=require("webpack-merge");
const baseConfig=require("./webpack.config.base.js");
const path=require("path");
const ROOT_PATH=path.resolve(__dirname,"../");
module.exports=webpackMerge(baseConfig,{
    mode:"development",
    devtool:"source-map",
    devServer:{
        contentBase:path.resolve(ROOT_PATH,"dist"),
        port:8080
    }
});