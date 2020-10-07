import React from 'react'
import PropTypes from 'prop-types'
export default class ChildChild extends React.Component{
    constructor(props,context){
        super(props);
        console.log(context);
    }
    static contextTypes = {
        a:PropTypes.number.isRequired,
        addA:PropTypes.func
    }
    render(){
        //子组件中的context，也是一个只读属性。改变了值后，不会传给父组件。
        return (
            <div>
                <div>孙子组件{this.context.a}<input type="button" value="a++" onClick={()=>{this.context.a++;console.log(this.context.a)}}/></div>
                <input type="button" value="a++" onClick={this.context.addA}/>{console.log(this.context.a)}
                <div>{console.log(this.context.a)}</div>
            </div>
        )
    }
}