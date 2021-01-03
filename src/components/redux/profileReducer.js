const SET_POST = 'SET_POST';
const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';

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

const profileReducer = (state, action) => {
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