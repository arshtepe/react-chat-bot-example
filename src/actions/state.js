import transition from "../finiteMachine/transition";
import {addMessageFromState} from "./chat";

export function nextState(type, state, value) {
    return {
        type,
        chatState: state,
        value
    }
}

export function addNewField(type, currentState, userInput) {
    return dispatch => {
        const {state, value} = transition(currentState, userInput);
        // if(currentState !== state) {
            dispatch(addMessageFromState(state));
        // }

        dispatch(nextState(type, state, value));
    }

}