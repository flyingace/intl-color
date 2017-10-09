import React, { Component } from 'react';
import './App.css';
import FilterView from "./components/FilterView";
import DataView from "./components/DataView";

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
                <DataView/>
            </div>
        );
    }
}

export default App;
