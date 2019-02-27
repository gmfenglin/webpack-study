const webpackMerge=require("webpack-merge");
const baseConfig=require("./webpack.config.base.js");
const path=require("path");
const ROOT_PATH=path.resolve(__dirname,"../");

const CopyWebpackPlugin=require("copy-webpack-plugin");
const UglifyJsPlugin=require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin=require("optimize-css-assets-webpack-plugin");
module.exports=webpackMerge(baseConfig,{
    mode:"production",
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache:true,
                parallel:true,
                sourceMap:true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks:{
            cacheGroups:{
                common:{
                    minSize:0,
                    minChunks:2,
                    chunks:'initial'
                },
                vendor:{
                    priority:1,
                    test:/mode_modules/,
                    chunks:'initial',
                    minSize:0,
                    minChunks:2
                }
            }
        }
    },
    plugins:[
        new CopyWebpackPlugin([
            {from:path.resolve(ROOT_PATH,"src/public/static"),to:"./"}
        ])
    ]
});