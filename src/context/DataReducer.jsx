const DataReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                data: null,
                fetching: true
            }
        case 'GET_DATA_DONE':
            return {
                data: action.payload,
                fetching: false
            }
        case 'GET_DATA_FAILED':
            return {
                data: null,
                fetching: false
            }
        default:
            return state;
    }
}

export default DataReducer;