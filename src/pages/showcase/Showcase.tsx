import * as React from "react"

import TemplatePage from "../common/TemplatePage"
import ShowcaseData, { IData } from "../common/ShowcaseData";
import ShowcaseOrginizer from "./ShowcaseOrginizer";

export default class Showcase extends React.Component {
    public render() {
        //this.test()
        return (
            <TemplatePage title="Showcase" sectionId="showcase">
                <ShowcaseOrginizer items={this.getTestData()} />
            </TemplatePage>
        )
    }

    private getTestData() {
        return new ShowcaseData([
            {url: "http://via.placeholder.com/350x150", name:"f1", description:"", keywords:["mooi", "top"], id:0},
            {url: "http://via.placeholder.com/150x300", name:"f2", description:"", keywords:["mooi", "super"], id:1},
            {url: "http://via.placeholder.com/400x200", name:"f3", description:"", keywords:["lekker", "top"], id:2},
            {url: "http://via.placeholder.com/100x300", name:"f4", description:"", keywords:["mooi", "top"], id: 3},
            {url: "http://via.placeholder.com/300x100", name:"f5", description:"", keywords:["lelijk", "mooi"], id:4},
            {url: "http://via.placeholder.com/350x150", name:"f6", description:"", keywords:["misschien", "ikweethetniet"], id:5},
            {url: "http://via.placeholder.com/200x400", name:"f7", description:"", keywords:["ikweethetniet", "top"], id:6}
        ] as IData[])
    }
}