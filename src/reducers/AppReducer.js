import moment from 'moment';
import {
    FAILURE_DATA, FILTER_DATA, RECEIVE_DATA, REQUEST_DATA, RESET_DATA, UPDATE_DATA, UPDATE_FILTERS
} from '../actions/AppActions';
import { assign, isEmpty, isNaN } from 'lodash';

const initialState = {
    bugData: [],
    filteredBugData: [],
    activeFilters: {
        "description": '',
        "feature": '',
        "modifiedDate": '',
        "priority": NaN,
        "status": '',
        "submittedBy": ''
    }
};

function filterByCriteria(state) {
    const bugs = state.bugData;
    const filterSet = state.activeFilters;

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

function updateBugData(state, newData) {
    const stateCopy = assign({}, state);
    const rowToUpdate = stateCopy.bugData.findIndex((row) => {
        return row._id === newData.rowId;
    });
    stateCopy.bugData[rowToUpdate][newData.field] = newData.newValue;

    return stateCopy;
}

export default function AppReducer(state = initialState, action) {
    let newState = [];

    switch (action.type) {
    case FAILURE_DATA:
        return state;
        break;
    case FILTER_DATA:
        const filteredData = filterByCriteria(state);

        newState = assign({}, state, {
            filteredBugData: filteredData
        });
        break;
    case RECEIVE_DATA:
        newState = assign({}, state, {
            bugData: action.state,
            filteredBugData: action.state
        });
        break;
    case RESET_DATA:
        newState = assign({}, state, {
            activeFilters: {},
            filteredBugData: state.bugData
        });
        break;
    case REQUEST_DATA:
        return state;
        break;
    case UPDATE_DATA:
        const updatedState = updateBugData(state, action.newData);
        const filteredUpdatedData = filterByCriteria(updatedState);

        newState = assign({}, state, {
            bugData: updatedState.bugData,
            filteredBugData: filteredUpdatedData
        });
        break;
    case UPDATE_FILTERS:
        newState = assign({}, state, {
            activeFilters: action.filters
        });
        break;
    default:
        return state;
    }

    return newState;
}
