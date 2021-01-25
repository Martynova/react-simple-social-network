const SET_POST = 'SET_POST';
const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

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
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: state.newPostText,
                    likesCount:3
                }],
                newPostText: ''
            }
        case UPDATE_POST_MESSAGE:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export default profileReducer;

export const addPostCreator = () => ({type:SET_POST});

export const changePostCreator = (text) => ({type: UPDATE_POST_MESSAGE, text})

export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})