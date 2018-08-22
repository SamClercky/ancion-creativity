//import {map, reduce, filter} from "lodash"
import { asSequence } from "sequency"

export interface IData {
    url: string,
    name: string,
    description: string,
    keywords: string[]
    facebookUrl?: string,
    twitterUrl?: string,
    pintrestUrl?: string,
    googleplusUrl?: string,
    standartComment?: string
}

/**
 * Manages all the data about the art
 */
export default class ShowcaseData {
    private static data: IData[] = [];

    /**
     * Resets all the data
     * @param data The new data to be stored
     */
    public constructor(data?: IData[]) {
        if (data != null) {
            ShowcaseData.data = data
        } else {
            ShowcaseData.data = []
        }
    }

    public static add(foto: IData) {
        ShowcaseData.data.push(foto)
    }

    public static getDataByKeyword(keyword: string) {
        return asSequence(ShowcaseData.data)
            .filter(item => item.keywords.join(" ").indexOf(keyword.toLowerCase()) != -1)
            .toArray()
    }

    public static getDataByKeywords(...keywords: string[]): IData[] {
        return asSequence(keywords)
            .map(item => item.toLowerCase())
            .map(item => ShowcaseData.getDataByKeyword(item))
            .reduce((result, item) => ShowcaseData.diffData(result as IData[], item))
    }

    public static getData() {
        return ShowcaseData.data
    }

    public static getByName(name: string): IData[] {
        return asSequence(ShowcaseData.data)
            .filter(item => item.name == name)
            .toArray()
    }

    public static getByUrl(url: string): IData[] {
        return asSequence(ShowcaseData.data)
            .filter(item => item.url == url)
            .toArray()
    }

    public static getLength(): number {
        return ShowcaseData.data.length
    }

    /**
     * Only use this for quick initial dummy data
     */
    public static getEmptyDummyData(): IData {
        return {
            url: `nourl/${Math.floor(Math.random()*100)}`,
            name: "no name",
            description: "no description",
            keywords: ["no tags"]
        }
    }

    /**
     * Only returns the data that is in both lists
     * @param d1 list 1
     * @param d2 list 2
     */
    public static diffData(d1: IData[], d2: IData[]): IData[] {
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