import {BOT_MESSAGE, RECEIVE_PRODUCTS, USER_MESSAGE} from "../constants";
import {BOT, MULTILINE_MESSAGE, OFFER_MESSAGE, USER} from "../constants/messageTypes";

const initialState = {
    messages: []
};
export default (state = initialState, action) => {

    switch (action.type) {

        case BOT_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    value: action.message,
                    owner: BOT,
                    type: MULTILINE_MESSAGE
                }]
            };

        case RECEIVE_PRODUCTS:
            return {
                ...state,
                messages: [...state.messages, {
                    value: action.products,
                    owner: BOT,
                    type: OFFER_MESSAGE
                }]
            };

        case USER_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    value: action.message,
                    owner: USER,
                    type: MULTILINE_MESSAGE
                }]
            };

    }

    return state;
}