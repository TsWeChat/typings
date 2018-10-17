declare namespace test {
    export interface IndexPageFunction {
        sayName(): void
        log(msg: string): void
    }

    export interface IndexPageData {}

    export type IndexPage = wx.IPage<IndexPageFunction, IndexPageData>
}
