import React, { Component } from 'react'

export default class Site extends Component {
    render() {
        return (
            <div>
                <p>{this.props.site}</p>
            </div>
        )
    }
}
