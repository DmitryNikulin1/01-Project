const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SAND-MASSGE';

let initialState = {
    massagesPage: {
        dialogs: [
          { id: 1, name: 'Dmitrii' },
          { id: 2, name: 'Valera' },
          { id: 3, name: 'Dasha' },
          { id: 4, name: 'Artem' },
          { id: 5, name: 'Sveta' },
          { id: 6, name: 'Sasha' },
        ],
        massages: [
          { id: 1, massage: 'Hi! How are you' },
          { id: 2, massage: "Hi. It's okay. And you?" },
          { id: 3, massage: "I'm fine" },
          { id: 4, massage: 'Yo!' },
          { id: 5, massage: 'Yo!' },
          { id: 6, massage: 'Yo!' },
        ],
        newMassgesText: 'dfds'
}}

const massageReducer = (state, action) => {

switch (action.type) {
    case UPDATE_NEW_MASSAGE_TEXT:
        state.newMassgesText = action.newMassage;
        return state;
    case SEND_MESSAGE:
        let newMassage = state.newMassagesText;
        state.newMassgesText = '';
        state.massages.push({ id: 20, massage: newMassage })
        return state;
        default:
            return state;   
}
}


export const sandMassgeCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMassageCreator = (body) => ({ type: UPDATE_NEW_MASSAGE_TEXT, newMassage: body })

export default massageReducer;



