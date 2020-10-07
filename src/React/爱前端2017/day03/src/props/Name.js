import React, { Component } from 'react'

export default class Name extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
