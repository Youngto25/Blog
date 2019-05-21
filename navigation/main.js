var $ = function(selector){
  return document.querySelector(selector);
}
var $$ = function(selector){
  return document.querySelectorAll(selector);
}

var close = $('.close');
var spread = $('.open');
var content = $('.content');
var list = $('.content .list');

list.addEventListener('click',function(e){
  href = e.target.firstChild.getAttribute('href');
  window.open(href,'_blank');
})

close.addEventListener('click', function(){
  content.classList.toggle('active');
  setTimeout(()=>{
    spread.style.display = 'inline-block'
  },200)
})

spread.addEventListener('click', function(){
  content.classList.toggle('active');
  spread.style.display = 'none';
})


var keyword = $('#keyword');
var button = $('#button');
var value = '';
var clock;

keyword.oninput = function(e){
  if(clock){
    clearInterval(clock)
  } 
  clock = setTimeout(()=>{
    value = keyword.value;
  },100)
}

button.addEventListener('click',function(e){
  var url = 'https://www.google.com/search?q='+value;
  window.open(url,'_blank');
})

document.onkeyup = function(e) {
  // 兼容FF和IE和Opera
  var event = e || window.event;
  //判断是哪个按键
  var key = event.which || event.keyCode || event.charCode;
  if (key == 13) {
    var url = 'https://www.google.com/search?q='+value;
    window.open(url,'_blank');
  }
}

