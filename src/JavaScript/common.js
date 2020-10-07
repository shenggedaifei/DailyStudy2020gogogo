/**
 * 获取页面滚动出去的距离
 */
function getScroll(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    return {scrollTop:scrollTop, scrollLeft: scrollLeft}
}

/**
 * 获取鼠标在页面上的位置
 */
function getPage(e){
    var e = e || window.event;
    var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
    var pageY = e.pageY || e.clientY + getScroll().scrollTop;
    return {pageX:pageX, pageY:pageY}
}

/**
 * 获取两个日期的时间差
 */
function getInterval(start, end){
    //两个日期相差的毫秒
    var interval = end - start;
    var day, hour, minute, second;
    //秒
    interval /= 1000;
    day = Math.round(interval/60/60/24);
    hour = Math.round(interval/60/60%24);
    minute = Math.round(interval/60%60);
    second = Math.round(interval%60);
    return{day:day,hour:hour,minute:minute,second:second}
}

/**
 * 处理innerText和textContent的兼容性问题
 */
function setInnerText (el, content){
    if (typeof el.innerText === "string") {
        el.innerText = content;
    } else {
        el.textContent = content;
    }
}