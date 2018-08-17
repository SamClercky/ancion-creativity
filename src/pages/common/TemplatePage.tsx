import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet"

import "./TemplatePage.css"
import BackLinks from "./Backlinks";

export interface ITemplatePageProps extends RouteComponentProps<{}> {
    title: string,
    sectionId: string,
    className?: string,
    description?: string,
    canonical?: string
    // other SEO
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
                <Helmet>
                    <title>{this.props.title}</title>
                    <meta name="eg:description" content={this.props.description} />
                    <link rel="canonical" href={(this.props.canonical != undefined) ? this.props.canonical : window.location.href} />
                </Helmet>

                <div className="TemplateWrapper">
                    <header>
                        <span className="TemplateHeaderWrapper">
                            <a className="backArrow" href="#" rel="prev" onClick={this.onGoBack}>
                                <span className="backArrow" />
                            </a>
                            <a className="TemplateTitle" href="#" rel="prev" onClick={this.onGoBack}>
                                <h1>{this.props.title}</h1>
                            </a>
                            <BackLinks shortUrl={this.props.location.pathname} />
                        </span>
                        <div className="TemplateLogo">
                            <Link to="/" rel="next">
                                <img src="http://via.placeholder.com/350x150" alt="Ancion creativity logo" />
                            </Link>
                        </div>

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