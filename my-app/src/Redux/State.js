import massageReducer from "./massages-reducer";
import profileReducer from "./profile-reducer";
import siteBarReducer from "./sitebar-reducer";


let store = {

  getState() {
    return this._state;
  },


  _state: {


    profilePage: {
      posts: [
        { id: 0, massages: 'How are you?', likesCount: 23 },
        { id: 1, massages: "It's ok", likesCount: 2 }
      ],
      newPostText: 'fs'

    },

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
    },

    siteBar: {
      friends: [
        { id: 7, name: 'Dmitrii' },
        { id: 8, name: 'Valera' },
        { id: 9, name: 'Dasha' },
        { id: 10, name: 'Artem' },
        { id: 51, name: 'Sveta' },
        { id: 61, name: 'Sasha' },
      ],

    }
  },
  _callSubscriber() {
    console.log('State changed')
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // debugger

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.massagesPage = massageReducer(this._state.massagesPage, action);
    this._state.siteBar = siteBarReducer(this._state.siteBar, action);

    this._callSubscriber(this._state);
  }
}





export default store;






