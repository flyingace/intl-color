import moment from 'moment';
import {
    FAILURE_DATA, FILTER_DATA, RECEIVE_DATA, REQUEST_DATA, RESET_DATA
} from '../actions/AppActions';
import { assign, isEmpty, isNaN } from 'lodash';

const initialState = {
    bugData: [],
    filteredBugData: [],
    activeFilters: {}
};

function filterByCriteria(state, filterSet) {
    const bugs = state.bugData;

    return bugs.filter(function (bug) {

        return (
            filterByDescription(bug, filterSet['description']) &&
            filterByFeature(bug, filterSet['feature']) &&
            filterByModifiedDate(bug, filterSet['modifiedDate']) &&
            filterByPriority(bug, filterSet['priority']) &&
            filterByStatus(bug, filterSet['status']) &&
            filterBySubmittedBy(bug, filterSet['submittedBy'])
        );
    });
}

function filterByDescription(row, value) {
    if (isEmpty(value)) return true;

    return row.description.indexOf(value) > -1;
}

function filterByFeature(row, value) {
    if (isEmpty(value)) return true;

    return row.feature === value;
}

function filterByModifiedDate(row, value) {
    if (isEmpty(value)) return true;

    const cutOffDate = value;
    const modifiedDate = row.modifiedDate;
    return moment(cutOffDate).isSameOrBefore(modifiedDate);
}

function filterByPriority(row, value) {
    if (isNaN(value)) return true;

    return row.priority === value;
}

function filterBySubmittedBy(row, value) {
    if (isEmpty(value)) return true;

    return row.submittedBy === value;
}

function filterByStatus(row, value) {
    if (isEmpty(value)) return true;

    return row.status === value;
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
    case FAILURE_DATA:
        break;
    case FILTER_DATA:
        const filteredData = filterByCriteria(state, action.filters);

        state = assign({}, state, {
            filteredBugData: filteredData
        });
        break;
    case RECEIVE_DATA:
        state = assign({}, state, {
            bugData: action.state,
            filteredBugData: action.state
        });
        break;
    case RESET_DATA:
        state = assign({}, state, {
            filteredBugData: state.bugData
        });
        break;
    case REQUEST_DATA:
        break;
    default:
        return state;
    }

    return state;
}
