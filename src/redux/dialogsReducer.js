const SEND_MESSAGE_BODY = 'SEND_MESSAGE_BODY';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE_BODY:
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.newMessageBody}],
            }
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageBodyCreator = (newMessageBody) => ({type: SEND_MESSAGE_BODY, newMessageBody})
