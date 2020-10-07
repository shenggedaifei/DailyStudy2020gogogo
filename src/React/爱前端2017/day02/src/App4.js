import React, { Component } from 'react'

export default class App4 extends Component {
    constructor(props){
        super(props)
        //定义一个数组的状态数据
        this.state = {
            num : 20
        }

    }
    clickbtn(){
    //    alert("点我干啥！");
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.num}</div>
                <button onClick={this.clickbtn.bind(this)}>点击</button>
            </div>
        )
    }
}