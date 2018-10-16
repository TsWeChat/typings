import { resolve } from "path"
import { IChapter } from "./getApiList"
import APIListJson from "./data/data.json"
import { Parse } from "./parse"
import { WriteType } from "./writeType"

const data: IChapter[] = APIListJson

const parseQueue: IChapter[] = []

function loopChapters(chapters: IChapter[]): void {
    chapters.forEach((section) => {
        const { path, subs = [] } = section

        if (subs.length > 0) {
            loopChapters(subs)
        } else {
            parseQueue.push(section)
        }
    })
}

loopChapters(data)

function startParseQueue(index: number) {
    const item = parseQueue[index]

    Parse(item.path).then((result) => {
        item.parseResult = result
        if (index >= parseQueue.length - 1) {
            console.log("End parse")
            WriteType(data)
        } else {
            startParseQueue(index + 1)
        }
    })
}

startParseQueue(0)
