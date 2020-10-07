//index.js就是项目的入口文件
import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./App4";

//ReactDOM.render(参数1，参数2)
//参数1作为root内部内容，参数2渲染到/public/index.html中的那个标签
ReactDOM.render(
    //<div>hello React</div>,
    <AppComponent></AppComponent>,//也可以写成单标签。
    document.getElementById("root")
)