import { Component } from "react";
import "./app-filter.css";


class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsData: [
                { name: 'all', label: 'Все сотрудники' },
                { name: 'rise', label: 'На повышение' },
                { name: 'salary', label: 'З/П больше 1000$' },
            ],
            filter: ''
        }
    }

    onChangeFilter = (e) => {
        const filter = e.target.dataset.filter;
        console.log(e.target)
        this.setState(({ filter }) => ({
            filter
        }))

        this.props.onUpdateFilter(filter);
    };

    render() {
        const button = this.state.buttonsData.map(btn => {
            const active = this.props.filter === btn.name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';

            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        data-filter={btn.name}
                        key={btn.name}
                        onClick={this.onChangeFilter}>
                    {btn.label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {button}
            </div>
        )
    }
}

export default AppFilter;