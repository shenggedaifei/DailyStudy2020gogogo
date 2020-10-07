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

