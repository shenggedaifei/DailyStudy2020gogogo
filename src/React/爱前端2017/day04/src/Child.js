import React from 'react'
import ChildChild from './ChildChild'

export default class Child extends React.Component{
    render(){
        return (
            <div>
                <div>爸爸组件</div>
                <ChildChild />
            </div>
        )
    }
}
