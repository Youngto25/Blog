var $ = function(selector){
  return document.querySelector(selector);
}

var close = $('.close');
var open = $('.open');
var content = $('.content');

close.addEventListener('click', function(){
  content.classList.toggle('active');
  setTimeout(()=>{
    open.style.display = 'inline-block'
  },200)
})

open.addEventListener('click', function(){
  content.classList.toggle('active');
  open.style.display = 'none';
})