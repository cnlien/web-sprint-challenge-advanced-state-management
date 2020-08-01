import axios from 'axios'

// ACTION CREATORS 
export const FETCHING_SMURFS_START = "FETCH_SMURF_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR"

export const fetchSmurfs = () => dispatch => {

    dispatch({ type: FETCHING_SMURFS_START });

    axios
        .get("http://localhost:3333/smurfs")
        .then( res=> {
            dispatch({
                type: FETCHING_SMURFS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=> {
            dispatch({
                type: FETCHING_SMURFS_ERROR,
                payload: err.message
            })
        })

}