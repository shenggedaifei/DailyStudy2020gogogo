import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Website from './props/Website'
import App2 from './App2'
import Appp from './prop-types/App';
import PreventDefaultApp from './preventdefault/PreventDefaultApp';
import ToggleApp from './toggle/ToggleApp'
import LoginControl from './logincontrol/LoginControl'
ReactDOM.render(
    <div>
        <App></App>
        <hr />
        <Website></Website>
        <App2></App2>
        <Appp title="验证属性值类型"/>
        <PreventDefaultApp></PreventDefaultApp>
        <ToggleApp></ToggleApp>
        <LoginControl />
    </div>,
    document.getElementById('root')
)