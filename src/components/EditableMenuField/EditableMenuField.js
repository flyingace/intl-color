import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import YesButton from '../../assets/yes.png';
import NoButton from '../../assets/no.png';
import './EditableMenuField.css';

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

    toggleVisibility = () => {
        this.plainText.classList.toggle('hidden');
        this.editableMenu.classList.toggle('hidden')
    };

    updateDescription = () => {
        const updatedValue = this.selectMenu[this.selectMenu.selectedIndex].value;
        const rowId = this.props.rowId;

        this.toggleVisibility();
        this.props.updateData({'field': this.props.name, 'rowId': rowId, 'newValue': updatedValue});
    };

    renderHiddenSelectMenu = () => {
        const optionsArray = this.props.options;
        const selectOptions = optionsArray.map((option) => {
            return (<option value={option} key={option}>{this.toTitleCase(option)}</option>)
        });

        return (<select className='selectMenu' name={this.props.name} defaultValue={this.props.value} ref={(select) => {this.selectMenu = select}}>{selectOptions}</select>);
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
                <div className='plain-text' ref={(div) => this.plainText = div} onClick={() => {this.toggleVisibility()}}>
                    <span className="selected value">{this.toTitleCase(this.props.value)}</span>
                </div>
                <div className='editable-menu hidden' ref={(div) => { this.editableMenu = div }}>
                    {this.renderHiddenSelectMenu()}
                    <img src={YesButton} width='24' height='24' className='button-yes' alt='accept' onClick={this.updateDescription}/>
                    <img src={NoButton} width='24' height='24' className='button-no' alt='cancel' onClick={this.toggleVisibility}/>
                </div>
            </div>
        );
    }
}

export default EditableMenuField;