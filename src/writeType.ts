import { resolve } from "path"
import { IChapter } from "./getApiList"
import { writeFileSync } from "fs"

export function WriteType(data: IChapter[]) {
    writeFileSync(resolve(__dirname, "./data/result.json"), JSON.stringify(data, null, 2))

    console.log("start write type")
}
