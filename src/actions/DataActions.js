import bugData from '../data.json';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const FAILURE_DATA = 'FAILURE_DATA';

export const FILTER_DATA = 'FILTER_DATA';

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
 * Once the data is 'received' a property 'isRendered' is added to every object
 * in the data array before it is passed to another function which will integrate
 * it into the state in a reducer
 * @returns {function(*)}
 */
export function fetchData() {
    return (dispatch) => {
        dispatch(requestData());

        console.log(bugData);
            const amendedData = bugData.map(function (dataRow) {
                dataRow.isRendered = true;
                return dataRow;
            });

            dispatch(receiveData(amendedData));
    }
}

export function filterData(filter) {
    return { type: FILTER_DATA, filter };
}