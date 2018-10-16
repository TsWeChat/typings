import { resolve } from "path"
import * as Crawler from "crawler"
import { Config } from "./config"

export interface IParsePaseItem {}

export function Parse(path: string): Promise<IParsePaseItem> {
    return new Promise((resolve, reject) => {
        const c = new Crawler({
            userAgent: Config.userAgent,
            callback: function(error, res, done, $) {
                if (error) {
                    console.log(error)
                } else {



                }
                done()
            }
        })
        c.queue(path)
    })
}
