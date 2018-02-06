import {INPUT_ADDRESS, INPUT_EMAIL, INPUT_NAME, SEARCH_PRODUCT, INIT} from "../constants";
import {INITIAL_STATE} from "../constants/states";

const initialState = {
    chatState: INITIAL_STATE,
    email: null,
    selectedProductIndex: -1,
    name: null,
    address: null
};
export default (state = initialState, action) => {

    switch (action.type) {
        case INIT:
            return {
                ...state,
                chatState: action.chatState
            };
        case SEARCH_PRODUCT:
            return {
                ...state,
                chatState: action.chatState,
                selectedProductIndex: action.selected
            };

        case INPUT_EMAIL:
            return {
                ...state,
                email: action.value,
                chatState: action.chatState
            };

        case INPUT_NAME:
            return {
                ...state,
                name: action.value,
                chatState: action.chatState
            };

        case INPUT_ADDRESS:
            return {
                ...state,
                chatState: action.chatState,
                address: action.value
            };

    }

    return state;
}