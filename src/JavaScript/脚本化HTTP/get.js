/**
 * 解析HTTP响应
 */
function get(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url); //指定待获取的URL
    request.onreadystatechange = function () { //定义事件监听器
        if (request.readyState === 4 && request.status === 200) {
            //获取响应的类型
            var type = request.getResponseHeader("Content-Type");
            if (type.indexOf("xml") !== -1 && request.responseXML)
                callback(request.responseXML); //Document对象响应
            else if (type === "application/json")
                callback(JSON.parse(request.responseText)); //JSON响应
            else
                callback(request.responseText); //字符串响应
        }
    };
    request.send(null);
}