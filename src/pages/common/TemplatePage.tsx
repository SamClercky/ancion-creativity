import * as React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Helmet } from "react-helmet"

import "./TemplatePage.css"
import BackLinks from "./Backlinks";

import Logo from "../../logo.svg"

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
                            <a title="Ga terug naar de vorige pagina" className="backArrow" href="#" rel="prev" onClick={this.onGoBack}>
                                <span className="backArrow" />
                            </a>
                            <a title="Ga terug naar de vorige pagina" className="TemplateTitle" href="#" rel="prev" onClick={this.onGoBack}>
                                <span>Terug</span>
                            </a>
                            <BackLinks shortUrl={this.props.location.pathname} />
                        </span>
                        <h1>{this.props.title}</h1>
                        <div className="TemplateLogo">
                            <Link title="Ga naar de Home-pagina" to="/" rel="next">
                                <img src={Logo} alt="Ancion creativity logo" />
                            </Link>
                        </div>

                    </header>
                    <div className="content">
                        <main>{this.props.children}</main>
                    </div>
                    <footer>
                        <p>Met <span className="heart">&#x2661;</span> gemaakt door <a target="_black" href="https://github.com/SamClercky">@SamClercky</a></p>
                    </footer>
                </div>
            </section>
        )
    }
}

export default withRouter(TemplatePage)