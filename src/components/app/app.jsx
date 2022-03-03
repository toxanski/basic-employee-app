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
                { name: 'John S.', salary: 990, increase: false, rise: true, id: 1},
                { name: 'Alfred T.', salary: 630, increase: true, rise: false, id: 2},
                { name: 'James K.', salary: 1710, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all',
        }
    }

    deleteEmployee = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(employee => employee.id !== id)
        }));
    };

    addNewEmployee = (name, salary) => {
        const newEmployee = { name, salary, increase: false, rise: false, id: nextId() }

        this.setState(({ data }) => ({
            data: [ ...data, newEmployee ]
        }));
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(employee => {
                if (employee.id === id) {
                    return { ...employee, [prop]: !employee[prop] }
                }
                return employee
            })
        }));
    };

    countPremiumEmployees = () => this.state.data.filter(item => item.increase).length;

    searchEmployees = (items, term) => {
        if (!term.length) return items;

        return items.filter(item => item.name.indexOf(term) > -1);
    };

    onUpdateTerm = (term) => {
        this.setState({
            term
        })
    };

    changeFilter = (items, filterName) => {
        switch (filterName) {
            case 'all' || '':
                return items;
            case 'rise':
                return items.filter(item => item.rise)
            case 'salary':
                return items.filter(item => item.salary >= 1000);
        }
    };

    onUpdateFilter = (filterName) => {
        this.setState(({ filter }) => ({
            filter: filterName
        }));
    };


    render() {
        const { data, term, filter } = this.state;
        const visibleEmployees = term.length
            ? this.searchEmployees(data, term)
            : this.changeFilter(data, filter)

        console.log(this.changeFilter(data, filter))
        return (
            <div className="app">
                <AppInfo allEmployees={this.state.data.length} countPremiumEmployees={this.countPremiumEmployees}/>

                <div className="search-panel">
                    <SearchPanel onUpdateTerm={this.onUpdateTerm}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter} />
                </div>

                <EmployeesList
                    data={visibleEmployees}
                    deleteEmployee={this.deleteEmployee}
                    onToggleProp={this.onToggleProp} />

                <EmployeesAddForm addNewEmployee={this.addNewEmployee}/>
            </div>
        );
    }
}

export default App;
