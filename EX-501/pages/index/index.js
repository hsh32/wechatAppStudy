//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   score: 0 //score初始值
  },
  //事件处理函数
  scoreInput : function(e){
    this.setData({
      score: e.detail.value
    })
  }
})
