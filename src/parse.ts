import { resolve } from "path"
import * as jsdom from "jsdom"
import { crawler } from "./crawler"
import { IChapter } from "./getApiList"

const JSDOM = jsdom.JSDOM

export interface IParsePaseItem {
    title: string
    name: string
    nameDesc: string
    returnName: string
    returnDesc: string
    returnVersion?: string
    params: string
}

export function Parse(path: string, chapter: IChapter): Promise<IParsePaseItem> {
    console.log(path, "start")

    const { name } = chapter

    return crawler(path).then((res) => {
        const dom = new JSDOM(res.body)
        const $ = require("jquery")(dom.window)

        const $goalBox = $("#book-search-results .markdown-section")
        const title = $goalBox.find("h3").text()
        const nameDesc = $goalBox.find("h3 + p").text()

        const $return = $goalBox.find("[id='返回值'] + h5")
        const returnName = $return.text()
        const returnVersion = $return.next("blockquote").text()
        const returnDesc = $return.next("p")

        return { name, nameDesc, title, returnName, returnVersion, returnDesc, params: "" }
    })
}
