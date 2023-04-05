"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _massagesReducer = _interopRequireDefault(require("./massages-reducer"));

var _profileReducer = _interopRequireDefault(require("./profile-reducer"));

var _sitebarReducer = _interopRequireDefault(require("./sitebar-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer["default"],
  massagePage: _massagesReducer["default"],
  siteBar: _sitebarReducer["default"]
});
var store = (0, _redux.legacy_createStore)(reducers);
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=redux-store.dev.js.map
