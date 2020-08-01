import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_ERROR,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_ERROR,
    ON_NAME_CHANGE,
    ON_AGE_CHANGE,
    ON_HEIGHT_CHANGE
} from '../actions'

const initialState = {
    isFetching: true,
    formValues: {
        name:'',
        age: '',
        height: '',
        id: Date.now(),
    },
    smurfs: [],
    postSuccess: null,
    error: ""
}

export const smurfReducer = (state=initialState, action) => {

    switch(action.type) {

        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true,
            };
        
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        
        case FETCHING_SMURFS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case POST_SMURF_START:
            console.log(state.formValues)
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    state.formValues
                ]
            }

        case POST_SMURF_SUCCESS:
            return {
                ...state,
                postSuccess: action.payload
            }
        
        case POST_SMURF_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case ON_NAME_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    name: action.payload.target.value
                }
            }

        case ON_AGE_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    age: action.payload.target.value
                }
            }

        case ON_HEIGHT_CHANGE:
            return {
                ...state,
                formValues: {
                    ...state.formValues,
                    height: action.payload.target.value
                }
            }

        default:
            return state;

    }

}
