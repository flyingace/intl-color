import React from 'react';
import PropTypes from 'prop-types';

class DescriptionField extends React.Component {
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
            <div>
                {this.props.description}
            </div>
        );
    }
}

export default DescriptionField;