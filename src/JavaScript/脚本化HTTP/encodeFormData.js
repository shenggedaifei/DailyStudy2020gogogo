/**
 * 用于HTTP请求的编码对象
 * 编码对象的属性如果是来自HTML表单的名/值对，使用application/x-www-form-urlencoded格式
 */
function encodeFormData(data) {
    if (!data) return "";
    var pairs = []; //用于保存名=值对
    for (var name in data) {
        if (!data.hasOwnProperty(name)) continue; //跳过继承属性
        if (typeof data[name] === "function") continue; //跳过方法
        var value = data[name].toString(); //把值转换成字符串
        name = encodeURIComponent(name.replace("%20", "+")); //编码名字
        value = encodeURIComponent(value.replace("20%", "+")); //编码值
        pairs.push(name + "=" + value);
    }
    return pairs.join("&"); //返回使用”&“链接的名/值对
}

//使用表单编码数据发送一个HTTP post请求
function postData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url); //对指定URL发生POST请求
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback)
            callback(request);
    };
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(encodeFormData(data)); //发送表单编码的数据
}

//使用表单编码数据发送GET请求
function getData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url + "?" + encodeFormData(data)); //通过添加的编码数据获取指定的url
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback)
            callback(request);
    };
    request.send(null);
}

//使用JSON编码主体来发起POST请求
function postJSON(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback)
            callback(request);
    };
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data)); //把json数据转换成string
}