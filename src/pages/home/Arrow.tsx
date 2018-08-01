import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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

        const toolTip = this.state.isHovered? <p className="ArrowTooltip">{this.props.label}</p> : null

        // taken example of https://codepen.io/Hoebink/pen/YwpxMW
        return (
            <div
                className={"ArrowWrapper " + this.props.className}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
            >
                <div className="Arrow1">
                    <FontAwesomeIcon className="ArrowFaIcon" size="lg" icon={this.props.direction as IconProp} />
                </div>
                {toolTip}
            </div>
        )
    }
}