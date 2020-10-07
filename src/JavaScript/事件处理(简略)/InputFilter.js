whenReady(function () { //当文档加载完成时，运行这个函数
    //查找所有<input>元素
    var inputelts = document.getElementsByTagName("input");
    //遍历
    for (let i = 0; i < inputelts.length; i++) {
        var elt = inputelts[i];
        //跳过不是文本域或没有data-allowed-chars属性的元素
        if (elt.type != "text" || !elt.getAttribute("data-allowed-chars"))
            continue;
        /**
         * 在input元素上注册事件处理程序函数
         */
        if (elt.addEventListener) {
            elt.addEventListener("keypress", filter, false);
            elt.addEventListener("textInput", filter, false);
            elt.addEventListener("textinput", filter, false);
        } else { //不支持addEventListener()的IE也不会支持textinput
            elt.attachEvent("onkeypress", filter);
        }
    }

    //用于过滤用户输入的keypress、textInput和textinput事件处理程序
    function filter(e) {
        //获取事件对象和目标元素对象
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var text = null; //输入的文本
        //获取输入的字符或文本
        console.log(e.type);
        if (e.type === "textinput" || e.type === "textInput")
            text = e.data;
        else { //这是传统的keypress事件
            //对于可打印键的keypress事件，Firfox使用charCode
            var code = e.charCode || e.keyCode;
            /**
             * 如果按下的是任何形式的功能键，不要过滤
             * code < 32：ASCII控制字符
             * e.charCode == 0：功能键（仅指Firefox）
             * e.ctrlKey、e.altKey：辅助键
             */
            if (code < 32 || e.charCode == 0 || e.ctrlKey || e.altKey)
                var text = String.fromCharCode(code);
        }

        //从input元素中寻找所需信息
        var allowed = target.getAttribute("data-allowed-chars"); //合法字符
        var messageid = target.getAttribute("data-messageid"); //信息元素id
        if (messageid) //如果存在消息元素id，那么获取这个元素
            var messageElement = document.getElementById(messageid);

        //遍历输入文本中的字符
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            if (allowed.indexOf(c) == -1) {
                if (messageElement)
                    messageElement.style.visibility = "visible";
                //取消默认行为，所有不会插入文本
                if (e.preventDefault)
                    e.preventDefault();
                if (e.returnValue)
                    e.returnValue = false;
            }
        }
        //如果所有的字符都合法，影藏存在的消息元素
        if (messageElement)
            messageElement.style.visibility = "hidden";
    }
});