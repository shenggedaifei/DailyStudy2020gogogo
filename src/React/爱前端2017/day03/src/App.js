import React, { Component } from 'react'
import FormattedDate from './FormattedDate'
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date: new Date(),
            age: 20
        });
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <h2>现在是{this.state.date.toLocaleTimeString()}.</h2>
                <hr/>
                <FormattedDate date={this.state.date} name="张三"></FormattedDate>
                <FormattedDate date={this.state.date} name="李四" age={this.state.age}></FormattedDate>
                <FormattedDate date={this.state.date} name="王五">这是子元素</FormattedDate>
            </div>
        )
    }
}
