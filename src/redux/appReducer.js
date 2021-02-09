import { authApi } from "../api/api";
import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }

}

export default appReducer;

export const setInitializedSuccess = () => ({type: SET_INITIALIZED })

export const initialazeApp = () => {
    return (dispatch) => {
        
        let promice = dispatch(getAuthUserData())

        promice.then(() => {
            dispatch(setInitializedSuccess())
        })
    }
}

