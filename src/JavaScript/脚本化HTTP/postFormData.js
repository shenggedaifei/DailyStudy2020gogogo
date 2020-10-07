/**
 * 使用post方法发送multipart/form-data请求主体
 */
function postFormData(url, data, callback) {
    if (typeof FormData === "undefined")
        throw new Error("FormData is not implemented");
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback)
            callback(request);
    };
    var formdata = new FormData();
    for (var name in data) {
        if (!data.hasOwnProperty(name)) continue; //跳过继承的属性
        var value = data[name];
        if (typeof value === "function") continue; //跳过方法
        formdata.append(name, value); //作为一部分添加名/值对
    }
    //在multipart/form-data请求主体中发送名/值对
    //每对都是请求的一个部分，
    //当传入FormData对象时，send()会自动设置Content-Type头
    request.send(formdata);
}