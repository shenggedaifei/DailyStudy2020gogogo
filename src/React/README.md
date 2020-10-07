react配置：
    1. 配置webpack+babel。让webpack指导babel翻译ES6语法。
        |1.1 npm init --创建package.json
        |1.2 npm install --save-dev webpack --安装webpack，设置为项目依赖
            前提是必须在全局下安装了webpack: npm install -g webpack
        |1.3 创建一个webpack.config.js 文件，这个文件是webpack工作的参考。
            配置webpack.config.js：
                |1.3.1 基本的entry、output。参考：https://www.webpackjs.com/configuration/
                |1.3.2 module：参考：https://webpack.js.org/loaders/babel-loader/#root
        |1.4 安装babel-loader  npm install --save-dev babel-loader. 
            有包依赖，需要先安装babel-core
        |1.5 安装preset  npm install --save-dev babel-preset-es2015
        |1.5 安装react npm install --save-dev react
        |1.6 安装react-dom  npm install --save-dev react-dom
        |1.7 安装babel-preset-react  npm install --save-dev babel-preset-react
            | 配置 presets: ['es2015', 'react']
        |1.8 在webpack.config.js文件中加上watch:true


不会配置，就直接使用create-react-app 快速构建 React 开发环境
$npm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start



react项目的所有node_modules文件都删了，要想执行需要先 npm install一下