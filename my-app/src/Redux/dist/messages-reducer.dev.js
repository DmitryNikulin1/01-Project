"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNewMassageCreator = exports.sandMassgeCreator = exports.massageReducer = void 0;
var UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
var SEND_MESSAGE = 'SAND-MASSGE';

var massageReducer = function massageReducer(state, action) {
  if (action.type === UPDATE_NEW_MASSAGE_TEXT) {
    state.massagesPage.newMassgesText = action.newMassage;
  } else if (action.type === SEND_MESSAGE) {
    var newMassage = state.newMassagesText;
    state.newMassgesText = '';
    state.massages.push({
      id: 20,
      massage: newMassage
    });
  }

  return state;
};

exports.massageReducer = massageReducer;

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
//# sourceMappingURL=messages-reducer.dev.js.map
