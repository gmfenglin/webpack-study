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
```
cnpm install webpack webpack-cli html-webpack-plugin webpack-dev-server webpack-merge --save-dev

```
- package.json 中 scripts设置脚本
```
"start":"webpack-dev-server --config ./config/webpack.config.dev.js",
"build":"webpack --config ./config/webpack.config.prod.js"
```