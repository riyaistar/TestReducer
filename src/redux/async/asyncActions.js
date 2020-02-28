import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./asyncTypes"
import Axios from "axios"


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers  = () => {
    return (dispatch) => {

        dispatch(fetchUsersRequest)
        Axios.get('http://192.168.1.12:8081/abc.json')
            .then(response => {
                const usersdata = response.data;
                dispatch(fetchUsersSuccess(usersdata));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error))
                console.log(error)
            });

    }
}