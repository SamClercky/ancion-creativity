import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css"

import HomePage from "./pages/home/Home"
import Showcase from "./pages/showcase/Showcase"
import Aboutme from "./pages/aboutme/Aboutme"
import DetailPage from "./pages/detail/DetailPage";
import LostAndFound from "./pages/404/404";

export default class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="rootWrapper">
                    <Switch>
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
                        <Route exact={true} path="/showcase/:name" component={DetailPage} />
                        <Route component={LostAndFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}