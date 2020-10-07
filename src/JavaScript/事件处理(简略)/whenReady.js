var whenReady = (function () { //这个函数返回whenReady()函数
    var funcs = []; //当获取事件时，要运行的函数
    var ready = false; //当触发事件处理程序时，切换到true
    //当文档准备就绪时，调用
    function handler(e) {
        if (ready) return; //如果已经运行过一次，只需要返回
        //如果发生readystatechange事件，并且状态不是”complete“，那么文档尚未准备好
        if (e.type === "readystatechange" && document.readyState !== "complete") return;
        console.log(e.type);
        for (let i = 0; i < funcs.length; i++)
            funcs[i].call(document);
        //设置ready标识，并移除所有函数
        ready = true;
        funcs = null;
    }

    //为接收到的任何事件注册处理程序
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", handler, false);
        document.addEventListener("readystatechange", handler, false);
        document.addEventListener("load", handler, false);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", handler);
        window.attachEvent("onload", handler);
    }

    //返回whenReady()函数
    return function whenReady(f) {
        if (ready) f.call(document);
        else funcs.push(f);
    }
}());