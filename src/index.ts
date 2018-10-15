import * as Crawler from "crawler"

enum EType {
    category = "category",
    subCategory = "subCategory",
    wechatAPI = "wechatAPI"
}

interface IChapter {
    name: string
    path: string
    type: EType
    subs: IChapter[]
}

function parse($: any, chapters: any[] = []): IChapter[] {
    const resultChapters: IChapter[] = []

    const len = chapters.length

    for (let i = 0; i < len; i++) {
        const cat = chapters[i]
        const { attribs } = cat

        const subList = Array.isArray(cat.childNodes)
            ? cat.childNodes.find((ele) => ele.attribs && ele.attribs.class && ele.attribs.class.indexOf("articles") > -1)
            : undefined

        const path = attribs["data-path"]
        const name = attribs["data-name"]

        const item: IChapter = {
            name,
            path,
            type: EType.category,
            subs: []
        }

        if (subList && subList.name === "ul") {
            item.subs = parse($, subList.childNodes)
        }

        resultChapters.push(item)

        // console.log(name, path, item.subs)
    }

    return resultChapters
}

const c = new Crawler({
    maxConnections: 10,
    callback: function(error, res, done, $) {
        if (error) {
            console.log(error)
        } else {
            var $ = res.$
            parse($, $("nav[role='navigation'] .summary > .chapter"))
        }
        done()
    }
})

c.queue("https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html")
