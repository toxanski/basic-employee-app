import './employees-list-item.css';

function EmployeesListItem(props) {
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    const listClassNames = `list-group-item d-flex justify-content-between 
                            ${increase ? 'increase' : ''}
                            ${rise ? 'like' : ''}`;

    return (
        <li className={listClassNames} >
            <span
                className="list-group-item-label"
                data-toggle="rise"
                onClick={onToggleProp}>
                { name }
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        data-toggle="increase"
                        onClick={onToggleProp}
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

export default EmployeesListItem;