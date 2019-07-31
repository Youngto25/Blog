# 画板
描述：一个可以绘画及下载的画板。

技术栈：canvas ES6 webpack scss

## canvas基本使用

### canvas关键方法：
- getContext() 获得渲染上下文和它的绘画功能

### 绘制矩形
![canvas](https://github.com/Youngto25/blog/blob/master/docs/src/images/canvas.png)

- fillRect(x,y,width,height)  绘制一个填充的矩形
- strokeRect(x,y,width,height) 绘制一个矩形的边框
- clearRect(x,y,width,height) 清除指定矩形区域，让清除部分完全透明

x与y指定了在canvas画布上所绘制的矩形的左上角（相对于原点）的坐标。width和height设置矩形的尺寸。

### 绘制路径
图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。
1. 首先，需要创建路径初始点
2. 使用画图命令去画出路径
3. 把路径封闭
4. 通过描边或填充路径区域来渲染图形

- beginPath() 新建一条路径
- closePath() 闭合路径之后，图形绘制命令又重新指向到上下文中
- stroke() 通过线条来绘制图形轮廓
- fill() 通过填充路径的内容区域生成实心的图形
- moveTo(x,y) 将笔触移动到指定的坐标上，当canvas初始化或者beginPath()调用后，你通常会使用movTo()函数设置起点
- lineTo(x,y) 绘制一条从当前位置到指定坐标的直线

生成路径的第一步叫做beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径构成图形。而每次这个方法调用之后，列表清空重置，然后就可以重新绘制新的图形。

第二步就是调用函数指定绘制路径。

第三步，闭合路径colsePath()，不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形已经闭合，该函数什么也不做。
**注：当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用closePath()函数。但是调用stroke()时不会自动闭合。**

### 样式和颜色
**fillStyle = color** 设置图形的填充颜色

**lineWidth = value** 线条宽度

## 功能：
- 在页面上进行绘画
- 可以改变画笔宽度
- 可以改变画笔颜色
- 可以擦除
- 可以清空画板
- 可以进行保存

## 效果图
![canvas](https://github.com/Youngto25/blog/blob/master/docs/src/images/canvas.jpg)

## 实现
### 在html上设置标签canvas，并设置id="canvas"
```
<canvas id="canvas">您的浏览器暂不支持canvas</canvas>
```
canvas标签有属性width和height，若不设置，则默认widht=300px,height=150px

### 获取canvas对象，同时设置为2d.
<canvas> 元素有一个叫做 **getContext() 的方法**，这个方法是用来获得渲染上下文和它的绘画功能。
  
获取页面的宽度和高度，并设置为canvas的高度和宽度
监听页面大小的变化，一旦变化则对canvas进行响应调整
```
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var lineWidth = 5

listenWindow()
window.addEventListener('resize',listenWindow)

function listenWindow(){
    let pageWidth = document.documentElement.clientWidth
    let pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}
```

### 绘制函数drawLine
声明一个函数，起始位置坐标为(x1,y1)，终点坐标为(x2,y2)。通过.lineWidth可以设置宽度（通过lineWidth的值可以改变宽度）。坐标之间通过.stroke() 线条连接起来。最后通过.closePath()闭合。
```
function drawLine(x1, y1, x2, y2) {
    context.beginPath()    
    context.moveTo(x1, y1)   //初始位置需要用moveTo定义
    context.lineWidth = lineWidth
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}
```

### PC端与手机端
此画板在手机及PC端均可以操作
判断是否在手机端，就检测是否有ontouchstart功能
```
if('ontouchstart' in document.body){
    mobile code
}else{
    PC code
}
```

#### mobile code
监听canvas的ontouchstart事件，一旦触发，设置起点lastPoint
监听canvas的ontouchmove事件，设置newPoint，将lastPoint和newPoint传给drawLine，并将newPoint赋值给lastPoint。持续的触发此事件。
关键代码：
var x = a.touches[0].clientX
var y = a.touches[0].clientY
取得触碰点的坐标。
.clearRect() 擦除

```
//取得起始点
canvas.ontouchstart = function(a){
    painting = true
    var x = a.touches[0].clientX
    var y = a.touches[0].clientY
    if (eraserEnable) {
        context.clearRect(x - 5, y - 5, 10, 10)
    } else {
        lastPoint = { x: x, y: y }
    }
}

canvas.ontouchmove = function(a){
    if (painting) {
        var x = a.touches[0].clientX
        var y = a.touches[0].clientY
        if (eraserEnable) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            var newPoint = { x: x, y: y }
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
        }
    }
}

canvas.ontouchend = function(a){
    painting = false
}
```
#### PC code
代码与mobile code类似。只是监听onmousedown onmousemove onmouseup事件。
关键代码：
var x = a.clientX
var y = a.clientY
取得鼠标坐标

### 清空画板
```
clear.onclick = function(){
    context.clearRect(0,0,canvas.width,canvas.height)
}
```

### 保存内容
```
download.onclick = function(){
    var url = canvas.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = '我的画'
    a.target = '_blank'
    a.click()
}
```
