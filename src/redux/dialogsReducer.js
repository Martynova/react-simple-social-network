const SEND_MESSAGE_BODY = 'SEND_MESSAGE_BODY';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE_BODY:
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: state.newMessageBody}],
                newMessageBody: ''
            }
        case UPDATE_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.message
            }
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageBodyCreator = () => ({type: SEND_MESSAGE_BODY})

export const updateMessageBodyCreator = (message) => ({type: UPDATE_MESSAGE_BODY, message})