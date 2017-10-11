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
        this.descriptionField = document.querySelector('#description');
        this.featureField = document.querySelector('#feature');
        this.modifiedDateField = document.querySelector('#modified-date');
        this.priorityField = document.querySelector('#priority');
        this.statusField = document.querySelector('#status');
        this.submittedByField = document.querySelector('#submitted-by');
    }

    componentWillUnmount() {
    }

    applyAllFilters = () => {

        const filterSet = {
            "description": this.descriptionField.value,
            "feature": this.featureField[this.featureField.selectedIndex].value,
            "modifiedDate": this.modifiedDateField.value,
            "priority": parseInt(this.priorityField[this.priorityField.selectedIndex].value, 10),
            "status": this.statusField[this.statusField.selectedIndex].value,
            "submittedBy": this.submittedByField[this.submittedByField.selectedIndex].value
        };

        this.props.updateFilters(filterSet);
        this.props.filterData();
    };

    clearAllFilters = () => {
        this.descriptionField.value = '';
        this.featureField.selectedIndex = 0;
        this.modifiedDateField.value = '';
        this.priorityField.selectedIndex = 0;
        this.statusField.selectedIndex = 0;
        this.submittedByField.selectedIndex = 0;

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
                        Submitted By
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
                            <option value="IN_PROGRESS">In Progress</option>
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