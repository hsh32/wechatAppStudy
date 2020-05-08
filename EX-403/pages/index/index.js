//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    a: 10,
    b: 20,
    c: 30,
    Student: {
      stuID: '20190213',
      name: '张三',
      birthday: '2001-9-1'
    },
    array: [
      '2018','2019','2020'
    ]
  },
  //事件处理函数
  modify: function() {
    this.setData({
      a: 100,
      b: 200,
      c: 300,
      Student: {
        stuID: '20200213',
        name: '张小三',
        birthday: '2021-11-1'
      },
      array: [
        '2038','2039','2040'
      ]
    })
  },
  
})
