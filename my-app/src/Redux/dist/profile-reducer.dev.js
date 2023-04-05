"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewPostTextActionCreator = exports.addPostActionCreator = void 0;
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
var ADD_POST = 'ADD-POST';
var initialState = {
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
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      var newPost = {
        id: 3,
        massages: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

var addPostActionCreator = function addPostActionCreator() {
  return {
    type: ADD_POST
  };
};

exports.addPostActionCreator = addPostActionCreator;

var updateNewPostTextActionCreator = function updateNewPostTextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

exports.updateNewPostTextActionCreator = updateNewPostTextActionCreator;
var _default = profileReducer;
exports["default"] = _default;
//# sourceMappingURL=profile-reducer.dev.js.map
