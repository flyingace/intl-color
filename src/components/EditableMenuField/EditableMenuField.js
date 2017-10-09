import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';


class EditableMenuField extends React.Component {
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

    renderHiddenSelectMenu = () => {
        const optionsArray = this.props.options;
        const selectOptions = optionsArray.map((option) => {
            return (<option value={option} key={option}>{option}</option>)
        });
        return (<select name="Priority">{selectOptions}</select>
        )
    };

    toTitleCase = (ALL_CAPS_STRING) => {
        const individualWords = ALL_CAPS_STRING.toString().split('_');
        const titledArray = individualWords.map((word) => {
            return capitalize(word);
        });
        return titledArray.join(' ');
    };

    render() {
        return (
            <div>
                <span className="selected value">{this.toTitleCase(this.props.value)}</span>
                <span className="menu hidden">{this.renderHiddenSelectMenu()}</span>
            </div>
        );
    }
}

export default EditableMenuField;