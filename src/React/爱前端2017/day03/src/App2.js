import React, { Component } from 'react'

export default class App2 extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[{id:1, name:"张三"},{id:2, name:"李四"},{id:3, name:"王五"}]
        }
    }
    handleClick(){
        this.setState({
            list:[{id:4, name:"赵六"},{id:1, name:"张三"},{id:2, name:"李四"},{id:3, name:"王五"}]
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>按钮</button>
                <ul>
                    {this.state.list.map((v, k)=>{
                        return (
                            <li key={v.id}>{v.name}</li>
                            //这个key值一般设置为数据的id值，有利于提高更新效率，减少不必要的DOM操作。
                        )
                    })}
                </ul>
            </div>
        )
    }
}
