import chatStyle from "../Chat.css";
import React from "react";
import MessageFactory from "./message/MessageFactory";

function getMessageTypeClass({owner}) {
    return owner === "USER" ? "message-sender" : "message-companion";
}

export default class extends React.PureComponent {
    componentDidUpdate() {
        const container = this._container;
        container.scrollTop = container.scrollHeight;
    }

    render() {
        return (<div ref={container => this._container = container} className={chatStyle["messages-content"]}>
            {this.props.messages.map((message, i) => (
                <div className={`${chatStyle["message-container"]} ${chatStyle[getMessageTypeClass(message)]}`} key={i}>
                    <span className={chatStyle["user-icon"]}/>
                    <div className={`${chatStyle["message"]}`}>
                        {MessageFactory.create(message)}
                    </div>
                </div>
            ))}
        </div>)
    }
};