import React from 'react';
import MyProps from './Props';

class App2 extends React.Component{
    constructor(){
        super()
        this.state={
            d:6
        }
    }
    setD(number){
        this.setState({
            "d":number
        })
    }
    render(){
        return(
            <div>
                <p>我是APP2组件，我有一个d状态：{this.state.d}</p>
                <MyProps a="10" b={20} c={30} d={this.setD}></MyProps>
            </div>
        )
    }
}
export default App2;