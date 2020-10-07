import React, { Component } from 'react';
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            a:100,
            b:200,
            c:300
        }
    };
    add(){
        this.setState({
            a:this.state.a+1
        });
    }
    render(){
        return (
            <div>
                <h1>react数据传递state状态</h1>
                <p>a : {this.state.a}</p>
                <p>b : {this.state.b}</p>
                <p>c : {this.state.c}</p>
                <p>
                    <input type="button" value="a+1" onClick={(this.add).bind(this)}/>
                </p>
            </div>
        )
    }
}