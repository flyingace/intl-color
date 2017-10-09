import {
    REQUEST_DATA, RECEIVE_DATA, FAILURE_DATA
} from '../actions/DataActions';
import {assign} from 'lodash';

const initialState = {
    bugData: []
};


export default function DataReducer(state = initialState, action) {
    switch (action.type) {
    case FAILURE_DATA:
        break;
    case RECEIVE_DATA:
        state = assign({}, state, {
            bugData: action.state
        });
        break;
    case REQUEST_DATA:
        break;
    default:
        return state;
    }

    return state;
}
