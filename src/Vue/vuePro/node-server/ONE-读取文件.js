//浏览器中的JS没有文件操作能力。
//Node中的JS具有文件操作能力

//fs是file-system的简写；
//在Node中操作文件，就必须引入fs核心模块，这个模块提供了很多文件操作的API

//1.使用require方法加载fs核心模块
var fs = require('fs')

//2.读取文件
fs.readFile('./test.txt', function(err, data){
    console.log(data.toString())
    console.log(err)
})