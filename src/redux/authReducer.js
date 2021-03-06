import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.payload};
        }
            default:
                return state;
        }
    }

    export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {id, email, login, isAuth}
    }
}

export const authMe = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe();
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
            if (response.data.resultCode === 0) {
                dispatch(authMe())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response =  await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}

export default authReducer;