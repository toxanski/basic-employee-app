import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John S.', salary: 990, increase: false, id: 1},
                { name: 'Alfred T.', salary: 630, increase: true, id: 2},
                { name: 'James K.', salary: 1710, increase: false, id: 3},
            ],
        }
    }

    deleteEmployee = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(employee => employee.id !== id)
        }));
    };

    addNewEmployee = (name, salary) => {
        const newEmployee = { name, salary, increase: false, id: nextId() }

        this.setState(({ data }) => ({
            data: [ ...data, newEmployee ]
        }));
    };

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    deleteEmployee={this.deleteEmployee}/>

                <EmployeesAddForm addNewEmployee={this.addNewEmployee}/>
            </div>
        );
    }
}

export default App;
