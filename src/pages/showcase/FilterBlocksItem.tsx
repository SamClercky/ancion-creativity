import * as React from "react"

export interface IFilterBlocksItemProps {
    className?: string,
    label: string,
    selected: boolean,
    onClick?: (label: string) => void
}

export default class FilterBlocksItem extends React.Component<IFilterBlocksItemProps, {}> {

    public constructor(props: IFilterBlocksItemProps) {
        super(props)
    
        // this.state = {}
    
        // bind all eventListeners
        this.onClick = this.onClick.bind(this)
    }

    private onClick(evt: React.MouseEvent) {
        if (this.props.onClick != undefined) {
            this.props.onClick(this.props.label)
        }
    }

    public render() {
        const selectedStyle = (this.props.selected)? "FilterBlockItemSelected " : ""

        return (
            <div className={"FilterBlocksItemWrapper " + {selectedStyle} + (this.props.className || "")} onClick={this.onClick}>
                <p className="FilterBlockItemLabel">
                    {this.props.label}
                </p>
            </div>
        )
    }
}