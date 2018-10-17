import * as request from "request"

interface ICrawlerCallback {
    body: string
}

export function crawler(path: string): Promise<ICrawlerCallback> {
    return new Promise((resolve, reject) => {
        request(path, {
            headers: {
                "User-Agent": "Github Open Source: https://github.com/TsWeChat/typings"
            },
            callback(error, response) {
                if (error) {
                    reject({
                        body: "null"
                    })
                } else {
                    resolve({
                        body: response.body
                    })
                }
            }
        })
    })
}
