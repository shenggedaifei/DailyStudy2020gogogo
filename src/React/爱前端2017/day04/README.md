1.context
    |1.1 父组件中设置getChildContext().这个方法返回一个对象，
    这个对象就是现在这个家族体系共享的上下文。
    |1.2 父组件中设置childContextTypes属性。导包prop-types
    |1.3 子组件设置contextTypes属性 ，导包prop-types

结论：
    1.当祖先元素中更改了context的数据，此时所有的子孙元素中的数据都会更改，视图也会更新。
    2.反之不成立，可以认为context的数据在子孙元素中是只读的。此时需要使用巧计，在context中共享一个
    操作祖先元素的函数，子孙元素通过context获得这个函数，从而操作祖先元素的值