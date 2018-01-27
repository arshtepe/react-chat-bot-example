import chatStyle from "../Chat.css";
import React from "react";

function getMessageTypeClass({owner}) {
    return owner === "USER" ? "message-sender": "message-companion";
}
function getMessage(message) {
    if(typeof message === "string") {
        return message;
    }

    return message.map(value => <p>{value}</p>);
}

export default props => (
    <div className={chatStyle["messages-content"]}>
        {props.messages.map((message, i) => (
            <div className={`${chatStyle["message-container"]} ${chatStyle[getMessageTypeClass(message)]}`} key={i}>
                <img className={chatStyle["user-icon"]} src={message.avatar}/>
                <div className={`${chatStyle["message"]}`}>
                    {getMessage(message.value)}
                </div>
            </div>
        ))}
    </div>
)