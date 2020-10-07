/**
 * 使用script元素发送JSONP请求
 */
function getJSONP(url, callback) {
    var cbnum = "cb" + getJSONP.counter++; //每次自增计数器
    var cbname = "getJSONP." + cbnum; //作为JSONP函数的属性

    //将回调函数名称以表单编码的形式添加到URL的查询部分中
    if (url.indexOf("?") === -1) //URL没有查询部分
        url += "?jsonp=" + cbname; //作为查询部分添加参数
    else
        url += "&jsonp=" + cbname; //作为新的参数添加它
    //创建script元素用于发送请求
    var script = document.createElement("script");

    //定义将被脚本执行的回调函数
    getJSONP[cbnum] = function (response) {
        try {
            callback(response); //处理响应数据
        } finally {
            delete getJSONP[cbnum]; //删除该函数
            script.parentNode.removeChild(script); //移除script元素
        }
    };
    script.src = url; //设置脚本的URL
    document.body.appendChild(script); //把它添加到文档中
}

getJSONP.counter = 0; //用于创建唯一回调函数名称的计数器