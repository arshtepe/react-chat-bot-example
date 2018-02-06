import {BOT_MESSAGE, INPUT_ADDRESS, INPUT_EMAIL, INPUT_NAME, USER_MESSAGE, INIT} from "../constants";
import {INITIAL_STATE, INPUT_ADDRESS_STATE, INPUT_EMAIL_STATE, INPUT_NAME_STATE, SEARCH_PRODUCT_STATE, SUBSCRIBE_STATE} from "../constants/states";
import {addNewField, nextState} from "./state";
import transition from "../finiteMachine/transition"
import {find as findProduct, subscribe} from "./product";
import messages from "../constants/botMessages";

export function addMessageFromState(state) {
    return {
        type: BOT_MESSAGE,
        message: messages.get(state)
    }
}

export function addMessageToList(message) {
    return {
        type: USER_MESSAGE,
        message
    }
}

export function addInitialMessage(currentState) {
    return dispatch => {
        dispatch(addMessageFromState(currentState));
        const {state} = transition(currentState);
        dispatch(nextState(INIT, state));
    }
}

export function chatTransition(currentState, message = "", data = {}) {
    switch (currentState) {
        case INITIAL_STATE:
            return addInitialMessage(currentState);
        case SEARCH_PRODUCT_STATE:
            return findProduct(currentState, message);
        case INPUT_EMAIL_STATE:
            return addNewField(INPUT_EMAIL, currentState, message);
        case INPUT_NAME_STATE:
            return addNewField(INPUT_NAME, currentState, message);
        case INPUT_ADDRESS_STATE:
            return addNewField(INPUT_ADDRESS, currentState, message);
        case SUBSCRIBE_STATE:
            return subscribe(data);
    }
    console.error("Unexpected state");
}

export function addUserMessage(currentState, message) {
    return dispatch => {
        dispatch(addMessageToList(message));
        dispatch(chatTransition(currentState, message));
    }
}