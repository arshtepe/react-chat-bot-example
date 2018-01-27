import chatStyle from "../Chat.css";
import React from "react";

export default props => (
    <div className={chatStyle.header}>
        <img src={props.owner.avatar}/>
        <span>{props.owner.name}</span>
    </div>
)