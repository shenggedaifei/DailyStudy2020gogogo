import React, { Component } from 'react'

export default class LogoutButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>退出</button>
            </div>
        )
    }
}
