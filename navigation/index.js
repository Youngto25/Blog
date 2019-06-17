

left_href = [
  {"href":'F:\\',"value":'F盘'},
  {"href":'C:\\',"value":'C盘'},
  {"href":'D:\\',"value":'D盘'},
  {"href":'E:\\',"value":'E盘'},
  {"href":'F:\\BaiduNetdiskDownload',"value":'百度网盘下载'},
  {"href":'http://cndevdocs.com/',"value":'前端开发中文文档导航'},
  {"href":'https://juejin.im/timeline',"value":'掘金'},
  {"href":'https://time.geekbang.org/',"value":'极客'},
  {"href":'https://www.zhangxinxu.com/wordpress/page/64/',"value":'张鑫旭'},
  {"href":'http://www.ruanyifeng.com/blog/developer/',"value":'阮一峰'},
  {"href":'https://framework7.io/docs/',"value":'Framework7'},
  {"href":'https://ant.design/docs/react/introduce-cn',"value":'Ant Design'},
  {"href":'https://element.eleme.cn/#/zh-CN/component/installation',"value":'Element'},
  {"href":'https://www.iviewui.com/docs/guide/install',"value":'iView'},
  {"href":'https://www.kancloud.cn/yunye/axios/234845',"value":'Axios教程'},
  {"href":'https://cn.vuejs.org/v2/guide/',"value":'Vue教程'},
  {"href":'https://cloud.tencent.com/developer/devdocs',"value":'腾讯云社区'},
  {"href":'https://webpack.docschina.org/concepts/',"value":'Webpack'},
  {"href":'https://zh.parceljs.org/getting_started.html/',"value":'Parcel'},
  {"href":'http://es6.ruanyifeng.com/',"value":'ES6教程'},
  {"href":'https://wangdoc.com/javascript/',"value":'JavaScript教程'}
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
  {"href":'http://ife.baidu.com/',"value":'百度前端技术学院'},
  {"href":'https://ke.qq.com/',"value":'腾讯课堂'},
  {"href":'https://study.163.com/',"value":'网易云课堂'},
  {"href":'https://www.imooc.com/',"value":'慕课网'},
  {"href":'https://dribbble.com/',"value":'Dribbble'},
  {"href":'https://codepen.io/',"value":'Codepen'},
  {"href":'https://www.google.com/',"value":'Google'},
  {"href":'https://flatuicolors.com/',"value":'Flatuicolors'},
  {"href":'https://colorhunt.co/',"value":'Colorhunt'},
  {"href":'https://www.colorzilla.com/gradient-editor/',"value":'Colorzilla'},
  {"href":'https://www.w3cplus.com/',"value":'w3cplus'},
  {"href":'https://www.yuque.com/fe9',"value":'前端九部'},
  {"href":'https://www.chaijs.com/',"value":'chaijs'},
  {"href":'https://vuepress.vuejs.org/zh/',"value":'vuepress'},
  {"href":'https://www.nowcoder.com/',"value":'牛客'},
  {"href":'https://leetcode-cn.com/explore/',"value":'Leetcode'},
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
  {"href":'http://tv.cctv.com/live/?spm=C96370.PsikHJQ1ICOX.Exanhtjhchcl.1',"value":'CCTV'},
  {"href":'https://www.bilibili.com/',"value":'Bilibili'},
  {"href":'https://www.youtube.com/',"value":'Youtube'},
  {"href":'https://www.quora.com/',"value":'Quora'},
  {"href":'https://www.twitter.com/',"value":'Twitter'},
  {"href":'https://www.reddit.com/',"value":'Reddit'},
  {"href":'https://www.zhihu.com/',"value":'知乎'},
  {"href":'https://www.guancha.cn/',"value":'观察者'},
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

new Vue({
  el: '.wrapper',
  data: {
    search: 'search',
    value: '',
    url: '',
    show: false,
    engine: [
      {'yinqing':'Google','url':'https://www.google.com/search?q='},
      {'yinqing':'Bing','url':'https://cn.bing.com/search?q='}
    ],
    selected: 'Google'
  },
  methods: {
    searchItem(){
      this.engine.map((zhi,index)=>{
        if(zhi.yinqing === this.selected){
          return this.url = zhi.url
        }
      })
      window.open(this.url+this.value,'_blank');
    },
    change(){
      this.show = !this.show
    }
  }
})