import * as React from "react"
import * as ReactDOM from "react-dom"
import { IData } from "../common/ShowcaseData";
import LazyLoad from "react-lazyload";

import "./ShowcaseItem.css"
import { Link } from "react-router-dom";
import ShowcaseTile from "./ShowcaseTile";

export interface IShowcaseItemProps {
    className?: string,
    data: IData
}

interface IShowcaseItemState {
    currImagePos: Point,
    isHovered: boolean,
    middelPoint: Point,
    width: number,
    height: number
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
            isHovered: false,
            width: 0,
            height: 0
        }

        // bind all eventListeners
        this.onMouseMove = this.onMouseMove.bind(this)
        this.onHover = this.onHover.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)
    }

    public componentDidMount() {
        let bounderies = this.getDOMNodeBounderies()

        let middle = this.getMiddel({x: bounderies.left, y: bounderies.top} as Point, bounderies.width, bounderies.height)
        this.setState({
            middelPoint: middle,
            width: bounderies.width,
            height: bounderies.height
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
        let bounderies = this.getDOMNodeBounderies()
        let middle = this.getMiddel({x: bounderies.left, y: bounderies.top} as Point, bounderies.width, bounderies.height)
        this.setState({
            middelPoint: middle,
            isHovered: true,
            width: bounderies.width,
            height: bounderies.height
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
            <ShowcaseTile
                className={"ShowcaseItemWrapper " + (this.props.className || "")}
                onMouseEnter={this.onHover}
                onMouseLeave={this.onHoverOut}
                onMouseMove={this.onMouseMove}
            >
                <Link to={`showcase/${this.props.data.name.replace(" ", "-")}`}>
                    <LazyLoad height="100%" once={true} overflow={true}>
                        <img
                            src={this.props.data.url}
                            alt={this.props.data.name}
                            className={styleClass}
                            style={stylesTransform}
                        />
                    </LazyLoad>
                </Link>
            </ShowcaseTile>
        )
    }

    private getImgStyle(): React.CSSProperties {
        if (this.state.isHovered == true) {
            return {
                transform: `translate(${
                    this.mapToPerc(this.state.currImagePos.x,this.state.width)/50 - 15}%, ${
                    this.mapToPerc(this.state.currImagePos.y, this.state.height)/50 - 20}%)`
            }
        } else {
            return {
                transform: "none"
            }
        }
    }

    private getMiddel(startPoint: Point, width: number, height: number): Point {
        return {
            x: startPoint.x + (width / 2),
            y: startPoint.y + (height / 2)
        }
    }

    private getOffset(p1: Point, p2: Point): Point {
        return {
            x: p2.x - p1.x,
            y: p2.y - p1.y
        }
    }
    private mapToPerc(pixel: number, max: number): number {
        return (pixel / max) * 100
    }

    private getDOMNodeBounderies() { return (ReactDOM.findDOMNode(this) as HTMLElement).getBoundingClientRect()}
}