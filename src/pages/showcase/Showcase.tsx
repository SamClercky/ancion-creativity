import * as React from "react"

import TemplatePage from "../common/TemplatePage"
import FilterEngine from "./FilterEngine";
import ShowcaseData, { IData } from "./ShowcaseData";

export default class Showcase extends React.Component {
    public render() {
        //this.test()
        return (
            <TemplatePage title="Showcase" sectionId="showcase">
                <FilterEngine items={this.getTestData()} />
            </TemplatePage>
        )
    }

    /*private test() {
        let data: IData[] = [
            {url: "f1", name:"", description:"", keywords:["mooi", "top"]},
            {url: "f2", name:"", description:"", keywords:["mooi", "super"]},
            {url: "f3", name:"", description:"", keywords:["lekker", "top"]},
            {url: "f4", name:"", description:"", keywords:["mooi", "top"]},
            {url: "f5", name:"", description:"", keywords:["lelijk", "mooi"]},
            {url: "f6", name:"", description:"", keywords:["misschien", "ikweethetniet"]},
            {url: "f7", name:"", description:"", keywords:["ikweethetniet", "top"]}
        ]
        let s = new ShowcaseData(data)
        console.log(s.getDataByKeywords("top", "top"))
    }*/

    private getTestData() {
        return new ShowcaseData([
            {url: "f1", name:"", description:"", keywords:["mooi", "top"], id:0},
            {url: "f2", name:"", description:"", keywords:["mooi", "super"], id:1},
            {url: "f3", name:"", description:"", keywords:["lekker", "top"], id:2},
            {url: "f4", name:"", description:"", keywords:["mooi", "top"], id: 3},
            {url: "f5", name:"", description:"", keywords:["lelijk", "mooi"], id:4},
            {url: "f6", name:"", description:"", keywords:["misschien", "ikweethetniet"], id:5},
            {url: "f7", name:"", description:"", keywords:["ikweethetniet", "top"], id:6}
        ] as IData[])
    }
}