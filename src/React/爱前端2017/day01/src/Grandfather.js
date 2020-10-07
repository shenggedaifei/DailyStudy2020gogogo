import React from 'react';
import Father from './Father'
class Grandfather extends React.Component{
    constructor(){
        super();
        this.state={
            a:100
        }
    }
    render(){
        return (
            <div>
                <p>爷爷组件</p>
                <br/>
                <Father></Father>
            </div>
        )
    }
}
export default Grandfather;