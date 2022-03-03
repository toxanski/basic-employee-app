import { Component } from "react";
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    onChangeTerm = (e) => {
        const term = e.target.value;
        this.setState({
            searchTerm: term
        })

        this.props.onUpdateTerm(term);
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value={this.state.searchTerm}
                   onChange={this.onChangeTerm}/>
        )
    }

}

export default SearchPanel;