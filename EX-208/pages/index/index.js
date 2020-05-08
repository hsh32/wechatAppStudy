//index.js
//获取应用实例
const app = getApp()

Page({
  //事件处理函数
  calc:function(e){
    var C,F;
    C = e.detail.value;

    this.setData({
      F:C*9/5+32
    })
  }
})
