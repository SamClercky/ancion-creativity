import * as React from "react"
import { themeColors } from "../../Constants";

export interface IShowcaseTileProps {
    className?: string,
    onMouseEnter?: (evt: React.MouseEvent) => void,
    onMouseMove?: (evt: React.MouseEvent) => void,
    onMouseLeave?: (evt: React.MouseEvent) => void,
    title?: string
}

export default class ShowcaseTile extends React.Component<IShowcaseTileProps, {}> {

    private color: React.CSSProperties

    public constructor(props: IShowcaseTileProps) {
        super(props)
    
        // this.state = {}
    
        // bind all eventListeners
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)

        // init vars
        this.color = this.getColor()
    }
    
    public shouldComponentUpdate() {
        return (this.props.children != undefined)
    }

    private onMouseEnter(evt: React.MouseEvent) {
        if (this.props.onMouseEnter != undefined) {
            this.props.onMouseEnter(evt)
        }
    }

    private onMouseLeave(evt: React.MouseEvent) {
        if (this.props.onMouseLeave != undefined) {
            this.props.onMouseLeave(evt)
        }
    }

    private onMouseMove(evt: React.MouseEvent) {
        if (this.props.onMouseMove != undefined) {
            this.props.onMouseMove(evt)
        }
    }

    public render() {
        return (
            <div
                className={"ShowcaseTileWrapper " + (this.props.className || "")}
                style={this.color}
                onMouseEnter={this.onMouseEnter}
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
                title={this.props.title}
            >
                {this.props.children}
            </div>
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