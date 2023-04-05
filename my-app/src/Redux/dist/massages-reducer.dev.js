"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewMassageCreator = exports.sandMassgeCreator = void 0;
var UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
var SEND_MESSAGE = 'SAND-MASSGE';
var initialState = {
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
  }
};

var massageReducer = function massageReducer(state, action) {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE_TEXT:
      state.newMassgesText = action.newMassage;
      return state;

    case SEND_MESSAGE:
      var newMassage = state.newMassagesText;
      state.newMassgesText = '';
      state.massages.push({
        id: 20,
        massage: newMassage
      });
      return state;

    default:
      return state;
  }
};

var sandMassgeCreator = function sandMassgeCreator() {
  return {
    type: SEND_MESSAGE
  };
};

exports.sandMassgeCreator = sandMassgeCreator;

var updateNewMassageCreator = function updateNewMassageCreator(body) {
  return {
    type: UPDATE_NEW_MASSAGE_TEXT,
    newMassage: body
  };
};

exports.updateNewMassageCreator = updateNewMassageCreator;
var _default = massageReducer;
exports["default"] = _default;
//# sourceMappingURL=massages-reducer.dev.js.map
