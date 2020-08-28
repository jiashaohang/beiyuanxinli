new App({
  globalData:{
    userInfo:{},
    openid:''
  },
  onLaunch: function () {
    var that = this;
    // 初始化云环境
    wx.cloud.init({
      env: 'beiyuanxinli-yun-1'
    })

    wx.login({
      success (res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://dian.0310xcx.com/index/index',
            data: {
              code: res.code
            },
            method:'GET',
            success:function(res){
              that.globalData.openid=res.data.openid
            }
          })
        }
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // console.log(111)
          wx.getUserInfo({
            success: res => {
              that.globalData.userInfo=res.userInfo
            },
            fail: res => {
              console.log(res)
            }
          })
        }
      }
    })
    
    // 初始化开发云数据库环境
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
