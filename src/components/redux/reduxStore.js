import {combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
})

let store = createStore(reducers);

export default store;