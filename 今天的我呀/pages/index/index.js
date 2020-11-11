//index.js
//获取应用实例

import Dialog from '../dist/dialog/dialog';
import Notify from '../dist/notify/notify';
import Toast from '../dist/toast/toast';

const app = getApp()

var util = require('../../utils/util.js');

Page({
  data: {
    isshow1: false,
    isshow2: false,
    isshow3: false,
    isshow4: false,
    showMyPro:false,
    show: false,
    actions: [
      {
        name: '新年快乐'
      },
      {
        name: '新年快乐！！！'
      },
      {
        name: '好吧',
        subname: '还是新年快乐！！！'
      }
    ],

    animationData: {},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url:'../logs/logs'
    })
  },

  onClickShow() {
    this.setData({ showMyPro: true });

    setTimeout(_ => {
      this.setData({
        isshow1: true
      })
    }, 500)

    setTimeout(_ => {
      this.setData({
        isshow2: true
      })
    }, 2000)

    setTimeout(_ => {
      this.setData({
        isshow3: true
      })
    }, 3500)

    setTimeout(_ => {
      this.setData({
        isshow4: true
      })
    }, 5000)

  },

  onClickHide() {
    this.setData({ showMyPro: false });
  },

  noop() { },

  sendHeart() {
    Toast.success('心想事成');
  },

  showDialog: function() {
    Dialog.alert({
      message: '祝福大家2020年开开心心，身体健康，万事如意'
    }).then(() => {
      // on close
    });
  },

  onClose() {
    this.setData({ show: false });
  },

  showNotify:function() {
    this.setData({ show: true });
  },

  onLoad: function () {

    var currenttime = util.formatTime(new Date());

    console.log(currenttime)

    this.setData(

      {

        time: currenttime

      }

    );

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onShow: function () {
      
  }

})
