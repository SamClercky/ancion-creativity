//import {map, reduce, filter} from "lodash"
import {asSequence} from "sequency"

export interface IData {
    url: string,
    name: string,
    description: string,
    keywords: string[],
    id: number,
    facebookUrl?: string,
    twitterUrl?: string,
    pintrestUrl?: string,
    googleplusUrl?: string
}

/**
 * Manages all the data about the art
 */
export default class ShowcaseData {
    private data: IData[];

    public constructor(data?: IData[]) {
        if (data != null) {
            this.data = data
        } else {
            this.data = []
        }
    }

    public add(foto: IData) {
        this.data.push(foto)
    }

    public getDataByKeyword(keyword: string) {
        return asSequence(this.data)
            .filter(item => item.keywords.join(" ").indexOf(keyword.toLowerCase()) != -1)
            .toArray()
    }

    public getDataByKeywords(...keywords: string[]): IData[] {
        return asSequence(keywords)
            .map(item => item.toLowerCase())
            .map(item => this.getDataByKeyword(item))
            .reduce((result, item) => this.diffData(result as IData[], item))
    }

    public getData() {
        return this.data
    }

    public getById(id: number): IData {
        return asSequence(this.data)
            .filter(item => item.id == id)
            .toArray()[0]
    }

    public getByName(name: string): IData[] {
        return asSequence(this.data)
            .filter(item => item.name == name)
            .toArray()
    }

    public getByUrl(url: string): IData[] {
        return asSequence(this.data)
            .filter(item => item.url == url)
            .toArray()
    }

    /**
     * Only returns the data that is in both lists
     * @param d1 list 1
     * @param d2 list 2
     */
    public diffData(d1: IData[], d2: IData[]): IData[] {
        let result: IData[] = []

        for (let x = 0; x < d1.length; x++) {
            for (let y = 0; y < d2.length; y++) {
                if (d1[x].url == d2[y].url) {
                    result.push(d1[x]) // d1 == d2 => return this
                    break // no need to check the others => go to next one
                }
            }
        }

        return result
    }
}