//index.js
//获取应用实例
const app = getApp() // 全局实例requere

var util = require('../utils/util.js')
var msg3 = 'index中的变量'
var getMsg4= function () {
  return 'index中的函数'
}
Page({
  data: {
    msg1: app.msg1,
    msg2: app.getMsg2(),
    msg3: msg3,
    msg4: getMsg4(),
    msg5: util.msg5,
    msg6: util.getMsg6()
  },
  //事件处理函数
 

})
