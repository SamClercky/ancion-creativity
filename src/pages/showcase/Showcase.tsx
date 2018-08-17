import * as React from "react"

import TemplatePage from "../common/TemplatePage"
import ShowcaseOrginizer from "./ShowcaseOrginizer";

export default class Showcase extends React.Component {
    public render() {
        return (
            <TemplatePage
                title="Showcase"
                sectionId="showcase"
                description="Dit is de showcase van al mijn juwelen, glaskunst en andere creative grillen :-)"
            >
                <ShowcaseOrginizer />
            </TemplatePage>
        )
    }
}