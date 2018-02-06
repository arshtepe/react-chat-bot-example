import chatStyle from "../../Chat.css";
import React from "react";

export default props => (
    <div className={chatStyle.header}>
        <span>{props.chatName}</span>
    </div>
)