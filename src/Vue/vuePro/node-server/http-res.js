//1. 加载http模块
var http = require('http');

//2.使用http.createServer()方法创建一个web服务器
//返回一个Server实例
var server = http.createServer();

//3.监听request请求事件，设置请求处理函数
//request请求对象，可以用来获取客户端的一些请求信息，例如req.url(请求路径)
//response相应对象，可以给客户端发送响应消息。例如write()方法。
//注意write()可以使用多次，但是最后一次必须使用end结束相应。
server.on('request',function(req, res){
    //console.log('收到客户端的请求了...当前请求路径是'+req.url);
    if (req.url === '/login') {
        //在服务端默认发送的数据，是utf-8编码的内容
        //但是浏览器不知道是utf-8，会根据当前操作系统的默认编码解析（中文操作系统默认就是jbk）
        res.setHeader('Content-Type', '')
        res.write('login');
        res.end();
    } else if (req.url === '/register') {
        res.write('register');
        res.end();
    } else {
        // res.write('main');
        // res.end();
        res.end('main')//简写
    }{
        
    }
    // res.write('hello');
    // res.end();
});

//4. 绑定端口号，启动服务器
server.listen(3000, function(){
    console.log('server running at 3000 port')
});