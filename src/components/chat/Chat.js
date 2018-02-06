import React from 'react';
import Chat from "./ChatPresentation";
import {connect} from 'react-redux';
import {addUserMessage, chatTransition} from "../../actions/chat";

@connect(({chat, subscribe}) => ({
    messages: chat.messages,
    subscribe
}))
export default class extends React.PureComponent {
    componentDidMount() {
        this.props.dispatch(chatTransition(this.props.subscribe.chatState));
    }

    onMessageSend = userInput => {
        let {subscribe, dispatch} = this.props;
        dispatch(addUserMessage(subscribe.chatState, userInput, subscribe));
    };

    render() {
        return <Chat onMessageSend={this.onMessageSend} messages={this.props.messages} chatName={this.props.chatName}/>;

    }
}
