import { authApi } from "../api/api";

const SET_AUTH_USER = 'auth/SET_AUTH_USER';

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
    return async (dispatch) => {
        let res = await authApi.getAuthUser()
        
        if (res.data.resultCode === 0) {
        let {id: userId, email, login} = res.data.data;
        dispatch(setAuthUserData(userId, email, login, true))
        }
        
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let res = await authApi.login(email, password, rememberMe);
        
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let res = await authApi.logout();
        
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
        
    }
}