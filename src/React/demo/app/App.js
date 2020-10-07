import React from "react";

class App extends React.Component{
    render(){//渲染
        return (
            <h1>我是React，很高兴遇见你！</h1>
        )
    }
}

export default App;
//这就是一个组件
//1.首字母必须大写
//2.必须继承React.component类

//注意：1.return只能是一个元素。
//2.标签必须封闭
//3.class只能写成className。
//4.HTMl注释不能用，只能用js注释