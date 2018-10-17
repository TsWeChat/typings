/**
 * 
 * @param {test.IndexPageData} a 
 */
function sum(a){

}

/** @type { Page<test.IndexPageFunction, test.IndexPageData>  } */ Page({
    /**
   * Page initial data
   */
    data: {
        count: 1,
        people: {
            name: "wesley",
            age: 23
        }
    },

    sayName() {
        console.log("my name is lisa")
        console.log(this.data.people.name + this.data.people.age)
    },

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
    onShow: function() {},

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
