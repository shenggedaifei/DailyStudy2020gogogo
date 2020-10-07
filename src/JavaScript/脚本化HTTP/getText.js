/**
 * readystate(属性、是一个整数)改变后--->触发readystatechange事件<---监听---事件处理函数--->onreadystatechange属性（设置为该属性的值）
 */

//模拟监听readystatechange事件。
function getText(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader("Content-Type");
      if (type.match(/^text/)) callback(request.responseText);
    }
  };
  request.send(null);
}

/**
 * 同步响应
 */
function getTextSync(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  if (request.status !== 200) throw new Error(request.statusText);

  var type = request.getResponseHeader("Content-Type");
  if (!type.match(/^text/))
    throw new Error("Excepted textual response; got: " + type);
  return request.responseText;
}
