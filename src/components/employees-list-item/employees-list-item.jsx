import './employees-list-item.css';
import { Component } from "react";

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            favorite: false
        };
        this.addFavorite = this.addFavorite.bind(this);
    }

    changeIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }));
    };

    addFavorite() {
        this.setState(({ favorite }) => ({
            favorite: !favorite
        }));
    }

    render() {
        const { name, salary, onDelete } = this.props;
        const { increase, favorite } = this.state;

        const listClassNames = `list-group-item d-flex justify-content-between 
                                ${increase ? 'increase' : ''}
                                ${favorite ? 'like' : ''}`;

        return (
            <li className={listClassNames} >
                <span className="list-group-item-label" onClick={this.addFavorite}>{ name }</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={this.changeIncrease}
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;