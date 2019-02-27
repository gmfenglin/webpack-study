## npm install
- -g 全局安装
- -save
    - 安装模块到项目node_modules目录下。
    - 会将模块依赖写入dependencies 节点。
    - 运行 npm install 初始化项目时，会将模块下载到项目目录下。
    - 运行npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中。
- --save-dev 
    - 安装模块到项目node_modules目录下。
    - 会将模块依赖写入dependencies 节点。
    - 运行 npm install 初始化项目时，会将模块下载到项目目录下。
    - 运行npm install --production或者注明NODE_ENV变量值为production时，**不会**自动下载模块到node_modules目录中。
## webpack 基本配置
- 安装开发依赖 webpack webpack-cli html-webpack-plugin webpack-dev-server webpack-merge
    - html-webpack-plugin 插件：
        - 作用：连接js与html;
        - 去除双引号；
        - 去除换行。
```
cnpm install webpack webpack-cli html-webpack-plugin webpack-dev-server webpack-merge --save-dev

```
- package.json 中 scripts设置脚本
```
"start":"webpack-dev-server --config ./config/webpack.config.dev.js",
"build":"webpack --config ./config/webpack.config.prod.js"
```
## 样式处理
- 安装开发依赖 style-loader css-loader less-loader sass-loader node-sass less
    - style-loader loader:
        - 作用：把css 插入head;
        - 插入位置；
    - css-loader loader:
        - 作用：解析css @import 语法;
    - less-loader loader:
        - 作用：把less转换为css;
    - sass-loader loader:
        - 作用：把sass,scss 转换为css;
```
cnpm install style-loader css-loader less-loader sass-loader node-sass less --save-dev
```
- loader 配置
    - loader 执行顺序：从右到左，从下到上；
    - loader 类型：前置pre,普通，内联，后置post;
```
```
## es6 语法
- 安装开发依赖 babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime
```
cnpm install babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime --save-dev
```
- 安装依赖 @babel/runtime @babel/polyfill
```
cnpm install @babel/runtime @babel/polyfill --save
```
## 图片处理
- 安装开发依赖 file-loader url-loader html-withimg-loader
url-loader内置了file-loader
    - file-loader loader:
        - 作用：默认会生产一张图片到build目录下，返回图片路径；
    - html-withimg-loader loader:
        - 作用：检测html中引用的图片；
    - url-loader loader:
        - 作用：把指定大小的图片生成base64字符串；
        - limit
```
    cnpm install url-loader html-withimg-loader --save-dev
```