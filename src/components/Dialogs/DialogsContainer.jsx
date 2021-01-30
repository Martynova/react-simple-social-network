 import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import {sendMessageBodyCreator, updateMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        messagesPage: state.messagesPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;