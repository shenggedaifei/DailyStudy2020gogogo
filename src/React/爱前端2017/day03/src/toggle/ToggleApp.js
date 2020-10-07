import React, { Component } from 'react'

export default class ToggleApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn:true
        }
        this.handleClick = this.handleClick.bind(this);
        //谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
    }
    // 当使用 ES6 class 语法来定义一个组件的时候，事件处理器会成为类的一个方法
    handleClick(){
        this.setState(prevState =>({
            isToggleOn:!prevState.isToggleOn
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isToggleOn?"ON":"OFF"}</button>
            </div>
        )
    }
}
