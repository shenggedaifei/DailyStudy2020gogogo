### 	css背景

#### 背景颜色

background-color，三种取值：十六进制、RGB、英文单词

#### 背景图

background-image，默认平铺重复显示，以覆盖整个元素实体

body{
		background-image: url(../img/image.jpg);
}

##### 平铺

background-repeat，取值：repeat-x，repeat-y，no-repeat。

##### 位置

background-position，设置图像的起始位置

##### 滚动

background-attachment，设置背景图像是否固定或者随着页面的其余部分滚动

取值：scroll 随页面滑动而滑动，默认、fixed 固定不动

### 文本

text-decoration，文本修饰。可添加/删除文本的修饰。常用于去掉超链接的下划线。

取值：overline、line-through、underline

### 字体

### 列表

list-style-type，改变列表的形状。常用值：

none   不使用项目符号

disc	实心圆

circle	空心圆

square	实心方块

decimal	阿拉伯数字

lower-alpha：小写英文字母 

upper-alpha：大写英文字母 

lower-roman：小写罗马数字 

upper-roman：大写罗马数字

注意：也可以用图片作为列表标记：list-style-image: url("")

### 盒子模型

#### border边框

##### border-style边框样式

也可以四个边分别设置，border-top-style取值：

none	无边框

dotted	点线框

dashed	虚线框

solid	实线

double	双线

groove、ridge、inset、outset	3D效果

##### border-width 边框宽度

边框宽度必须在边框样式后面，不然没有效果。也可以四个边单独设置

##### border-color 边框颜色