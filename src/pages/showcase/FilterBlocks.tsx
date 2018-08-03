import * as React from "react"
import { asSequence } from "sequency";
import FilterBlocksItem from "./FilterBlocksItem";

export interface IFilterBlocksProps {
    className?: string
    selectedKeywords: string[],
    allKeywords: string[],
    onNewSelectedWord?: (word: string) => void,
    onSelectedwordDeleted?: (word: string) => void
}

export default class FilterBlocks extends React.Component<IFilterBlocksProps, {}> {

    public constructor(props: IFilterBlocksProps) {
        super(props)

        // bind the eventlisteners
        this.onItemClicked = this.onItemClicked.bind(this)
    }

    private onItemClicked(word: string) {
        if (this.props.selectedKeywords.indexOf(word) == -1) { // word is not selected => select in parent
            if (this.props.onNewSelectedWord != undefined) { // always check before use
                this.props.onNewSelectedWord(word)
            }
        } else { // word is selected => deselect in parent
            if (this.props.onSelectedwordDeleted != undefined) { // always check before use
                this.props.onSelectedwordDeleted(word)
            }
        }
    }

    public render() {
        return (
            <div className={"FilterBlocksWrapper " + (this.props.className || "")}>
                <h4>Filter op:</h4>
                <div className="FilterBlocksItemNotSelected">
                    {this.getFilterBlockItemsNotSelected()}
                </div>
                <div className="FilterBlocksItemSelected">
                    {this.getFilterBlockItemsSelected()}
                </div>
            </div>
        )
    }

    private getFilterBlockItemsNotSelected() {
        const selectedKeywords = this.props.selectedKeywords.join(" ")

        return asSequence(this.props.allKeywords)
            .filter(item => selectedKeywords.indexOf(item) == -1)
            .map(item => <FilterBlocksItem label={item} selected={false} key={item} onClick={this.onItemClicked} />)
            .toArray()
    }
    private getFilterBlockItemsSelected() {
        return asSequence(this.props.selectedKeywords)
            .map(item => <FilterBlocksItem label={item} selected={true} key={item} onClick={this.onItemClicked} />)
            .toArray()
    }
}