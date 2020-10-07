import React, { Component } from 'react'

export default class FormattedDate extends Component {
    //设置props默认值
    static defaultProps = {
        age: 18
    };s
    render() {
        return (
            <div>
                <h2>现在是：{this.props.date.toLocaleTimeString()}, 我的名字叫:{this.props.name}, 今年{this.props.age}岁了+{this.props.children}</h2>
            </div>
            //子组件通过this.props.属性，来获取父组件传过来的值
            //在子元素内部，通过this.props.children来获取父元素中引用双标签内的内容     
            //<FormattedDate date={this.state.date} name="王五">这是子元素</FormattedDate>
        )
    }
}
