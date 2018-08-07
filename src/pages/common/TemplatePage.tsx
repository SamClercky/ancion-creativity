import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
//import ReactRouter from "react-router"

import "./TemplatePage.css"

export interface ITemplatePageProps extends RouteComponentProps<{}> {
    title: string,
    sectionId: string,
    className?: string
}

class TemplatePage extends React.Component<ITemplatePageProps, {}> {

    public constructor(props: ITemplatePageProps) {
        super(props)

        // bind eventhandlers
        this.onGoBack = this.onGoBack.bind(this)
    }

    private onGoBack(evt: React.MouseEvent) {
        evt.preventDefault()
        if (this.props.history.length > 1) {
            if (this.props.title == "404") {
                this.props.history.push("/")
            } else {
                this.props.history.goBack();
            }
        }
    }

    public render() {
        //let history = ReactRouter.hystory;
        return (
            <section className={this.props.className || ""} id={this.props.sectionId}>
                <div className="TemplateWrapper">
                    <header>
                        <a href="#" className="backArrow" onClick={this.onGoBack} rel="prev" />
                        <h1>{this.props.title}</h1>
                        <Link to="/" className="logo" rel="next">
                            <img src="http://via.placeholder.com/350x150" alt="Ancion creativity logo" />
                        </Link>
                    </header>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <footer>
                        Hier komt de footer
                    </footer>
                </div>
            </section>
        )
    }
}

export default withRouter(TemplatePage)