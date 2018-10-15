import { writeFileSync } from "fs"
import * as url from "url"
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

const initPath = "https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html"

function parse($: any, chapters: any[] = [], type: EType = EType.category): IChapter[] {
    const resultChapters: IChapter[] = []

    const len = chapters.length

    for (let i = 0; i < len; i++) {
        const cat = chapters[i]
        const { attribs } = cat

        const subList = Array.isArray(cat.childNodes)
            ? cat.childNodes.find(
                  (ele) => ele.attribs && ele.attribs.class && ele.attribs.class.indexOf("articles") > -1
              )
            : undefined

        const path = attribs ? attribs["data-path"] : ""
        const name = attribs ? attribs["data-name"] : ""

        if (!name) continue

        const item: IChapter = {
            name,
            path: url.resolve(initPath, path),
            type,
            subs: []
        }

        if (subList && subList.name === "ul") {
            item.subs = parse($, subList.childNodes, EType.subCategory)
        }

        if (item.subs.length === 0) {
            item.type = EType.wechatAPI
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
            const data = parse($, $("nav[role='navigation'] .summary > .chapter"))

            writeFileSync("./data.json", JSON.stringify(data, null, 4))
        }
        done()
    }
})

c.queue(initPath)
