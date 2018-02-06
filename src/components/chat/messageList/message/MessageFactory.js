import React from "react";
import {MULTILINE_MESSAGE, OFFER_MESSAGE} from  "../../../../constants/messageTypes";
import OfferMessage from "./OfferMessage";
import MultilineMessage from "./MultilineMessage";

export default class {
    static create(message) {
        switch (message.type) {
            case OFFER_MESSAGE:
                return <OfferMessage message={message.value} />;
            case MULTILINE_MESSAGE:
                return <MultilineMessage message={message.value} />;
        }
        throw new TypeError("Unexpected type");
    }
}