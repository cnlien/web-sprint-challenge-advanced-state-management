import axios from 'axios'

// ACTION CREATORS 
export const FETCHING_SMURFS_START = "FETCH_SMURF_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR"

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_ERROR = "POST_SMURF_ERROR"

export const ON_NAME_CHANGE = "ON_NAME_CHANGE"
export const ON_AGE_CHANGE = "ON_AGE_CHANGE"
export const ON_HEIGHT_CHANGE = "ON_HEIGHT_CHANGE"

export const fetchSmurfs = () => dispatch => {

    dispatch({ type: FETCHING_SMURFS_START });

    axios
        .get("http://localhost:3333/smurfs")
        .then( res => {
            dispatch({
                type: FETCHING_SMURFS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCHING_SMURFS_ERROR,
                payload: err.message
            })
        })

}   

export const postSmurf = (smurf) => dispatch => {

    dispatch({ type: POST_SMURF_START })

    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then( res => {
            dispatch({
                type: POST_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch({
                type: POST_SMURF_ERROR,
                payload: err.message
            })
        })
}


export const onNameChange = (e) => {
    e.preventDefault();
    return{
        type: ON_NAME_CHANGE,
        payload: e
    }
}

export const onAgeChange = (e) => {
    e.preventDefault();
    return{
        type: ON_AGE_CHANGE,
        payload: e
    }
}

export const onHeightChange = (e) => {
    e.preventDefault();
    return{
        type: ON_HEIGHT_CHANGE,
        payload: e
    }
}