import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities';

const initalState = {
    token: null,
    username: null,
    is_patient: null,
    is_doctor: null,
    userId: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}


const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.user.token,
        username: action.user.username,
        is_patient: action.user.is_patient,
        is_doctor: action.user.is_doctor,
        userId: action.user.userId,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    })
}

// Define when all of the functions above take place
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default reducer;

