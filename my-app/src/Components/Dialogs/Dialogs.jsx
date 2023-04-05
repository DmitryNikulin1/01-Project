import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Massage';
import { sandMassgeCreator, updateNewMassageCreator } from '../../Redux/massages-reducer';



const Dialogs = (props) => {
    // debugger;
    let state = props.store.getState().massagesPage;


    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let massegesElement = state.massages.map(m => <Message message={m.massage} />);
    let newMassgesText = state.newMassgesText;

    debugger;

    let onSendMessageClick = () => {
        props.store.dispatch(sandMassgeCreator())
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMassageCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.massages}>
                <div> {massegesElement} </div>
                <div>
                <div><textarea onChange={onMessageChange} value={newMassgesText} placeholder='Enter your massage'></textarea> </div> 
                <div> <button onClick={onSendMessageClick}>Send Massage</button> </div>
                </div>
            </div>
        </div >


    )
}


export default Dialogs;