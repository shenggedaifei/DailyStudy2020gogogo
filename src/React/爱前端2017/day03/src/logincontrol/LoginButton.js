import React, { Component } from 'react'

export default class LoginButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>登录</button>
            </div>
        )
    }
}
