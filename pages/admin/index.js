var app = getApp();
Page({
  data: {
      openid:'',
      showLeft: false,
      entr:[
        {
          img:"https://i.loli.net/2017/08/21/599a521472424.jpg",
          title:'档案管理'
        },
        {
          img:"https://i.loli.net/2017/08/21/599a521472424.jpg",
          title:'档案管理'
        },
        {
          img:"https://i.loli.net/2017/08/21/599a521472424.jpg",
          title:'档案管理'
        },
        {
          img:"https://i.loli.net/2017/08/21/599a521472424.jpg",
          title:'档案管理'
        }
      ]
  },
  onLoad:function(){
    console.log(app.globalData.userInfo)
    this.setData({
      openid:app.globalData.openid
    })
  },
  onShow:function(){
    // console.log(app.globalData.userInfo)
  },
  toggleLeft() {
      this.setData({
          showLeft: !this.data.showLeft
      });
  },
  entrance:function(e) {
    console.log(e)
    this.setData({
      showLeft:false
    })
  }
});