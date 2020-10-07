//1. 加载http模块
var http = require('http');

//2.使用http.createServer()方法创建一个web服务器
//返回一个Server实例
var server = http.createServer();

//3.
server.on('request',function(){
    console.log('收到客户端的请求了...')
});

//4. 绑定端口号，启动服务器
server.listen(3000, function(){
    console.log('server running at 3000 port')
});