//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    color: 'pink',
    number: 10
  },
  //事件处理函数
  my_color : function (e){
    var color = e.detail.value;
    if (color=='红色'){
      color='red'
    }else if (color=='蓝色'){
      color='blue'
    }else if (color=='绿色'){
      color='green'
    }else if (color=='紫色'){
      color='purple'
    }
    this.setData({
      color: color
    })
  }
})
