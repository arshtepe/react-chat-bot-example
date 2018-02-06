import {
    CONFIRM_SUBSCRIBE_STATE,
    INPUT_ADDRESS_STATE,
    INPUT_EMAIL_STATE,
    INPUT_NAME_STATE,
    SEARCH_PRODUCT_STATE,
    SUBSCRIBE_STATE,
    SUBSCRIPTION_STATE,
    INITIAL_STATE
} from "../constants/states"
import {getIndexFromMessage, hasIndex} from "./product";

const states = new Map();

states.set(INITIAL_STATE, () => ({
    state: SEARCH_PRODUCT_STATE
}));

states.set(SEARCH_PRODUCT_STATE, userInput => {
    if (hasIndex(userInput)) {
        return {
            state: INPUT_EMAIL_STATE,
            value: getIndexFromMessage(userInput)
        };
    }

    return {
        state: SEARCH_PRODUCT_STATE
    };
});

const emailPattern = /.+?@.+?\..+?/g;
states.set(INPUT_EMAIL_STATE, userInput => {
    if (emailPattern.test(userInput)) {
        return {
            state: INPUT_NAME_STATE,
            value: userInput.trim()
        }
    }
    return {
        state: INPUT_EMAIL_STATE
    }
});

states.set(INPUT_NAME_STATE, userInput => {
    return {
        state: INPUT_ADDRESS_STATE,
        value: userInput
    }
});

states.set(INPUT_ADDRESS_STATE, userInput => {
    return {
        state: SUBSCRIBE_STATE,
        value: userInput
    }
});
states.set(CONFIRM_SUBSCRIBE_STATE, userInput => {
    if (userInput.toLowerCase().includes("Yes")) {
        return {
            state: SUBSCRIPTION_STATE
        }
    }
    return {
        state: SEARCH_PRODUCT_STATE,
        value: userInput
    }
});

export default states;