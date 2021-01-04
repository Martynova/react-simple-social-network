import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';



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
            posts:[
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 }
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
    

    dispatch(action) {
            profileReducer(this._state.profilePage, action);
            dialogsReducer(this._state.messagesPage, action);
            this._callSubscribe(this._state);
    }
}

export default store;
window.store = store;

