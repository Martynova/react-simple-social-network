import { authApi } from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }

}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER, payload: {userId, email, login, isAuth} })

export const getAuthUserData = () => {
    return (dispatch) => {
        return authApi.getAuthUser().then(res => {
            if (res.data.resultCode === 0) {
                let {id: userId, email, login} = res.data.data;
                dispatch(setAuthUserData(userId, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}