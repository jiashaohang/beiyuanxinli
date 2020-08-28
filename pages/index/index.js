// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_tab1:0,
    current: 'find',
    tab:'tab1',
    tab2:0,
    Tlist_all:[],
    Tlist_in:[],
    Tlist_out:[],
    Tlist_team:[],
  },
  handleChangeScroll: function(e){
   this.setData({
     tab:e.detail.key
   })
  },
  tab: function(e){
    this.setData({
      tab2:e.currentTarget.dataset.tab
    })
  },
  tapListCard: function(e){
    // console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '/pages/Tdetail/index' + '?tid=' + e.currentTarget.dataset.tid,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    // 申请开放权限
    wx.showLoading({
      title: '正在加载页面',
    })
    wx.cloud.callFunction({
      name: 'is_tab',
      data: {
      },
      success:function(res){
        that.setData({
          is_tab1:res.result.is_tab.is_tab1
        })
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
    // 小程序端获取咨询师列表开始
    // 初始化小程序云开发数据库环境
    const db = wx.cloud.database({
      env: 'beiyuanxinli-yun-1'
    })
    // 获取全部教师
    db.collection('Tlist').get({
      success:function(res){
        // 成功拿到数据
        console.log(res)
        that.setData({
          Tlist_all:res.data
        })
      }
    })
    // 获取校内教师
    db.collection('Tlist').where({
      ttype:123
    }).get({
      success:function(res){
        // 成功拿到数据
        // console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  })