import { Component } from "react";
import "./app-filter.css";


class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    onChangeFilter = (e) => {
        const filter = e.currentTarget.dataset.filter;
        this.setState(({ filter }) => ({
            filter
        }))

        this.props.onUpdateFilter(filter);
    };

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-light"
                        data-filter="all"
                        onClick={this.onChangeFilter}>
                    Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        data-filter="rise"
                        onClick={this.onChangeFilter}>
                    На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light"
                        data-filter="salary"
                        onClick={this.onChangeFilter}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;