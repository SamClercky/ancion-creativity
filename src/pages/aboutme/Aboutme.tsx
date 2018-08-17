import * as React from "react"

import TemplatePage from "../common/TemplatePage"

export default class Aboutme extends React.Component {
    public render() {
        return (
            <TemplatePage
                title="Over mij"
                sectionId="aboutme"
                description="De pagina waar ik over mezelf vertel in geuren en kleuren"
            >
                <h2>Over mij</h2>
            </TemplatePage>
        )
    }
}