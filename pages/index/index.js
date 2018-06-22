//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stock : '',
    phone : '',
    percent: 0,
    showDialog : false,
    showProgress: true,
    hasGetReport : false
  },
  onLoad: function () {
  },
  submitStock: function(e){
    let thix = this;
    // wx.showLoading({
    //   title: '读取数据中',
    // })
    if (!e.detail.value.stock){
      wx.showToast({
        title: '请输入有效的股票代码或名称',
        icon: "none"
      })
    }else{
      // 调取报告
      thix.setData({
        stock: e.detail.value.stock,
        showDialog: true
      })
      let percent = 0;
      setInterval(function(){
        if (percent < 100){
          percent++;
          thix.setData({
            percent: percent
          })
        }else{
          return
        }
      },10)
        
      setTimeout(function () {
        thix.setData({
          showProgress: false
        })
        clearInterval()
      }, 1200)
    }
    
  },
  submitPhone : function(e){
    let thix = this;
    // 提交手机号码
    if (!e.detail.value.phone) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: "none"
      })
    } else {
      wx.showToast({
        title: '诊断报告已发送至您的手机',
        icon: "none"
      })
      setTimeout(function(){
        thix.setData({
          phone: e.detail.value.phone,
          showDialog: false
        })
      },1500)
      
    }
  }
})
