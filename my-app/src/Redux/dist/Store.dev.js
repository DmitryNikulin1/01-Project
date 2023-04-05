"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _massagesReducer = _interopRequireDefault(require("./massages-reducer"));

var _profileReducer = _interopRequireDefault(require("./profile-reducer"));

var _sitebarReducer = _interopRequireDefault(require("./sitebar-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = {
  getState: function getState() {
    return this._state;
  },
  _state: {
    profilePage: {
      posts: [{
        id: 0,
        massages: 'How are you?',
        likesCount: 23
      }, {
        id: 1,
        massages: "It's ok",
        likesCount: 2
      }],
      newPostText: 'fs'
    },
    massagesPage: {
      dialogs: [{
        id: 1,
        name: 'Dmitrii'
      }, {
        id: 2,
        name: 'Valera'
      }, {
        id: 3,
        name: 'Dasha'
      }, {
        id: 4,
        name: 'Artem'
      }, {
        id: 5,
        name: 'Sveta'
      }, {
        id: 6,
        name: 'Sasha'
      }],
      massages: [{
        id: 1,
        massage: 'Hi! How are you'
      }, {
        id: 2,
        massage: "Hi. It's okay. And you?"
      }, {
        id: 3,
        massage: "I'm fine"
      }, {
        id: 4,
        massage: 'Yo!'
      }, {
        id: 5,
        massage: 'Yo!'
      }, {
        id: 6,
        massage: 'Yo!'
      }],
      newMassgesText: 'dfds'
    },
    siteBar: {
      friends: [{
        id: 7,
        name: 'Dmitrii'
      }, {
        id: 8,
        name: 'Valera'
      }, {
        id: 9,
        name: 'Dasha'
      }, {
        id: 10,
        name: 'Artem'
      }, {
        id: 51,
        name: 'Sveta'
      }, {
        id: 61,
        name: 'Sasha'
      }]
    }
  },
  _callSubscriber: function _callSubscriber() {
    console.log('State changed');
  },
  subscribe: function subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch: function dispatch(action) {
    // debugger
    this._state.profilePage = (0, _profileReducer["default"])(this._state.profilePage, action);
    this._state.massagesPage = (0, _massagesReducer["default"])(this._state.massagesPage, action);
    this._state.siteBar = (0, _sitebarReducer["default"])(this._state.siteBar, action);

    this._callSubscriber(this._state);
  }
};
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=store.dev.js.map
