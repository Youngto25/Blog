import './canvas.css'
import './js/svg'

// // 手机端，令页面在操作时不动
// document.body.ontouchstart = function(eee){
//     eee.preventDefault()
// }

const $ = s => document.querySelector(s)

let callback = [
    {id:'brush',content: '画笔'},
    {id:'eraser',content: '橡皮'},
    {id:'clear',content: '清空'},
    {id:'download',content: '保存'},
    {id:'black',content: '黑色画笔'},
    {id:'red',content: '红色画笔'},
    {id:'green',content: '绿色画笔'},
    {id:'blue',content: '蓝色画笔'},
    {id:'thin',content: '细'},
    {id:'thick',content: '粗'},
]

let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let lineWidth = 5
let eraserEnable = false
let painting = false
let lastPoint = { x: undefined, y: undefined }

listenWindow()
window.addEventListener('resize',listenWindow)

if('ontouchstart' in document.body){
    canvas.ontouchstart = function(a){
        painting = true
        let x = a.touches[0].clientX
        let y = a.touches[0].clientY
        if (eraserEnable) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            lastPoint = { x: x, y: y }
        }
    }
    canvas.ontouchmove = function(a){
        if (painting) {
            let x = a.touches[0].clientX
            let y = a.touches[0].clientY
            if (eraserEnable) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                let newPoint = { x: x, y: y }
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
        let x = a.clientX
        let y = a.clientY
        if (eraserEnable) {
            context.clearRect(x - 5, y - 5, 10, 10)
        } else {
            lastPoint = { x: x, y: y }
        }
    }
    canvas.onmousemove = function (a) {
        if (painting) {
            let x = a.clientX
            let y = a.clientY
            if (eraserEnable) {
                context.clearRect(x - 5, y - 5, 10, 10)
            } else {
                let newPoint = { x: x, y: y }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
                lastPoint = newPoint
            }
        }
    }
    canvas.onmouseup = function (a) {
        painting = false
    }
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineWidth = lineWidth
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}


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
    let url = canvas.toDataURL("image/png")
    let a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = '我的画'
    a.target = '_blank'
    a.click()
}


$('.colors').addEventListener('click',function(e){
    let el = e.target
    let id = e.target.id
    if(id === 'black'){
        x(el,'black')
    }else if(id === 'red'){
        x(el,'red')
    }else if(id === 'green'){
        x(el,'green')
    }else if(id === 'blue'){
        x(el,'blue')
    }
    remindMe(id)
})

$('.sizes').addEventListener('click',function(e){
    if(e.target.id === 'thin'){
        lineWidth = 5
        thin.classList.add('active')
        thick.classList.remove('active')
    }else if(e.target.id === 'thick'){
        lineWidth = 10
        thin.classList.remove('active')
        thick.classList.add('active')
    }
    remindMe(e.target.id)
})

function remindMe(id){
    callback.forEach((item)=>{
        if(item.id === id){
            $('.remind .text').innerHTML = item.content
        }
    })
    $('.remind').style.transform = 'translateY(0)'
    setTimeout(()=>{
        $('.remind').style.transform = 'translateY(-100%)'
    },2000)
}

function x(el,color){
    context.fillStyle = color
    context.strokeStyle = color
    black.classList.remove('active')
    red.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    el.classList.add('active')
}

function listenWindow(){
    let pageWidth = document.documentElement.clientWidth
    let pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth
    canvas.height = pageHeight
}