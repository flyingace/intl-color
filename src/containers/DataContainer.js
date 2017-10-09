import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import DataView from '../components/DataView/DataView';
import * as DataActions from '../actions/DataActions';

function mapStateToProps(state) {
    return {
        bugData: state.DataReducer.bugData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(DataActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DataView);
