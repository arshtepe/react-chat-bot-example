import chat from "./chat";
import subscribe from "./subscribe";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    chat, subscribe
});

export default rootReducer;
