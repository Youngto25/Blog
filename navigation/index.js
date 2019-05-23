

left_href = [
  {"href":'F:\\',"value":'F盘'},
  {"href":'C:\\',"value":'C盘'},
  {"href":'D:\\',"value":'D盘'},
  {"href":'E:\\',"value":'E盘'},
  {"href":'F:\BaiduNetdiskDownload',"value":'百度网盘下载'},
  {"href":'http://cndevdocs.com/',"value":'前端开发中文文档导航'},
  {"href":'https://juejin.im/timeline',"value":'掘金'},
  {"href":'https://time.geekbang.org/',"value":'极客'},
  {"href":'https://www.zhangxinxu.com/wordpress/page/64/',"value":'张鑫旭'},
  {"href":'http://www.ruanyifeng.com/blog/developer/',"value":'阮一峰'}
]

var left = new Vue({
  el: '.leftChild',
  data: {
    left_title: '博客导航',
    hrefs: left_href
  }
})

right_href = [
  {"href":'http://css-tricks.com/centering-in-the-unknown',"value":'不为人知的居中方法'},
  {"href":'http://www.ltaaa.com/',"value":'龙腾网'},
  {"href":'http://www.santaihu.com/',"value":'三泰虎'},
  {"href":'http://2chcn.com/',"value":'2ch中文网'},
  {"href":'http://how2j.cn/stage/27.html',"value":'HOW2J'},
  {"href":'https://ke.qq.com/',"value":'腾讯课堂'},
  {"href":'https://study.163.com/',"value":'网易云课堂'},
  {"href":'https://www.imooc.com/',"value":'慕课网'},
  {"href":'https://dribbble.com/',"value":'Dribbble'},
  {"href":'https://codepen.io/',"value":'Codepen'},
  {"href":'https://www.google.com/',"value":'Google'},
  {"href":'https://flatuicolors.com/',"value":'Flatuicolors'},
  {"href":'https://www.colorzilla.com/gradient-editor/',"value":'Colorzilla'}
]

var left = new Vue({
  el: '.rightChild',
  data: {
    right_title: '资源导航',
    hrefs: right_href
  }
})

var side_href = [
  {"href":'https://weibo.com/u/5378341288/home?wvr=5&sudaref=weibo.com&display=0&retcode=6102&sudaref=passport.weibo.com',"value":'微博'},
  {"href":'https://www.douyu.com',"value":'斗鱼'},
  {"href":'https://www.huya.com',"value":'虎牙'},
  {"href":'https://www.youku.com',"value":'优酷'},
  {"href":'https://v.qq.com/',"value":'腾讯视频'},
  {"href":'https://www.bilibili.com/',"value":'Bilibili'},
  {"href":'https://www.youtube.com/',"value":'Youtube'},
  {"href":'https://www.quora.com/',"value":'Quora'},
  {"href":'https://www.twitter.com/',"value":'Twitter'},
  {"href":'https://www.reddit.com/',"value":'Reddit'}
]

function $(selector){
  return document.querySelector(selector)
}

var content = $('.content');
var spread = $('.open');

var side = new Vue({
  el: '.sidebar',
  data: {
    hrefs: side_href,
    key: false
  },
  methods: {
    movein(){
      this.key = !this.key
      setTimeout(()=>{
        spread.style.display = 'inline-block';
      },200)
    },
    moveout(){
      this.key = !this.key
    }
  }
})
