import { profileApi } from "../api/api";

const SET_POST = 'SET_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    posts:[
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: action.newPostText,
                    likesCount:3
                }],
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS_PROFILE:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export default profileReducer;

export const addPostCreator = (newPostText) => ({type:SET_POST, newPostText});

export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS_PROFILE, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(res => {
            dispatch(setUsersProfile(res.data))
            //this.props.setIsFetching(false);
        })
    }
}

export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(res => {
            dispatch(setStatus(res.data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.upgateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}