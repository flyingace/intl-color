import React from 'react';
import PropTypes from 'prop-types';

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

    render() {
        return (
            <ul id="filter-fields">
                <li className="column-one">
                    <input type="text" label="Description"/>
                </li>
                <li className="column-two">
                    <select name="Features">
                        <option value="gallery">Gallery</option>
                        <option value="notes">Notes</option>
                        <option value="search">Search</option>
                        <option value="user_settings">User Settings</option>
                    </select>
                </li>
                <li className="column-three">
                    <input type="date"/>
                </li>
                <li className="column-four">
                    <select name="Priority">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </li>
                <li className="column-five">
                    <select name="Submitted By">
                        <option value="allison_norris">Allison Norris</option>
                        <option value="christie_christy">Christie Christy</option>
                        <option value="jason_kaplan">Jason Kaplan</option>
                        <option value="sal_governale">Sal Governale</option>
                    </select>
                </li>
                <li className="column-six">
                    <select name="Status">
                        <option value="not_started">Not Started</option>
                        <option value="in_progress">In Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                </li>
            </ul>
        );
    }
}

export default FilterView;