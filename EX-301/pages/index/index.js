//index.js
//获取应用实例
const app = getApp()

Page({
    //事件处理函数
    calc:function(e){
      var x,y;
      x = e.detail.value;
      if (x < 0) {
        y = Math.abs(x);
      } else if (x < 10) {
        y = Math.exp(x) * Math.sin(x);
      } else if (x < 20) {
        y = Math.pow(x, 3);
      } else {
        y = (3 + 2 * x) * Math.log(x);
      }
      this.setData({
        y: y
      })

    }
})
