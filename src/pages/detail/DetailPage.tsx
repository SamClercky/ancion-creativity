import * as React from "react"
import ShowcaseData, { IData } from "../common/ShowcaseData";
import { RouteComponentProps } from "react-router";
import TemplatePage from "../common/TemplatePage";

import "./DetailPage.css"

interface IDetailPageRouterProps {
    name: string
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

        let name = this.props.match.params.name
        let potentialShowcaseData = ShowcaseData.getByName(name)
        let imageData: IData = ShowcaseData.getEmptyDummyData()

        if (
            potentialShowcaseData.length > 0
        ) {
            imageData = potentialShowcaseData[0]
        } else {
            this.props.history.push("/404") // redirect if there is no file found
        }

        this.state = {
            data: imageData
        }

        // bind all eventListeners
    }

    public render() {
        return (
            <TemplatePage
                title={this.state.data.name}
                sectionId={`detail${this.state.data.name}`}
                description={this.state.data.description}
            >
                <div className={"DetailPageWrapper " + (this.props.className || "")}>
                    <div className="DetailImageWrapper">
                        <img src={this.state.data.url} alt={this.state.data.name} />
                    </div>
                    <div className="DetailHeader">
                        <h2>{this.state.data.name}</h2>
                    </div>
                    <div className="DetailDescription">
                        <p>{this.state.data.description}</p>
                    </div>
                    <div className="DetailKeywords">
                        <p>Tags: {this.state.data.keywords.join(", ")}</p>
                    </div>
                    <div className="DetailSocial">
                        Social media function coming sone...
                    </div>
                </div>
            </TemplatePage>
        )
    }
}