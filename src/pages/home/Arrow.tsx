import * as React from "react"

import "./Arrow.css"

export enum ArrowDirection {
    right = "angle-right",
    left = "angle-left"
}

export interface IArrowProps {
    direction: ArrowDirection,
    className?: string,
    label: string,
    onClick?: (direction: ArrowDirection) => void
}

interface IArrowState {
    isHovered: boolean
}

export default class Arrow extends React.Component<IArrowProps, IArrowState> {
    public constructor(props: IArrowProps) {
        super(props)

        this.state = {
            isHovered: false
        }

        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
    }

    private onMouseOver() {
        this.setState({
            isHovered: true
        })
    }

    private onMouseOut() {
        this.setState({
            isHovered: false
        })
    }

    public render() {
        let mirrorClass = (this.props.direction == ArrowDirection.left)? "ArrowMirror" : "";

        // taken example of https://codepen.io/shawnlooi/pen/eeXmrQ
        return (
            <div
                className={"ArrowWrapper " + mirrorClass + " " + this.props.className}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
            >
                <div className="Arrow -left" />
                <p className={mirrorClass}>{this.props.label}</p>
                <div className="Arrow -right" />
            </div>
        )
    }
}