const path = require('path');

module.exports = {
    mode: "production", // "production" | "development" | "none"
    mode: "production", // enable many optimizations for production builds
    mode: "development", // enabled useful tools for development
    mode: "none", // no defaults
    // Chosen mode tells webpack to use its built-in optimizations accordingly.

    entry: "./app/main.js", // string | object | array  // 这里应用程序开始执行
    // webpack 开始打包

    output: {
        // webpack 如何输出结果的相关选项

        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）

        filename: "all.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

        publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面

        library: "MyLibrary", // string,
        // 导出库(exported library)的名称

        libraryTarget: "umd", // 通用模块定义    // 导出库(exported library)的类型

        /* 高级输出配置（点击显示） */
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    watch:true
}