var fs = require("fs");
//异步
fs.readFile("file.txt", function (err, data) {
  if (err) {
    return console.log("读取文件出错了！");
  }
  console.log("异步读取： " + data.toString());
});
