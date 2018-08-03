import * as React from "react"
import ShowcaseData, { IData } from "./ShowcaseData"
import FilterSearchField from "./FilterSearchField";
import { asSequence } from "sequency";
import FilterItem from "./FilterItem";
import FilterBlocks from "./FilterBlocks";

export interface IFilterEngineProps {
    className?: string,
    items: ShowcaseData
}

interface IFilterEngineState {
    selectedKeywords: string[],
    allKeywords: string[],
}

export default class FilterEngine extends React.Component<IFilterEngineProps, IFilterEngineState> {

    public constructor(props: IFilterEngineProps) {
        super(props)

        this.state = {
            selectedKeywords: [],
            allKeywords: ["tof", "mooi", "ikweethetniet", "misschien"]
        }

        this.onNewWord = this.onNewWord.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.onNewSelectedWord = this.onNewSelectedWord.bind(this)
        this.onSelectedWordDeleted = this.onSelectedWordDeleted.bind(this)
    }

    private onNewWord(word: string) {
        let newState = this.state
        newState.selectedKeywords.push(word)
        newState.allKeywords.push(word)

        this.setState(newState)
    }

    private clearAll() {
        this.setState({
            selectedKeywords: []
        })
    }

    private onNewSelectedWord(word: string) {
        let tempState = this.state.selectedKeywords
        tempState.push(word)

        this.setState({
            selectedKeywords: tempState
        })
    }

    private onSelectedWordDeleted(word: string) {
        let tempState = this.state.selectedKeywords
        tempState = asSequence(tempState)
            .filter(item => item != word)
            .toArray()
        
        this.setState({
            selectedKeywords: tempState
        })
    }

    public render() {
        return (
            <div className={"FilterEngineWrapper " + (this.props.className || "")}>
                <div className="FilterHeader">
                    <FilterBlocks
                        selectedKeywords={this.state.selectedKeywords}
                        allKeywords={this.state.allKeywords}
                        onNewSelectedWord={this.onNewSelectedWord}
                        onSelectedwordDeleted={this.onSelectedWordDeleted}
                    />
                    <FilterSearchField onNewWord={this.onNewWord} />
                </div>
                <div className="FilterContent">
                    {this.getCurrentItems()}
                </div>
            </div>
        )
    }

    private getCurrentItems() {
        let result;
        if (this.state.selectedKeywords.length != 0) {
            let newSequence: IData[] = this.props.items.getDataByKeywords(...this.state.selectedKeywords)
            result = asSequence(newSequence)
        } else {
            result = asSequence(this.props.items.getData())
        }

        return result
            .map(item => <FilterItem data={item} key={item.id} />)
            .toArray()
    }
}