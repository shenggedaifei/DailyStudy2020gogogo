/**
 * 查询有href属性但是没有title属性的所有超链接，并注册onmouseover事件处理程序
 * 这个事件处理程序使用XMLHttpRequest HEAD请求取得链接资源的详细信息
 * 然后把这些详细信息设置为链接的title属性，这样将会在工具提示中显示
 */
function linkdetail() {
    //是否有机会使用跨域请求
    var supportsCORs = (new XMLHttpRequest()).withCredentials !== undefined;
    //遍历文档中的所有链接
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (!link.href) continue; //跳过没有超链接的锚点
        if (link.title) continue; //跳过已经有工具提示的链接

        //如果这是一个跨域链接
        if (link.host !== location.host || link.protocol !== location.protocol) {
            link.title = "站外链接"; //假设我们不能得到任何信息
            if (!supportsCORs) continue; //没有CORS支持就退出
            //否则，我们能了解这个链接的更多信息
            //所以继续前进，注册事件处理程序，于是我们可以尝试
        }

        //注册事件处理程序，当鼠标悬停时下载链接详细信息
        if (link.addEventListener)
            link.addEventListener("mouseover", mouseoverHandler, false);
        else
            link.attachEvent("onmouseover", mouseoverHandler);
    }

    function mouseoverHandler(e) {
        var link = e.target || e.srcElement; //
        var url = link.href;
        var xhr = new XMLHttpRequest();
        xhr.open("HEAD", url); //仅仅询问头信息
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                var type = xhr.getResponseHeader("Content-Type"); //获取链接的详细信息
                var size = xhr.getResponseHeader("Content-Length");
                var date = xhr.getResponseHeader("Last-Modified");
                //在工具提示中显示详细信息
                link.title = "类型: " + type + "\n" + "大小: " + size + "\n" + "时间: " + date;
            } else {
                //如果请求失败，且链接没有“站外链接”的工具提示
                //那么显示这个错误
                if (!link.title)
                    link.title = "Couldn‘t fetch details:\n" + xhr.status + " " + xhr.statusText;
            }
        };
        xhr.send(null);
        //移除处理程序：仅想一次获取这些头信息
        if (link.removeEventListener)
            link.removeEventListener("mouseover", mouseoverHandler, false);
        else
            link.detachEvent("onmouseover", mouseoverHandler);
    }
}