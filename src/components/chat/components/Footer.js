import chatStyle from "../Chat.css";
import React from "react";

export default class extends React.PureComponent {

    _onMessageSend() {
        let value = this._input.value.trim();
        this.props.onMessageSend(value);
    }

    onInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onMessageSend();
        }
    };

    onMessageSend = () => this._onMessageSend();

    render() {
        return (
            <div className={chatStyle["chat-footer"]}>
                <input onKeyPress={this.onInputKeyPress} ref={(input) => {
                    this._input = input
                }} className={chatStyle["message-input"]}
                       placeholder="Type a message" type="text"/>

                <div onClick={this.onMessageSend} className={chatStyle["send-message-button"]}/>
            </div>
        )
    }
}