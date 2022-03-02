import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, deleteEmployee, onToggleProp }) => {
    const elements = data.map(item => {
        const { id , ...otherProps } = item;

        return <EmployeesListItem
            { ...otherProps }
            key={ id }
            onDelete={() => deleteEmployee(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.dataset.toggle)}/>;
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;