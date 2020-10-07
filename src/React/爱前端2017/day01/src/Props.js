import React from 'react';
import {PropTypes} from 'prop-types';
class Props extends React.Component{
    constructor(props){
        super()
        this.state={
            c:props.c
        }
    };
    render(){
        return (
            <div>
                <hr/>
                <div>{this.props.a}</div>
                <div>{this.props.b}</div>
                <div>{this.props.c}</div>
                <p>{this.state.c}</p>
                <div>
                <input type="button" value="c+1" onClick={()=>{this.setState({c:this.state.c+1});}}/>
                </div>
            </div>
        )
    }
}
//定义组件需要传入的参数
//类名.propTypes   key就是父组件传回来的props属性，value就是对它的限制
Props.propTypes = {
    a : PropTypes.string.isRequired, //a属性是一个字符串，必填
    b : PropTypes.number,   //b属性是一个数值
    c : PropTypes.number.isRequired
}
export default Props;