import React from 'react';
import PropTypes from 'prop-types';
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
        const bugData = this.props.bugData;

        const dataRows = bugData.map((dataForRow) => {
            return (<DataRow {...dataForRow} key={dataForRow._id} />);
            }
        );

        return (
            <ul id="data">
                {dataRows}
            </ul>
        );
    }
}

export default DataView;