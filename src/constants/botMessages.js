import {
    CONFIRM_SUBSCRIBE_STATE,
    INITIAL_STATE,
    INPUT_ADDRESS_STATE,
    INPUT_EMAIL_STATE,
    INPUT_NAME_STATE,
    SEARCH_PRODUCT_STATE,
    SUBSCRIBE_STATE
} from "./states";

const messages = new Map();
messages.set(INITIAL_STATE, "Hello, write query like Apple or Phones");
messages.set(INPUT_NAME_STATE, "Input your name");
messages.set(INPUT_EMAIL_STATE, "Input your email");
messages.set(INPUT_ADDRESS_STATE, "Input your address");
messages.set(SUBSCRIBE_STATE, "subscribe");
messages.set(SEARCH_PRODUCT_STATE, "Please write query message or write product number");
messages.set(CONFIRM_SUBSCRIBE_STATE, "Do you confirm subscribe?");

export default messages;