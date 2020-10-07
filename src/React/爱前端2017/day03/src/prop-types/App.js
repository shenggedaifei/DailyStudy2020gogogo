import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
    static propTypes = {//这个也是封装好的属性，不能改变
        title: PropTypes.string.isRequired
    }
    render(){
        return(
            <div>
                {this.props.title}
            </div>
        )
    }
}
export default App;