import React from 'react';
import "./style.css";
import Img from './logo192.png';
class App2 extends React.Component{
    render(){
        return (
            <div>
                <p style={{color:"red", fontSize:30}}>jsx语法注意</p>
                <p className="box">jsx语法注意</p>
                <img src={Img} alt="" srcSet=""/>
                <br/>
                <label htmlFor="username">
                    用户名：<input type="text" name="" id="username"/>
                    密码：<input type="text" name="" id="password"/>
                </label>
            </div>
        )
    }
}
//双花括号理解。外层花括号表示在jsx中写js代码。里层花括号，写样式代码。
export default App2;