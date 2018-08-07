import * as React from "react"
import { themeColors } from "../../Constants";

export interface IShowcaseTileProps {
    className?: string
}

export default class ShowcaseTile extends React.Component<IShowcaseTileProps, {}> {
    public shouldComponentUpdate() {
        return false
    }

    public render() {
        return (
            <div
                className={"ShowcaseTileWrapper " + (this.props.className || "")}
                style={this.getColor()}
            />
        )
    }

    private getColor(): React.CSSProperties {
        let randomIndex = Math.floor(Math.random() * 5)
        randomIndex = (randomIndex == 5)? 4: randomIndex
        return {
            backgroundColor: themeColors[randomIndex].value
        }
    }
}