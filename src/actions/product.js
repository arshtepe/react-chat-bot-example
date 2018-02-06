import {addMessageFromState} from "./chat";
import transition from "../finiteMachine/transition";
import fetchival from "fetchival";
import {RECEIVE_PRODUCTS, SEARCH_PRODUCT} from "../constants";
import {FIND_PRODUCT_URL} from "../constants/Urls";

export function receiveProducts(products) {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}


function selectProduct(state, productId) {
    return {
        type: SEARCH_PRODUCT,
        selected: productId,
        chatState: state
    }
}

export function subscribe(data) {
    alert(data);
}


export function find(currentState, message) {
    return async dispatch => {
        let {state, value} = transition(currentState, message);
        if(currentState !== state) {
            dispatch(addMessageFromState(state));
            dispatch(selectProduct(state, value));

        } else {
            const result = await fetchival(FIND_PRODUCT_URL).post({message});
            dispatch(receiveProducts(result.products));
            dispatch(addMessageFromState(state))
        }
    }
}
