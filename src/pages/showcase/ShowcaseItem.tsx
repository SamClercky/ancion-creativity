import * as React from "react"
import * as ReactDOM from "react-dom"
import { IData } from "../common/ShowcaseData";
import LazyLoad from "react-lazyload";

import "./ShowcaseItem.css"

export interface IShowcaseItemProps {
    className?: string,
    data: IData
}

interface IShowcaseItemState {
    currImagePos: Point,
    isHovered: boolean,
    middelPoint: Point
}

interface Point {
    x: number,
    y: number
}

export default class ShowcaseItem extends React.Component<IShowcaseItemProps, IShowcaseItemState> {

    public constructor(props: IShowcaseItemProps) {
        super(props)

        this.state = {
            currImagePos: { x: 0, y: 0 },
            middelPoint: { x: 0, y: 0 },
            isHovered: false
        }

        // bind all eventListeners
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onHover = this.onHover.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)
    }

    public componentDidMount() {
        let middle = this.getMiddel(ReactDOM.findDOMNode(this) as HTMLElement)
        this.setState({
            middelPoint: middle
        })
    }

    private onMouseMove(evt: React.MouseEvent) {
        if (this.state.isHovered) {
            let currMousePos: Point = { x: evt.clientX, y: evt.clientY }

            let diffPoint = this.getOffset(currMousePos, this.state.middelPoint)

            // set new x and y
            this.setState({
                currImagePos: diffPoint
            })
        }
    }

    private onHover(evt: React.MouseEvent) {
        this.setState({
            middelPoint: this.getMiddel(evt.target as HTMLElement),
            isHovered: true
        })
    }

    private onHoverOut(evt: React.MouseEvent) {
        this.setState({ // set back to initial
            isHovered: false
        })
    }

    public render() {
        let styleClass = (this.state.isHovered) ? "Hovered" : "NotHovered"
        let stylesTransform = this.getImgStyle()

        return (
            <div
                className={"ShowcaseItemWrapper " + (this.props.className || "")}
                onMouseEnter={this.onHover}
                onMouseLeave={this.onHoverOut}
                onMouseMove={this.onMouseMove}
            >
                <LazyLoad height="100%" once={true} overflow={true}>
                    <img
                        src={this.props.data.url}
                        alt={this.props.data.name}
                        className={styleClass}
                        style={stylesTransform}
                    />
                </LazyLoad>
            </div>
        )
    }

    private getImgStyle(): React.CSSProperties {
        if (this.state.isHovered == true) {
            return {
                transform: `translate(${this.state.currImagePos.x/10-10}px, ${this.state.currImagePos.y/10-10}px)`
            }
        } else {
            return {
                transform: "none"
            }
        }
    }

    private getMiddel(elem: HTMLElement): Point {
        let bounderies = elem.getBoundingClientRect()
        return {
            x: bounderies.left + (bounderies.width / 2),
            y: bounderies.top + (bounderies.height / 2)
        }
    }

    private getOffset(p1: Point, p2: Point): Point {
        return {
            x: p2.x - p1.x,
            y: p2.y - p1.y
        }
    }
}