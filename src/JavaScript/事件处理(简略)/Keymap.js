/**
 *  键盘快捷键事件。绑定键盘事件和处理程序事件
 */
//构造函数
function Keymap(bindings) {
    this.map = {}; //定义按键标识符->处理程序的映射
    if (bindings) { //复制初始绑定
        for (name in bindings)
            this.bind(name, bindings[name]);
    }
}

//绑定指定的按键标识符和指定的处理程序
Keymap.prototype.bind = function (key, func) {
    this.map[Keymap.normalize(key)] = func;
};
Keymap.prototype.unbind = function (key) {
    delete this.map[Keymap.normalize(key)];
};

//在指定HTML元素上配置Keymap
Keymap.prototype.install = function (element) {
    //这是事件处理程序函数
    var keymap = this;

    function handler(event) {
        return Keymap.dispatch(event, element);
    }
    if (element.addEventListener) {
        element.addEventListener("keydown", handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("onkeydown", handler);
    }
};

//基于Keymap绑定分派按钮事件
Keymap.prototype.dispatch = function (event, element) {
    //开始没有辅助键和键名
    var modifiers = "";
    var keyname = null;
    //按照标准小写字母顺序构建辅助键字符串
    if (event.altKey) modifiers += "alt_";
    if (event.ctrlKey) modifiers += "ctrl_";
    if (event.metaKey) modifiers += "meta_";
    if (event.shiftKey) modifiers += "shift_";

    //如果实现3级DOM规范的key属性，获取keyname很容易
    if (event.key) keyname = event.key;
    //在Safari和chrome上用keyIdentifier获取功能键键名
    else if (event.keyIdentifier && event.keyIdentifier.substring(0, 2) !== "U+")
        keyname = event.keyIdentifier;
    //否则，使用keyCode属性和后面编码到键名的映射
    else keyname = Keymap.keyCodeToKeyName[event.keyCode];
    //如果不能找出键名，返回并忽略这个事件
    if (!keyname) return;
    //标准的按键id是辅助键加上小写的键名
    var keyid = modifiers + keyname.toLowerCase();
    //现在查看按键标识符是否绑定任何东西
    var handler = this.map[keyid];

    if (handler) { //如果有这个键有处理程序，调用它
        //调用处理程序函数
        var retval = handler.call(element, event, keyid);
        //如果处理程序返回false，取消默认操作并阻止冒泡
        if (retval === false) {
            if (event.stopPropagation) event.stopPropagation(); //DOM模型
            else event.cancelBubble == true; //IE模型
            if (event.preventDefault) event.preventDefault(); //DOM
            else event.returnValue = false; //IE 
        }
        return retval;
    }
};

//把按键标识符转换成标准形式的工具函数
Keymap.normalize = function (keyid) {
    keyid = keyid.toLowerCase();
    var words = keyid.split(/\s+|[\-+_]/); //分割辅助键和键名
    var keyname = words.pop(); //键名是最后一个
    keyname = Keymap.aliases[keyname] || keyname; //它是别名吗？
    words.sort(); //排序剩下的辅助键
    words.push(keyname); //添加到序列化名字后面
    return words.join("_"); //把它们拼接起来
};

Keymap.aliases = { //把按键的常见别名映射到它们的“正式名”
    "escape": "esc",
    "delete": "del",
    "return": "enter",
    "ctrl": "control",
    "space": "spacebar",
    "ins": "insert"
};

//传统的keydown事件对象的keyCode属性是不标准的
//但下面的值似乎可以在大多数浏览器和OS中可行
Keymap.keyCodeToKeyName = {
    //使用词或方向键的按键
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Esc",
    32: "Spacebar",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Del",
    //主键盘上的数字键
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9"
    //还有更多，没写完...
}