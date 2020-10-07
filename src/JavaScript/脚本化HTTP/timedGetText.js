/**
 * 模拟自动超时
 */
function timedGetText(url, timeout, callback) {
    var xhr = new XMLHttpRequest();
    var timer = false;
    timer = setTimeout(function () {
        timer = true;
        xhr.abort();
    }, timeout)
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return; //忽略未完成的请求
        if (timer) return; //忽略中止请求
        clearTimeout(timer);
        if (xhr.status === 200)
            callback(xhr.responseText); //把response传给回调函数
    };
    xhr.send(null);
}