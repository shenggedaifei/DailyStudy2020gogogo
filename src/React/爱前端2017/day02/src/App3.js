import React, { Component } from 'react';

let name = '李华', age=10, list=[10,20,30];
export default class App3 extends Component{
    render(){
        return(
            <div>
                <p>姓名：{name}</p>
                <p>年龄：{age}</p>
                <p>是否成年：{age > 18 ? "是":"否"}</p>
                <ul>
                    {
                        list.map((value, index)=>{
                            return(
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}