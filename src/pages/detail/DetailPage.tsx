import * as React from "react"
import ShowcaseData, { IData } from "../common/ShowcaseData";
import { RouteComponentProps } from "react-router";
import TemplatePage from "../common/TemplatePage";

import "./DetailPage.css"

interface IDetailPageRouterProps {
    id: string
}

export interface IDetailPageProps extends RouteComponentProps<IDetailPageRouterProps> {
    className?: string
}

interface IDetailPageState {
    data: IData
}

export default class DetailPage extends React.Component<IDetailPageProps, IDetailPageState> {
    public constructor(props: IDetailPageProps) {
        super(props)

        let id = 0
        let parsed = parseInt(this.props.match.params.id)
        
        if (
            parsed != NaN && 
            parsed < ShowcaseData.getLength() &&
            parsed >= 0
        ) {
            id = parsed
        } 

        this.state = {
            data: ShowcaseData.getById(id)
        }

        // bind all eventListeners
    }

    public render() {
        return (
            <TemplatePage title={this.state.data.name} sectionId={`detail${this.state.data.id}`}>
                <div className={"DetailPageWrapper " + (this.props.className || "")}>
                    <div className="DetailImageWrapper">
                        <img src={this.state.data.url} alt={this.state.data.name} />
                    </div>
                    <div className="DetailDescription">
                        <h2>{this.state.data.name}</h2>
                        <p>{this.state.data.description}</p>
                    </div>
                    <div className="DetailKeywords">
                        Tags: {this.state.data.keywords.join(", ")}
                    </div>
                    <div className="DetailSocial">
                        Social media function coming sone...
                </div>
                </div>
            </TemplatePage>
        )
    }
}