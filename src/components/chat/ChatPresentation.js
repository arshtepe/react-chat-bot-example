import React, {PureComponent} from 'react';
import chatStyle from "./Chat.css";
import MessageList from "./messageList/MessageList";
import Header from "./messageList/components/Header";
import Footer from "./messageList/components/Footer";

export default class extends PureComponent {

    onMessageSend = value => this.props.onMessageSend(value);

    render() {
        const {chatName, messages} = this.props;

        return (
            <div className={chatStyle.chat}>
                <Header chatName={chatName}/>
                <MessageList messages={messages}/>
                <Footer onMessageSend={this.onMessageSend}/>
            </div>
        )

    }
}
