import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DescriptionField from "../DescriptionField/DescriptionField";
import EditableMenuField from "../EditableMenuField/EditableMenuField";

import { PRIORITY, STATUS } from '../../constants';

class DataRow extends React.Component {
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

    formatDate = (date) => {
        const correctedDate = date.replace(/\s+/g, '');

        return moment(correctedDate).format('L');
    };

    render() {

        return (
            <li>
                <ul className="data-row">
                    {/*DescriptionFieldEditable*/}
                    <li className="column-one">
                        <DescriptionField description={this.props.description} rowId={this.props._id}
                                          updateData={this.props.updateFunction}/>
                    </li>
                    {/*FeaturesField*/}
                    <li className="column-two">
                        {this.props.feature}
                    </li>
                    {/*LastModifiedData*/}
                    <li className="column-three">
                        {this.formatDate(this.props.modifiedDate)}
                    </li>
                    {/*PriorityFieldEditable*/}
                    <li className="column-four">
                        <EditableMenuField name={"Priority"} value={this.props.priority} options={PRIORITY}
                                           rowId={this.props._id}/>
                    </li>
                    {/*SubmittedByField*/}
                    <li className="column-five">
                        {this.props.submittedBy}
                    </li>
                    {/*StatusFieldEditable*/}
                    <li className="column-six">
                        <EditableMenuField name={"Status"} value={this.props.status} options={STATUS}
                                           rowId={this.props._id}/>
                    </li>
                </ul>
            </li>
        );
    }
}

export default DataRow;