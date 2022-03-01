import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, deleteEmployee }) => {
    const elements = data.map(item => {
        const { id , ...otherProps } = item;

        return <EmployeesListItem
            key={ id } { ...otherProps }
            onDelete={() => deleteEmployee(id)}/>;
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;