const webpackMerge=require("webpack-merge");
const baseConfig=require("./webpack.config.base.js");
const path=require("path");
const ROOT_PATH=path.resolve(__dirname,"../");
const webpack=require("webpack");
module.exports=webpackMerge(baseConfig,{
    mode:"development",
    devtool:"source-map",
    devServer:{
        contentBase:path.resolve(ROOT_PATH,"dist"),
        port:8080,
        before(app) {
          apiMocker(app, mocker, {
              proxy: {
                  '/api/*': 'https://localhost:3721'
              },
              changeHost: true
          });
      }
       // hot:true // 热更新
    },
    plugins:[
      //  new webpack.HotModuleReplacementPlugin(), // 热更新
      //  new webpack.NamedModulesPlugin() // 热更新
    ]
});