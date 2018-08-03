import * as React from "react"
import { IData } from "./ShowcaseData";

export interface IFilterItemProps {
    className?: string,
    data: IData
}

/**
 * This is the component that contains one element. It has some keywords which will be used in the filter engine
 */
export default class FilterItem extends React.Component<IFilterItemProps, {}> {
    public render() {
        return (
            <div className={this.props.className || ""}>
                {this.props.data.url}
            </div>
        )
    }
}