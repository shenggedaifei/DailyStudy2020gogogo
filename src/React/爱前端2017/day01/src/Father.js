import React from 'react';
import Sun from './Sun';
class Father extends React.Component{
    constructor(){

    }
    render(){
        return (
            <div>
                <p>爸爸组件</p>
                <br/>
                <Sun></Sun>
            </div>
        )
    }
}
export default Father;