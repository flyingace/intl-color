import bugData from '../bug-tracker-data.json';

export const FAILURE_DATA = 'FAILURE_DATA';
export const FILTER_DATA = 'FILTER_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RESET_DATA = 'RESET_DATA';

export function requestData() {
    return { type: REQUEST_DATA };
}

export function receiveData(data) {
    return { type: RECEIVE_DATA, state: data }
}

export function failureData() {
    return { type: FAILURE_DATA }
}

/**
 * This simulates an actual request
 * Once the data is 'received' the properties '_id' and 'isRendered' are added
 * to every object in the data array before it is passed to another function
 * which will pass it to a reducer and integrate it into the state
 * @returns {function(*)}
 */
export function fetchData() {
    return (dispatch) => {
        dispatch(requestData());

        const amendedData = bugData.map(function (dataRow, idx) {
            dataRow.isRendered = true;
            dataRow._id = 'bug' + idx;
            return dataRow;
        });

        dispatch(receiveData(amendedData));
    }
}

export function filterData(filters) {
    return { type: FILTER_DATA, filters };
}

export function resetData() {
    return {type: RESET_DATA}
}