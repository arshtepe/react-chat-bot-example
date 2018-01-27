import {RECEIVE_ANSWER, USER_MESSAGE} from "../constants";
import {BOT, USER} from "../constants/messageTypes";
import {List} from "immutable";

const initialState = {
    messages: List()
};
export default (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_ANSWER:
            return {
                ...state,
                messages: state.messages.push({
                    value: action.answer,
                    owner: BOT,
                    type: "offerMessage"
                })
            };

        case USER_MESSAGE:
            return {
                ...state,
                messages: state.messages.push({
                    value: action.message,
                    owner: USER,
                    type: "plainMessage"
                })
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                chatState: action.state,
                // selctedProduct: action.rp
            }
    }

    return state;
}