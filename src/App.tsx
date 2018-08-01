import * as React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./index.css"

import HomePage from "./pages/home/Home"
import Showcase from "./pages/showcase/Showcase"
import Aboutme from "./pages/aboutme/Aboutme"

export default class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="rootWrapper">
                    <Route
                        exact={true}
                        path="/"
                        component={HomePage}
                    />
                    <Route
                        exact={true}
                        path="/showcase"
                        component={Showcase}
                    />
                    <Route
                        exact={true}
                        path="/aboutme"
                        component={Aboutme}
                    />
                </div>
            </BrowserRouter>
        )
    }
}