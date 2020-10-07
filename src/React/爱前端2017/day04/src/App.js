import React, { Component } from 'react'
import Child from './Child'
import PropTypes from 'prop-types'
export default class App extends Component {
    constructor(){
        super();
        this.state = {
            a: 100
        }
    }
    //巧计
    addA(){
        this.setState({
            a: this.state.a + 1
        });
    }
    getChildContext(){
        return {
            a:this.state.a,
            addA:(this.addA).bind(this)
        }
    }
    static childContextTypes = {
        a:PropTypes.number.isRequired,
        addA:PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                <div>爷爷组件{this.state.a}<input type="button" value="a++" onClick={()=>{this.setState({a:this.state.a + 1})}}/></div>
                <Child />
            </div>
        )
    }
}