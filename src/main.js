import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main','pages/send/main', '^pages/index/main',],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'LinkBook',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "color": "#a9b7b7",
      "selectedColor": "#11cd6e",
      "borderStyle":"white",
      "list": [{
        "selectedIconPath": "static/img/index-on.png",
        "iconPath": "static/img/index.png",
        "pagePath": "pages/index/main",
        "text": "首页"
      }, {
        "selectedIconPath": "static/img/send-on.png",
        "iconPath": "static/img/send.png",
        "pagePath": "pages/send/main",
        "text": "发布"
      }, {
        "pagePath": "pages/index/main",
        "text": "我的"
      }]
    },
  }
}
