import {combineReducers} from "redux";
import languageReducer from "./language";
import openMenuReducer from "./open-menu";

const allReducers = combineReducers({
    lang: languageReducer,
    openMenu: openMenuReducer
})

export default allReducers;