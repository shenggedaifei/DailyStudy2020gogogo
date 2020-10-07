function Hello() {
  var name;
  this.setName = function (argName) {
    name = argName;
  };
  this.sayHello = function () {
    console.log("hello" + name);
  };
}

//导出模块
module.exports = Hello;
