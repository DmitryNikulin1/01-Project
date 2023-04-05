import {combineReducers, legacy_createStore as createStore} from "redux"; 
import massageReducer from "./massages-reducer";
import profileReducer from "./profile-reducer";
import siteBarReducer from "./sitebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    massagePage: massageReducer,
    siteBar: siteBarReducer
});

let store = createStore(reducers)


export default store;