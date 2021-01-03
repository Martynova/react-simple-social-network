const SET_POST = 'SET_POST';
const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';
const SEND_MESSAGE_BODY = 'SEND_MESSAGE_BODY';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

let store = {
    _state: {
        profilePage:{
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            newPostText: '',
    },
        messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        newMessageBody: '',
    },
        postsPage:{
            posts:[
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 }
        ]},
        
    },
    _callSubscribe() {
        console.log('change')
    },
    getState(){
        return this._state;
    },

    subscribe(observer) {
        this._callSubscribe = observer;
    },
    _setPost() {
        let post = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount:3
        }
        this._state.postsPage.posts.push(post);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state);
    },
    _updatePostMessage(post) {
        this._state.profilePage.newPostText = post
        this._callSubscribe(this._state);
    },

    _sendMessageBody() {
        
        let message = {id: 7, message: this._state.messagesPage.newMessageBody};
        this._state.messagesPage.messages.push(message);
        this._state.messagesPage.newMessageBody='';
        this._callSubscribe(this._state);
    },
    _updateMessageBody(text) {
        this._state.messagesPage.newMessageBody = text;
        this._callSubscribe(this._state);
    },
    dispatch(action) {
        if(action.type === 'SET_POST') {
            this._setPost();
        } else if (action.type === 'UPDATE_POST_MESSAGE') {
            this._updatePostMessage(action.text)
        } else if (action.type === 'SEND_MESSAGE_BODY') {
            this._sendMessageBody()
        }else if (action.type === 'UPDATE_MESSAGE_BODY') {
            this._updateMessageBody(action.message);
        }

    }
}

export const addPostCreator = () => ({type:SET_POST});

export const changePostCreator = (text) => ({type: UPDATE_POST_MESSAGE, text})

export const sendMessageBodyCreator = () => ({type: SEND_MESSAGE_BODY})

export const updateMessageBodyCreator = (message) => ({type: UPDATE_MESSAGE_BODY, message})

export default store;
window.store = store;

