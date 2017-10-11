import React, { Component } from 'react';
import './App.css';

import FilterView from "./components/FilterView/FilterView";
import DataView from "./components/DataView/DataView";

class App extends Component {

    render() {
        return (
            <div className="App">
                <FilterView {...this.props}/>
                <DataView {...this.props}/>
            </div>
        );
    }
}

export default App;
