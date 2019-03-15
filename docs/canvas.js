var canvas = document.getElementById('canvas');

var pageWidth = document.documentElement.clientWidth;
var pageHeight = document.documentElement.clientHeight;
canvas.width = pageWidth;
canvas.height = pageHeight;

window.onresize = function () {
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
}

var context = canvas.getContext('2d');


var painting = false;
var lastPoint = { x: undefined, y: undefined }
canvas.onmousedown = function (a) {
    painting = true;
    var x = a.clientX;
    var y = a.clientY;
    if (eraserEnable) {
        context.clearRect(x - 5, y - 5, 10, 10)
    } else {
        lastPoint = { x: x, y: y }
        drawCircle(x, y, 1);
    }
}
canvas.onmousemove = function (a) {
    if (painting) {
        var x = a.clientX;
        var y = a.clientY;
        if (eraserEnable) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            var newPoint = { x: x, y: y }
            drawCircle(x, y, 1);
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
            lastPoint = newPoint;
        }
    }
}
canvas.onmouseup = function (a) {
    painting = false;
}

function drawCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
}
function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.moveTo(x1, y1);
    context.lineWidth = 2;
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}

var eraserEnable = false;
eraser.onclick = function () {
    eraserEnable = !eraserEnable;
    if (eraserEnable) {
        eraser.textContent = '画笔';
    } else {
        eraser.textContent = '橡皮擦';
    }
}