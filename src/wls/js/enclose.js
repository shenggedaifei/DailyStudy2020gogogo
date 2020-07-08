/**
 * 
 * @param {*} content 
 * @param {*} framewidth 
 * @param {*} frameheight 
 * @param {指定相对窗体的初始偏移量} contentX 
 * @param {指定相对窗体的初始偏移量} contentY 
 */
function Enclose(content, framewidth, frameheight, contentX, contentY) {
    frameheight = Math.max(frameheight, 50);
    framewidth = Math.max(framewidth, 50);
    contentX = Math.min(contentX, 0) || 0;
    contentY = Math.min(contentY, 0) || 0;

    //创建frame元素，且设置CSS类名和样式
    var frame = document.createElement("div");
    frame.className = "enclosure"; //这样我们能在样式表中定义样式
    frame.style.width = framewidth + "px"; //设置frame尺寸
    frame.style.height = frameheight + "px";
    frame.style.overflow = "hidden"; //没有滚动条，不能溢出
    frame.style.boxSizing = "border-box"; //border-box简化了调整frame大小的计算
    frame.style.webkitBoxSizing = "border-box";
    frame.style.MozBoxSizing = "border-box";
    //把frame放入文档，并把内容移入frame中。
    content.parentNode.insertBefore(frame, content);
    frame.appendChild(content);

    //确定元素相对于frame的位置
    content.style.position = "relative";
    content.style.left = contentX + "px";
    content.style.top = contentY + "px";

    //浏览器处理
    var isMacWebkit = (navigator.userAgent.indexOf("Macintosh") !== -1 && navigator.userAgent.indexOf("Webkit") !== -1);
    var isFirefox = (navigator.userAgent.indexOf("Gecko") !== -1);

    //注册mousewheel事件处理程序
    frame.onwheel = WheelHandler; //未来浏览器；
    frame.onmousewheel = WheelHandler; //大多数当前浏览器
    if (isFirefox) {
        frame.addEventListener("DOMMouseScroll", WheelHandler, false);
    }
    /**
     * 
     * @param 查找wheel事件对象、mousewheel事件对象（2D、1D）
     * 和Firefox的DOMMouseScroll事件对象的属性，从事件对象中提取旋转量
     * 绽放delta以便一次鼠标滚轮”单击” 
     */
    function WheelHandler(e) {
        var e = e || window.event; //标准或IE事件对象
        var deltaX = e.deltaX * -30 || e.wheelDeltaX / 4 || 0;
        var deltaY = e.deltaY * -30 || e.wheelDeltaY / 4 || (e.wheelDeltaY === undefined && e.wheelDelta / 4) || e.detail * -10 || 0;
        if (isMacWebkit) {
            deltaX /= 30;
            deltaY /= 30;
        }
        if (isFirefox && e.type !== "DOMmouseScroll") {
            frame.removeEventListener("DOMMouseScroll", WheelHandler, false)
        }
        var contentbox = content.getBoundingClientRect();
        var contentwidth = contentbox.right - contentbox.left;
        var contentheight = contentbox.bottom - contentbox.top;

        if (e.altKey) { //如果按下ALT键，就可以调整frame大小
            if (deltaX) {
                framewidth -= deltaX; //新宽度，但不能比内容大
                framewidth = Math.min(framewidth, contentwidth);
                framewidth = Math.max(framewidth, 50);
                frame.style.width = framewidth + "px";
            }
            if (deltaY) {
                frameheight -= deltaY; //新宽度，但不能比内容大
                frameheight = Math.min(frameheight, contentheight);
                frameheight = Math.max(frameheight - deltaY, 50);
                frame.style.height = frameheight + "px";
            }

        } else { //灭有按下ALT辅助键，就可以平移frame中的内容
            if (deltaX) {
                //不能再滚动了
                var minoffset = Math.min(framewidth - contentwidth, 0);
                //把deltaX添加到contentX中，但不能小于minoffset
                contentX = Math.max(contentX + deltaX, minoffset);
                contentX = Math.min(contentX, 0);
                content.style.left = contentX + "px";
            }
            if (deltaY) {
                //不能再滚动了
                var minoffset = Math.min(frameheight - contentheight, 0);
                //把deltaX添加到contentX中，但不能小于minoffset
                contentY = Math.max(contentY + deltaY, minoffset);
                contentY = Math.min(contentY, 0);
                content.style.top = contentY + "px";
            }
        }

        if (e.preventDefault) {
            e.preventDefault();
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }
}