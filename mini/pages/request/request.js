// pages/request/request.js
Page({
    /**
   * Page initial data
   */
    data: {},

    /**
   * Lifecycle function--Called when page load
   */
    onLoad: function(options) {},

    /**
   * Lifecycle function--Called when page is initially rendered
   */
    onReady: function() {},

    /**
   * Lifecycle function--Called when page show
   */
    onShow: function() {
        const requestTask = wx.request({
            data: { name: "usermame", password: "123456" },
            success(res) {
                console.log(data)
            }
        })

        requestTask.abort()
    },

    /**
   * Lifecycle function--Called when page hide
   */
    onHide: function() {},

    /**
   * Lifecycle function--Called when page unload
   */
    onUnload: function() {},

    /**
   * Page event handler function--Called when user drop down
   */
    onPullDownRefresh: function() {},

    /**
   * Called when page reach bottom
   */
    onReachBottom: function() {},

    /**
   * Called when user click on the top right corner to share
   */
    onShareAppMessage: function() {}
})
