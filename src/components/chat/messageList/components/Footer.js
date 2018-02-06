import chatStyle from "../../Chat.css";
import React from "react";

export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    onMessageSend = () => {
        this.props.onMessageSend(this.state.value);
        this.setState({value: ""});
    };

    onInputKeyPress = e => {
        if (e.key === 'Enter') {
            this.onMessageSend();
        }
    };

    onInputChange = e => {
        this.setState({value: e.target.value.trim()});
    };

    render() {
        return (
            <div className={chatStyle["chat-footer"]}>
                <input onKeyPress={this.onInputKeyPress} onChange={this.onInputChange}
                       value={this.state.value}
                       className={chatStyle["message-input"]}
                       placeholder="Type a message" type="text"/>

                <div onClick={this.onMessageSend} className={chatStyle["send-message-button"]}/>
            </div>
        )
    }
}