const SEND_MESSAGE_BODY = 'SEND_MESSAGE_BODY';
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';

const _sendMessageBody = (state) => {
        
    let message = {id: 7, message: state.newMessageBody};
    state.messages.push(message);
    state.newMessageBody='';
}

const _updateMessageBody = (state, text) => {
    state.newMessageBody = text;
}

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_MESSAGE_BODY:
            _sendMessageBody(state)
        return state;
        case UPDATE_MESSAGE_BODY:
            _updateMessageBody(state, action.message);
        return state;
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageBodyCreator = () => ({type: SEND_MESSAGE_BODY})

export const updateMessageBodyCreator = (message) => ({type: UPDATE_MESSAGE_BODY, message})