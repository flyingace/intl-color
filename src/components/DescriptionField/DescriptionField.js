import React from 'react';
import PropTypes from 'prop-types';
import './DescriptionField.css';
import YesButton from '../../assets/yes.png';
import NoButton from '../../assets/no.png';

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

    toggleVisibility = () => {
        this.plainText.classList.toggle('hidden');
        this.editableText.classList.toggle('hidden')
    };

    updateDescription = () => {
        const updatedDescription = this.description.value;
        const rowId = this.props.rowId;

        this.toggleVisibility();
        this.props.updateData({'field': 'description', 'rowId': rowId, 'newValue': updatedDescription});
    };

    render() {
        return (
            <div>
                <div className='plain-text' ref={(div) => this.plainText = div}
                     onClick={this.toggleVisibility}>
                    {this.props.description}
                </div>
                <div className='editable-text hidden' ref={(div) => this.editableText = div}>
                    <textarea className='textfield' rows='3' defaultValue={this.props.description} ref={(textArea) => this.description = textArea}/>
                    <img src={YesButton} width='24' height='24' className='button-yes' alt='accept' onClick={this.updateDescription}/>
                    <img src={NoButton} width='24' height='24' className='button-no' alt='cancel' onClick={this.toggleVisibility}/>
                </div>
            </div>
        );
    }
}

export default DescriptionField;