import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css"

import HomePage from "./pages/home/Home"
import Showcase from "./pages/showcase/Showcase"
import Aboutme from "./pages/aboutme/Aboutme"
import DetailPage from "./pages/detail/DetailPage";
import ShowcaseData, { IData } from "./pages/common/ShowcaseData";
import LostAndFound from "./pages/404/404";

export default class App extends React.Component {
    public render() {
        this.getTestData() // initiate testData (TODO get data from elsewhere)
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
                        <Route exact={true} path="/detail/:id" component={DetailPage} />
                        <Route component={LostAndFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
    private getTestData() {
        return new ShowcaseData([
            { url: "http://via.placeholder.com/350x150", name: "f1", description: "", keywords: ["mooi", "top"], id: 0 },
            { url: "http://via.placeholder.com/150x300", name: "f2", description: "", keywords: ["mooi", "super"], id: 1 },
            { url: "http://via.placeholder.com/400x200", name: "f3", description: "", keywords: ["lekker", "top"], id: 2 },
            { url: "http://via.placeholder.com/100x300", name: "f4", description: "", keywords: ["mooi", "top"], id: 3 },
            { url: "http://via.placeholder.com/300x100", name: "f5", description: "", keywords: ["lelijk", "mooi"], id: 4 },
            { url: "http://via.placeholder.com/350x150", name: "f6", description: "", keywords: ["misschien", "ikweethetniet"], id: 5 },
            { url: "http://via.placeholder.com/200x400", name: "f7", description: "", keywords: ["ikweethetniet", "top"], id: 6 }
        ] as IData[])
    }
}