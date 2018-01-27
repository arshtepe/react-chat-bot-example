import React, {Component} from 'react';
import chatStyle from "./Chat.css";
import MessageList from "./components/MessageList";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class extends Component {
    static propTypes = {
        // loadingLabel: PropTypes.string.isRequired,
        // pageCount: PropTypes.number,
        // renderItem: PropTypes.func.isRequired,
        // items: PropTypes.array.isRequired,
        // isFetching: PropTypes.bool.isRequired,
        // onLoadMoreClick: PropTypes.func.isRequired,
        // nextPageUrl: PropTypes.string
    };

    onMessageSend = value => this.props.onMessageSend(value);

    render() {
        const {owner, messages} = this.props;

        return (
            <div className={chatStyle.chat}>
                <Header owner={owner}/>
                <MessageList messages={messages}/>
                <Footer onMessageSend={this.onMessageSend}/>
            </div>
        )

    }
}
