import React, { Component } from 'react'
import Name from './Name'
import Site from './Site'
export default class Website extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '菜鸟教程',
            site: 'https://www.runoob.com'
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name}></Name>
                <Site site={this.state.site}></Site>
            </div>
        )
    }
}
