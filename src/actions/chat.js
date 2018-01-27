import {RECEIVE_ANSWER, USER_MESSAGE} from "../constants";
import fetchival from "fetchival";

function receiveAnswer(answer) {
    return {
        type: RECEIVE_ANSWER,
        answer
    }
}

function addUserMessage(message) {
    return {
        type: USER_MESSAGE,
        message
    }
}

export function loadFirstMessage() {
    return async dispatch => {
        const answer = await fetchival("http://localhost:9010/chat/first").get();
        dispatch(receiveAnswer(answer.answer));
    }
}

export function findProduct(message) {
    return async dispatch => {
        dispatch(addUserMessage(message));
        const answer = await fetchival("http://localhost:9010/chat/answer").post({message});
        console.log(answer);
        dispatch(receiveAnswer(answer.message));
    }
}