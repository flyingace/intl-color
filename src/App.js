import React, { Component } from 'react';
import './App.css';

import FilterView from "./components/FilterView/FilterView";
import DataContainer from "./containers/DataContainer";

class App extends Component {

    render() {
        return (
            <div className="App">
                <h3>Sort by:</h3>
                <FilterView/>
                <ul id="field-titles">
                    <li className="column-one">Description</li>
                    <li className="column-two">Feature</li>
                    <li className="column-three">Last Modified Date</li>
                    <li className="column-four">Priority</li>
                    <li className="column-five">Submitted By</li>
                    <li className="column-six">Status</li>
                </ul>
                <DataContainer/>
            </div>
        );
    }
}

export default App;
