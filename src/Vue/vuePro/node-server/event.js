/* 文档写法
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event", function () {
  console.log("some_event occured.");
});
setTimeout(function () {
  event.emit("some_event");
}, 1000);
*/

//写法二：node事件触发机制
//1. 导入events模块
var event = require("events");
//2. 创建eventsEmitter对象
var EventEmitter = new event.EventEmitter();
//3. 绑定事件
EventEmitter.on("connection", function () {
  console.log("绑定connection事件完成。");
});
//4. 触发事件
EventEmitter.emit("connection");
console.log("程序执行完毕/...");
