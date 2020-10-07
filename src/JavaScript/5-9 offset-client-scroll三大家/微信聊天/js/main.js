var img = document.getElementById('icon');
var arr = ["img/1.png", "img/2.png"];
var flag = 0;
var num = -1;
img.onclick = function(){
   // console.log(img.src);
   if (flag == 0) {
       img.src = arr[1];
       flag = 1;
   } else {
       img.src = arr[0];
       flag = 0;
   }
}
var btn = document.getElementById("btn");
btn.onclick = function(){
    //判断内容是否为空
    var text = document.getElementById("text").value;
    if (text === "") {
        alert("聊天内容为空...");
    } else {
        var content = document.getElementsByTagName("ul")[0];
        content.innerHTML += "<li><img src='"+arr[flag]+"'><span>"+text+"</span></li>"
    }
    //判断当前聊天用户
    var imgs = content.getElementsByTagName("img");
    var span = content.getElementsByTagName("span");
    num++;
    if (flag == 0) {
        imgs[num].className = "imgleft";
        span[num].className = "spanleft";
    } else {
        imgs[num].className = "imgright";
        span[num].className = "spanright";
    }
    console.log(text);
    document.getElementById("text").value = "";
} 