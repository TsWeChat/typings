import { resolve } from "path"
import * as jsdom from "jsdom"
import * as jQuery from "jquery"
import { crawler } from "./crawler"

const JSDOM = jsdom.JSDOM

export interface IParsePaseItem {}

export function Parse(path: string): Promise<IParsePaseItem> {
    console.log(path, "start")

    return crawler(path).then((res) => {
        const dom = new JSDOM(res.body)

        const $doc = jQuery(res.body)

        console.log($)

        // console.log($.find("title").text())

        return {}
    })
}
