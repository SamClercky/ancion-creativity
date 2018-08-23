import * as React from "react"
import { Link } from 'react-router-dom'

import "./Home.css"

import Logo from "./Logo"
import Arrow, { ArrowDirection } from "./Arrow"
import { Helmet } from "react-helmet";

export interface IHomePageProps {
    className?: string
}

export default class HomePage extends React.Component<IHomePageProps, {}> {
    public render() {
        return (
            <section id="Home" className={this.props.className}>
                <Helmet>
                    <link rel="canonical" href="/" />
                </Helmet>
                <div className="HomePageCenterSection">
                    <Logo />
                </div>
                <div className="HomeAboutmeLink">
                    <Link title="Ga naar de over mij-pagina" to="/aboutme">
                        <Arrow direction={ArrowDirection.left} className="HomePageArrowDown" label="Over mij" />
                    </Link>
                </div>
                <div className="HomeShowcaseLink">
                    <Link title="Ga naar de showcase-pagina" to="/showcase">
                        <Arrow direction={ArrowDirection.right} className="HomePageArrowDown" label="Showcase" />
                    </Link>
                </div>
            </section>
        )
    }
}