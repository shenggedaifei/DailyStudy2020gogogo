
    /*
        1.动态生成序号
        2.点击序号，动画方式切换图片
        3.鼠标放在盒子上显示箭头
        4.实现上一张下一张切换
        5.自动播放图片
    */
    //获取元素
    var box = my$('box');
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var arr = my$('arr');
    var arrLeft = my$('left');
    var arrRight = my$('right');
    var imgWidth = screen.offsetWidth;
    //1.动态生成序号
    var count = ul.children.length;
    for (var i = 0; i < count; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        //调用common中的方法，处理兼容性
        setInnerText(li, i+1); 
        //2.点击序号，动画方式切换图片
        li.onclick = liClick;
        if(i===0){//序号1，标黄
            li.className = 'current'; 
        }
        li.setAttribute('index', i);//设置自定义属性       
    }
    
    function liClick(){
        //2.1 取消其他li高亮显示，让当前li高亮显示
        for (let i = 0; i < ol.children.length; i++) {
            var li = ol.children[i];
            li.className = '';            
        }
        this.className = 'current';
        //2.2 点击序号，图片切换
        //var imgWidth = screen.offsetWidth;
        //获取自定义属性
        var liIndex = parseInt(this.getAttribute('index'));
        animate(ul, -liIndex * imgWidth);
        index = liIndex;
    }
    //3. 鼠标放在盒子上显示箭头
    box.onmouseenter = function(){
        arr.style.display = 'block';
        clearInterval(timerID);
    }
    box.onmouseleave = function(){   
        arr.style.display = 'none';
        timerID = setInterval(function(){
            arrRight.click();
        }, 2000);
    }
    //4.实现上一张 下一张
    var index = 0;//第一张图片的索引
    arrRight.onclick = function(){
        //判断是否是克隆的第一张图片，如果是，就需要修改ul坐标，显示真正的第一张图片
        if (index === count) {
            ul.style.left = '0px';
            index = 0;
        }
        index++;
        if (index < count) {
            //index++;
            //animate(ul, -index * imgWidth);
            ol.children[index].click();
        }else{
            //如果是最后一张图片，以动画方式移动到克隆的第一张图片
            animate(ul, -index * imgWidth);
            //取消所有序号高亮，让第一张高亮
            for (var i = 0; i < ol.children.length; i++) {
                var li = ol.children[i];
                li.className = '';                
            }
            ol.children[0].className = 'current';
        }        
    }
    arrLeft.onclick = function(){
        /*if (index > 0) {
            index--;
            //animate(ul, -index * imgWidth);
            ol.children[index].click();
        } 
        */
       if (index == 0) {
           index = count;
           ul.style.left = - index * imgWidth + 'px';
       } 
       index--;
       ol.children[index].click();
    }
    //无缝滚动
    //克隆第一个li  cloneNode()
    var firstLi = ul.children[0];
    var cloneLi = firstLi.cloneNode(true);//参数true  -- 复制节点包括里面的内容；fase --只复制节点不复制内容
    ul.appendChild(cloneLi);

    //5. 自动切换
    var timerID = setInterval(function(){
        arrRight.click();
    }, 2000);
