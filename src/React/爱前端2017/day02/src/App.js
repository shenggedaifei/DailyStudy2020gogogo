//组件化开发（react项目用es6模块化规范来书写）
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
    render(){
        return (
            <div>第一个组件</div>
        )
    }
}
export default App