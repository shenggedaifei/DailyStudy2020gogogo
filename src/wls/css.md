## css外观属性

### color:文本颜色

取值方式有三种：

1.英文

2.十六进制

3.RGB代码

### line-height：行间距

单位：px，em，百分比。实际工作中使用最多的是px

### text-align:水平对齐方式

相当于html中的align对齐属性。可用值：

left、right、center

### text-indent：首行缩进

一般使用em作为单位，1em就是一个字的宽度

### letter-spacing：字间距

允许使用负值，默认为normal

### word-spacing：单词间距

英文单词间距，中文字符无效；允许使用负值，默认为normal



word-spacing和letter-spacing均可对英文进行设置，不同的是letter-spacing定义的字母之间的距离，而word-spacing定义单词之间距离。

###  颜色半透明（CSS3）

color:rgba(r,g,b,a)  a的取值0~1。

h1 {

​	color:rgba(0,0,0,0.3)

}

### 文字阴影（CSS3）

text-shadow: 水平位置 垂直位置 模糊距离 阴影颜色

h1{

​	text-shadow: 3px 3px 3px rgba(0,1,1,0.3)

}

前两个参数必须写，后面两个可以省略（有默认值）

## css样式表

### 行内样式表

<div style="color: #f00">加油！坚持学习，一定能成功</div>

### 内部样式表

<style>
    div{
        color:red
    }
</style>

### 外部样式表

<head>
	<link href="" type="text/css" rel="stylesheet" />
</head>

## css复合选择器

### 交集选择器

第一个选择器是标签名选择器，第二个选择器是类选择器。不提倡用id选择器

div.class{ color： red；}

用的比较少，能认识就行。

### 并集选择器

选择器之间用逗号隔开。

p,div,.class{color: red; }

### 后代选择器

div  ul{ color: red;}。div标签里面的ul标签

### 子元素选择器

div > ul{color: red;}.

子元素选择器只会选中子元素，子元素的子元素不会被选中。后代选择器则会选中子元素的子元素。