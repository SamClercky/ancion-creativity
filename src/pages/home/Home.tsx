import * as React from "react"
import { Link } from 'react-router-dom'

import "./Home.css"

import Logo from "./Logo"
import Arrow, { ArrowDirection } from "./Arrow"

export interface IHomePageProps {
    className?: string
}

export default class HomePage extends React.Component<IHomePageProps, {}> {
    public render() {
        return (
            <section id="Home" className={this.props.className}>
                <div className="HomePageCenterSection">
                    <Logo />
                </div>
                <div className="HomePageBottomSection">
                    <Link to="/aboutme">
                        <Arrow direction={ArrowDirection.left} className="HomePageArrowDown" label="About me" />
                    </Link>
                    
                    <Link to="/showcase">
                        <Arrow direction={ArrowDirection.right} className="HomePageArrowDown" label="Showcase" />
                    </Link>
                </div>
            </section>
        )
    }
}