/**
 * 使用post请求上传文件。
 * 查找有data-uploadto属性的全部表单元素，
 * 注册onchange事件处理程序
 * 这样任何选择的文件都会自动通过post方法发送到指定的”uploadto“URL
 */

whenReady(function () { //文档准备就绪时运行
    var elts = document.getElementsByTagName("input"); //所有的input元素
    for (var i = 0; i < elts.length; i++) {
        var input = elts[i];
        if (input.type !== "file") continue; //跳过所有非file元素
        var url = input.getAttribute("data-uploadto"); //获取上传URL
        if (!url) continue; //跳过任何没有url的元素
        input.addEventListener("change", function () { //当用户选择文件时
            var file = this.files[0]; //假设单个文件选择
            if (!file) return; //没有文件，不做任何事
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);
            xhr.send(file);
        }, false);
    }
})