import React from 'react';
import PropTypes from 'prop-types';
import './DataView.css';
import DataRow from "../DataRow/DataRow";

class DataView extends React.Component {
    constructor() {
        super();
    };

    static propTypes = {};

    static defaultProps = {};

    state = {};

    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        const bugData = this.props.filteredBugData;

        const dataRows = bugData.map((dataForRow) => {
                return (<DataRow {...dataForRow} key={dataForRow._id} updateFunction={this.props.updateData}/>);
            }
        );

        return (<div className="data-panel">
                <ul className="data-row-titles">
                    <li className="column-one">Description</li>
                    <li className="column-two">Feature</li>
                    <li className="column-three">Last Modified</li>
                    <li className="column-four">Priority</li>
                    <li className="column-five">Submitted By</li>
                    <li className="column-six">Status</li>
                </ul>
                <ul className="data-rows">
                    {dataRows}
                </ul>
            </div>
        );
    }
}

export default DataView;