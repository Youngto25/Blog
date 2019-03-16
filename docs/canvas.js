// // 手机端，令页面在操作时不动
// document.body.ontouchstart = function(eee){
//     eee.preventDefault()
// }

var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var lineWidth = 5

var pageWidth = document.documentElement.clientWidth
var pageHeight = document.documentElement.clientHeight
canvas.width = pageWidth
canvas.height = pageHeight

window.onresize = function () {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}




var painting = false
var lastPoint = { x: undefined, y: undefined }

if('ontouchstart' in document.body){
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
}else{
    canvas.onmousedown = function (a) {
        painting = true
        var x = a.clientX
        var y = a.clientY
        if (eraserEnable) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            lastPoint = { x: x, y: y }
        }
    }
    canvas.onmousemove = function (a) {
        if (painting) {
            var x = a.clientX
            var y = a.clientY
            if (eraserEnable) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                var newPoint = { x: x, y: y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
        }
    }
    canvas.onmouseup = function (a) {
        painting = false
    }
}

function drawCircle(x, y, radius) {
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI * 2)
    context.fill()
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineWidth = lineWidth
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}

var eraserEnable = false
brush.onclick = function(){
    eraserEnable = false
    brush.classList.add('active')
    eraser.classList.remove('active')
}
eraser.onclick = function(){
    eraserEnable = true
    eraser.classList.add('active')
    brush.classList.remove('active')
}
clear.onclick = function(){
    context.clearRect(0,0,canvas.width,canvas.height)
}
download.onclick = function(){
    var url = canvas.toDataURL("image/png")
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = '我的画'
    a.target = '_blank'
    a.click()
}


black.onclick = function(){
    context.fillSytle = 'black'
    context.strokeStyle = 'black'
    black.classList.add('active')
    red.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
red.onclick = function(){
    context.fillSytle = 'red'
    context.strokeStyle = 'red'
    black.classList.remove('active')
    red.classList.add('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}
green.onclick = function(){
    context.fillSytle = 'green'
    context.strokeStyle = 'green'
    black.classList.remove('active')
    red.classList.remove('active')
    green.classList.add('active')
    blue.classList.remove('active')
}
blue.onclick = function(){
    context.fillSytle = 'blue'
    context.strokeStyle = 'blue'
    black.classList.remove('active')
    red.classList.remove('active')
    green.classList.remove('active')
    blue.classList.add('active')
}

thin.onclick = function(a){
    console.log(a)
    lineWidth = 5
    console.log(lineWidth)
}
thick.onclick = function(a){
    console.log(a)
    lineWidth = 10
    console.log(lineWidth)
}