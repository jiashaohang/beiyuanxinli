var app = getApp();
Page({
  data: {
    current: 'mine',
    isScope:false,
    userInfo:{},
    avatarUrl:""
},
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                isScope:true
              })
            }
          })
        }
      }
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  getOpenid:function(){
    wx.requestSubscribeMessage({
      tmplIds: ['bz5sTyHqem9DdRRVwkGAxdHOnOiThasfs_jTEf_YX2o'],
      success (res) { 
        console.log(app.globalData.openid)
        wx.request({
          url: 'https://dian.0310xcx.com/index/index/sendMessage',
          data: {
            openid: app.globalData.openid
          },
          method:'POST',
          success:function(res){
            console.log(res)
          },
          fail:function(res){
            console.log(res)
          }
        })
      }
    })
  },
  entr:function(){
    wx.showToast({
      title: '小北正在开发哟！',
    })
  },
  bindGetUserInfo:function(e){
    var that = this;
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        isScope: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  handleChange ({ detail }) {
      this.setData({
          current: detail.key
      });
      if(detail.key=="find"){
        wx.navigateTo({
          url: '../index/index',
        })
      } 
      else if(detail.key=="consultation"){
        wx.navigateTo({
          url: '/pages/consultation/index',
        })
      }
      else if(detail.key=="admin"){
        wx.navigateTo({
          url: '../admin/index',
        })
      }
      else {
        wx.navigateTo({
          url: '../mine/index',
        })
      }
  }
})