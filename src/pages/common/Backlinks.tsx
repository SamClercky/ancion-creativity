import * as React from "react"
import { asSequence } from "sequency";

import "./Backlinks.css"
import { Link } from "react-router-dom";

export interface IBackLinksProps {
    className?: string,
    shortUrl: string
}

export default class BackLinks extends React.Component<IBackLinksProps, {}> {
    public render() {
        return (
                <ul className={"BackLinksWrapper " + (this.props.className || "")} key="BackLinkList">{this.getLi()}</ul>
        )
    }

    private getLi(): React.ReactNode {
        let strippedUrl = asSequence(this.props.shortUrl.split("/"))
            .filter(item => item != "" && item != " ")
            .toArray()
        let list = ["Home"].concat(strippedUrl)

        return asSequence(list)
            .map(item => item.replace("-", " "))
            .map(item => {
                return (
                    <li key={`BackLinks${item}`}>
                        <Link rel="next" title={`Ga naar de ${item}-pagina`} to={"/" + strippedUrl.slice(0, list.indexOf(item)).join("/")}>{item}</Link>
                    </li>
                )
            })
            .toArray()
    }
}