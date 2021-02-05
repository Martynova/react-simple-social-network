import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'; 
import {Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
    let {profilePage:d,messagesPage:m} = props;

    
    let dialog = d.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}  key={dialog.id}/>)

    let message = m.messages.map(message => <Message key={message.id} message={message.message}/>)

    let addMessageBody = (value) => {
        props.sendMessage(value.newMessageBody);
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
            <MessageReduxForm onSubmit={addMessageBody}/>
        </div>
    )
}

export default Dialogs;

const MessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Send your message'
                name="newMessageBody"
                component={'textarea'} />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(MessageForm);