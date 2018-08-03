import * as React from "react"

export interface IFilterSearchFieldProps {
    className?: string,
    onNewWord?: (word: string) => void,
}

interface IFilterSearchFieldState {
    currentWord: string
}

export default class FilterSearchField extends React.Component<IFilterSearchFieldProps, IFilterSearchFieldState> {
    public constructor(props: IFilterSearchFieldProps) {
        super(props)

        this.state = {
            currentWord: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
    }

    private onChange(evt: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            currentWord: evt.target.value.trim()
        })
    }

    private onKeyDown(evt: React.KeyboardEvent) {
        if ((evt.which || evt.keyCode) == 13) { // check if ENTER is pressed
            if (this.props.onNewWord != undefined) {
                this.props.onNewWord(this.state.currentWord)
            }
            this.clearAll()
        }
    }

    private clearAll() {
        this.setState({
            currentWord: ""
        })
    }

    public render() {
        return (
            <div className={"IFilterSearchFieldWrapper " + (this.props.className || "")}>
                <input
                    type="search"
                    autoComplete="autocomplete"
                    id="SearchField"
                    value={this.state.currentWord}
                    placeholder="Tap enter to search"
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                /> 
            </div>
        )
    }
}