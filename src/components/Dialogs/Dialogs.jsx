import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'; 

const Dialogs = (props) => {
    let {profilePage:d,messagesPage:m} = props;

    
    let dialog = d.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}  key={dialog.id}/>)

    let message = m.messages.map(message => <Message key={message.id} message={message.message}/>)

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateMessageBody(body)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
            <div><textarea placeholder='Send your message' value={m.newMessageBody}  onChange={onNewMessageChange}></textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    )
}

export default Dialogs;