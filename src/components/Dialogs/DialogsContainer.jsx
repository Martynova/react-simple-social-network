 import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import {sendMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageBodyCreator(newMessageBody));
        }
    }
}


//let AuthRedirectComponent = withAuthRedirect(Dialogs)

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)

export default DialogsContainer;