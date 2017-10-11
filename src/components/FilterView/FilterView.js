import React from 'react';
import PropTypes from 'prop-types';
import './FilterView.css';


class FilterView extends React.Component {
    constructor() {
        super();
    };

    static propTypes = {};

    static defaultProps = {};

    state = {};

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    applyAllFilters = () => {
        const descriptionField = document.querySelector('#description');
        const featureField = document.querySelector('#feature');
        const modifiedDateField = document.querySelector('#modified-date');
        const priorityField = document.querySelector('#priority');
        const statusField = document.querySelector('#status');
        const submittedByField = document.querySelector('#submitted-by');

        const filterSet = {
            "description": descriptionField.value,
            "feature": featureField[featureField.selectedIndex].value,
            "modifiedDate": modifiedDateField.value,
            "priority": parseInt(priorityField[priorityField.selectedIndex].value, 10),
            "status": statusField[statusField.selectedIndex].value,
            "submittedBy": submittedByField[submittedByField.selectedIndex].value
        };

        this.props.filterData(filterSet);
    };

    clearAllFilters = () => {
        const descriptionField = document.querySelector('#description');
        const featureField = document.querySelector('#feature');
        const modifiedDateField = document.querySelector('#modified-date');
        const priorityField = document.querySelector('#priority');
        const statusField = document.querySelector('#status');
        const submittedByField = document.querySelector('#submitted-by');

        descriptionField.value = '';
        featureField.selectedIndex = 0;
        modifiedDateField.value = '';
        priorityField.selectedIndex = 0;
        statusField.selectedIndex = 0;
        submittedByField.selectedIndex = 0;

        this.props.resetData();
    };

    render() {
        return (
            <div className="filter-panel">
                <h3>Filter by:</h3>
                <ul className="filter-titles">
                    <li className="column-one">
                        Description
                    </li>
                    <li className="column-two">
                        Features
                    </li>
                    <li className="column-three">
                        Last Modified
                    </li>
                    <li className="column-four">
                        Priority
                    </li>
                    <li className="column-five">
                        Submittor
                    </li>
                    <li className="column-six">
                        Status
                    </li>
                </ul>
                <ul className="filter-fields">
                    <li className="column-one">
                        <input type="text" name="description" id="description"/>
                    </li>
                    <li className="column-two">
                        <select name="feature" id="feature">
                            <option value="">Select</option>
                            <option value="Gallery">Gallery</option>
                            <option value="Notes">Notes</option>
                            <option value="Search">Search</option>
                            <option value="User_Settings">User Settings</option>
                        </select>
                    </li>
                    <li className="column-three">
                        <input type="date" name="modifiedDate" id="modified-date"/>
                    </li>
                    <li className="column-four">
                        <select name="priority" id="priority">
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </li>
                    <li className="column-five">
                        <select name="submitted by" id="submitted-by">
                            <option value="">Select</option>
                            <option value="Allison Norris">Allison Norris</option>
                            <option value="Christie Christy">Christie Christy</option>
                            <option value="Jason Kaplan">Jason Kaplan</option>
                            <option value="Sal Governale">Sal Governale</option>
                        </select>
                    </li>
                    <li className="column-six">
                        <select name="status" id="status">
                            <option value="">Select</option>
                            <option value="NOT_STARTED">Not Started</option>
                            <option value="IN_PROGRES">In Progress</option>
                            <option value="COMPLETE">Complete</option>
                        </select>
                    </li>
                </ul>
                <div className="filter-buttons">
                    <button id="apply-filters" onClick={() => { this.applyAllFilters() }}>Apply Selected Filters</button>
                    <button id="clear-filters" onClick={() => { this.clearAllFilters() }}>Clear All Filters</button>
                </div>
            </div>
        );
    }
}

export default FilterView;