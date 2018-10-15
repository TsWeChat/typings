import * as Crawler from "crawler"

console.log(Crawler, typeof Crawler)

const c = new Crawler({
    maxConnections: 10,
    callback: function(error, res, done) {
        if (error) {
            console.log(error)
        } else {
            var $ = res.$
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server

            console.log(res.body)
        }
        done()
    }
})

c.queue("https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html")