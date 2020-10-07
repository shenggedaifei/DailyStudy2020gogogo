whenReady(function () { //文档准备就绪时运行这个函数
    var lists = document.getElementsByTagName("ul");
    var regexp = /\bdnd\b/;
    for (let i = 0; i < lists.length; i++) {
        if (regexp.test(lists[i].className)) dnd(lists[i]);
    }
    //为列表元素添加拖放事件处理程序
    function dnd(list) {
        var original_class = list.className; //保存原始css类
        var entered = 0;
        /**
         * 
         * @param 当拖动对象首次进入列表时调用这个处理程序
         * 他会检查拖放对象包含的数据格式它是否能处理
         * 如果能，返回false来表示有兴趣放置
         * 这种情况，高亮拖放目标，让用户知道该兴趣 
         */
        list.ondragenter = function (e) {
            var e = e || window.event;
            var from = e.relatedTarget;
            /**
             * dragenter和dragleave事件冒泡
             */
            entered++;
            if ((from && !ischild(from, list)) || entered == 1) {
                //所有的DnD信息都在dataTransfer对象上
                var dt = e.dataTransfer;
                //dt.types对象列出可用的拖放数据的类型或格式
                var types = dt.types;
                /**
                 * 如果没有任何类型的数据或可用数据是纯文本格式，
                 * 那么高亮显示列表让用户知道正在监听拖放，
                 * 同时返回false让浏览器知晓
                 */
                if (!types || (types.contains && types.contains("text/plain")) || (types.indexOf && types.indexOf("text/plain") !== -1)) {
                    list.className = original_class + "droppable";
                    return false;
                }
                //如果无法识别数据类型，就不拖放
                return;
            }
            //如果不是第一次进入，继续保持兴趣
            return false;
        };

        /**
         * 鼠标悬停在列表上时，调用该处理程序
         * 必须定义这个处理程序并返回false,否则这个拖放操作将取消
         */
        list.ondragover = function (e) {
            return false;
        };

        /**
         * 当拖放对象移出列表或从子元素中移出时，调用该元素
         * 取消高亮显示
         */
        list.ondragleave = function (e) {
            var e = e || window.event;
            var to = e.relatedTarget;
            console.log(e.relatedTarget);
            //如果要到列表以外的元素或打破离开和进入次数的平衡，那么取消高亮
            entered--;
            if ((to && !ischild(to, list)) || entered <= 0) {
                list.className = original_class;
                entered = 0;
            }
            return false;
        };
        /**
         * 当实际放置时，会调用该函数。
         * 会接受放下的文本并将其放到一个新的<li>元素中
         */
        list.ondrop = function (e) {
            var e = e || window.event;
            /**
             * 获取放置的纯文本数据
             * Text是”text/plain“的昵称
             * IE不支持”text/plain“，所以使用”Text“
             */
            var dt = e.dataTransfer;
            var text = dt.getData("Text") //获取放置的纯文本数据

            //如果得到一些文本，把它放入列表尾部的新项中
            if (text) {
                var item = document.createElement("li");
                item.draggable = true;
                item.appendChild(document.createTextNode(text)); //添加文本
                list.appendChild(item); //把它添加到列表中

                //恢复列表的原始样式且重置进入次数
                list.className = original_class;
                entered = 0;
                return false;
            }
        };

        //使原始所有列表项都可拖动
        var items = list.getElementsByTagName("li");
        for (var i = 0; i < items.length; i++)
            items[i].draggable = true;

        /**
         * 为拖动列表项注册事件处理程序
         * 注意这里把处理程序放在列表上，让事件从列表项向上冒泡
         */
        list.ondragstart = function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            //如果不是从<li>向上冒泡，那么忽略
            if (target.tagName !== "LI") return false;
            var dt = e.dataTransfer;
            //设置拖动的数据和数据类型
            dt.setData("Text", target.innerText || target.textContent);
            //设置允许复制和移动这些数据
            dt.effectAllowed = "copyMove";
        };

        //当成功的放置后，将调用这个处理程序
        list.ondragend = function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            /**
             * 如果拖放操作是move，那么要删除列表项
             */
            if (e.dataTransfer.dropEffect === "move")
                target.parentNode.removeChild(target);
        };
        /**
         * 这是在ondragenter和ondragleave使用的工具函数
         * 如果a是b的子元素，则返回true
         */
        function ischild(a, b) {
            for (; a; a = a.parentNode)
                if (a === b) return true;
            return false;
        }
    }
})