import React from 'react'; 

import {sendMessageBodyCreator, updateMessageBodyCreator} from '../redux/dialogsReducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
    let state = props.store.getState();
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageBodyCreator());
    }

    let onNewMessageChange = (text) => {
        
        props.store.dispatch(updateMessageBodyCreator(text))
    }
    
    return <Dialogs sendMessage={onSendMessageClick} updateMessageBody={onNewMessageChange} state={state}/>
}

export default DialogsContainer;