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
  var li = e.target;
  console.log(e.target);
  a = li.firstChild;
  console.log(a);
  href = a.getAttribute('href');
  console.log(href);
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