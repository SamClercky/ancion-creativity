import * as React from "react"
import ShowcaseData from "../common/ShowcaseData";
import { asSequence } from "sequency";
import ShowcaseItem from "./ShowcaseItem";

import "./ShowcaseOriginizer.css"
import ShowcaseTile from "./ShowcaseTile";

export interface IShowcaseOrginizerProps {
    className?: string
}

export default class ShowcaseOrginizer extends React.Component<IShowcaseOrginizerProps, {}> {
    private tileId = 0
    private fragmentId = 0

    public render() {
        return (
            <div className={"ShowcaseOrginizerWrapper " + (this.props.className || "")}>
                {this.getShowcaseItems()}
            </div>
        )
    }

    private getShowcaseItems() {
        return asSequence(ShowcaseData.getData())
            .map(item => {
                this.fragmentId++
                return (
                    <React.Fragment key={`Fragment${this.fragmentId}`}>
                        <ShowcaseItem data={item} key={item.url} className="ShowcaseOrginizerItem" />
                        {this.getRandomTiles(4, 2)}
                    </React.Fragment>
                )
            })
            .toArray()
    }

    private getRandomTiles(max: number, min: number = 0) {
        max = max - min
        let length = Math.floor(Math.random() * max) + min
        let result = []
        for (let i = 0; i < length; i++) {
            result.push(<ShowcaseTile key={this.tileId} />)
            this.tileId++
        }
        return result
    }
}