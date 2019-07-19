import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    // returning an object 
    return {
        type: actionTypes.AUTH_START,
        token: token
    }
}

export const authFail = error => {
    // returning an object 
    return {
        type: actionTypes.AUTH_START,
        error: error
    }
}
export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    return {
        type: actionTypes.AUTH_LOGOUT
    };

}
// Check for duration of logged in user, set a time out with perameter expirationTime and call 
export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());

        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart)
        axios.post('http://127.0.0.1:8000/rest-auth/login', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.token;
                const expirationDate = new Date(new Date().getTime()) + 3600;
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                checkAuthTimeout(3600);
            })
    }
}