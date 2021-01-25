 import { connect } from 'react-redux';

import {sendMessageBodyCreator, updateMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (text) => {
            dispatch(updateMessageBodyCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageBodyCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;