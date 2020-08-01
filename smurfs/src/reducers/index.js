import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_ERROR
} from '../actions'

const initialState = {
    data: [],
    fetching: true,
    error: ""
}

export const smurfReducer = (state=initialState, action) => {

    switch(action.type) {

        case FETCHING_SMURFS_START:
            return {
                ...state,
                fetching: true,
            };
        
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.payload
            }
        
        case FETCHING_SMURFS_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }

        default:
            return state;

    }

}
