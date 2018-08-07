import * as React from "react"
import TemplatePage from "../common/TemplatePage";
import { Link } from "react-router-dom";

export interface ILostAndFoundProps {
    className?: string
}

export default class LostAndFound extends React.Component<ILostAndFoundProps, {}> {
    public render() {
        return (
            <TemplatePage title="404" sectionId="LostAndFound">
                <div className={"LostAndFoundWrapper " + (this.props.className || "")}>
                    <p>Oeps, de url kon niet meer worden teruggevonden.</p>
                    <p>Klik op <Link to="/">deze link</Link> om (terug) naar het hoofdscherm te gaan</p>
                </div>
            </TemplatePage>
        )
    }
}