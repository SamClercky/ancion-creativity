import * as React from "react";
import { Link } from "react-router-dom";
//import ReactRouter from "react-router"

import "./TemplatePage.css"

export interface ITemplatePageProps {
    title: string,
    sectionId: string,
    className?: string
}

export default class TemplatePage extends React.Component<ITemplatePageProps, {}> {

    public constructor(props: ITemplatePageProps) {
        super(props)

        // bind eventhandlers
        this.onGoBack = this.onGoBack.bind(this)
    }

    private onGoBack() {
        if (history.length > 1) {
            history.back();
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