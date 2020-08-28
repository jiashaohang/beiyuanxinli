// components/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight:0,
    menuButton:{},
    menuButtonTop:0,
    menuButtonHeight:0,
    menuButtonBottom:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      var that = this;
      wx.getSystemInfo({
        success: (result) => {
          wx.setStorage({
            key: 'statusBarHeight',
            data:result.statusBarHeight
          })
        },
      })
      var  menuButton = wx.getMenuButtonBoundingClientRect()
      wx.setStorage({
        key: 'menuButton',
        data: menuButton,
      })
      wx.getStorage({
        key: 'statusBarHeight',
        success (res) {
          that.setData({
            statusBarHeight: res.data
          })
        }
      })
      wx.getStorage({
        key: 'menuButton',
        success: function(res){
          that.setData({
            menuButton:res.data
          })
          that.setData({
            menuButtonTop:that.data.menuButton.top - that.data.statusBarHeight,
            menuButtonHeight:that.data.menuButton.height,
            menuButtonBottom:that.data.menuButton.top - that.data.statusBarHeight
          })
        }
      })
   

      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
})
