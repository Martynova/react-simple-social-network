const SET_POST = 'SET_POST';
const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';

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
}

const _setPost = (state) => {
    let post = {
        id: 3,
        message: state.newPostText,
        likesCount:3
    }
    state.posts.push(post);
    state.newPostText = '';
}

const _updatePostMessage = (state, post) => {
    state.newPostText = post
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POST:
            _setPost(state);
        return state;

        case UPDATE_POST_MESSAGE:
            _updatePostMessage(state, action.text)
        return state;

        default:
            return state;
    }
}

export default profileReducer;

export const addPostCreator = () => ({type:SET_POST});

export const changePostCreator = (text) => ({type: UPDATE_POST_MESSAGE, text})