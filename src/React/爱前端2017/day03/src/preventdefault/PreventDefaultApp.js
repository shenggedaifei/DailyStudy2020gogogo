import React, { Component } from 'react'

export default class PreventDefaultApp extends Component {
    handleClick(e){
        e.preventDefault();
        console.log("a被点击了")
    }
    render() {
        return (
            <div>
                <a href="#" onClick={this.handleClick}>超链接</a>
            </div>
        )
    }
}
