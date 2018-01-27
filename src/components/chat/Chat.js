import React from 'react';
import Chat from "./ChatPresentation";
import {connect} from 'react-redux';
import {findProduct} from "../../actions/chat";


@connect(({chat}) => ({messages: chat.messages}))
export default class extends React.Component {
    // static propTypes = {
    //   loadingLabel: PropTypes.string.isRequired,
    //   pageCount: PropTypes.number,
    //   renderItem: PropTypes.func.isRequired,
    //   items: PropTypes.array.isRequired,
    //   isFetching: PropTypes.bool.isRequired,
    //   onLoadMoreClick: PropTypes.func.isRequired,
    //   nextPageUrl: PropTypes.string
    // };


    constructor(props) {
        super(props);

        this.state = {
            chatState: "search",
            selectedProductId: null
        }
    }

    // constructor(props) {
    //     super(props);
    //
    //     this.messages = [{
    //         text: "hello",
    //         type: "BOT",
    //         avatar: "/static/bot-icon-2883144_640.png"
    //     }, {
    //         text: "hello",
    //         type: "USER",
    //         avatar: "https://medizzy.com/_nuxt/img/user-placeholder.d2a3ff8.png"
    //     }]
    // }

    componentDidMount() {
        // this.props.dispatch(loadFirstMessage());
    }

    onMessageSend = userInput => {
        // this.props.dispatch(getAnswer(message));
        let currentState = "state";
        switch (currentState) {
            case "SEARCH":
                this.props.dispatch(findProduct(userInput));
                const state = states.get("SEARCH")(userInput);
                if(state !== currentState) {
                    this.setState({selectedProductId: getId(selectedProductId)})
                }
            case "INPUT_EMAIL":
                this.props.dispatch(addEmail(userInput));
                break;

            case "INPUT_NAME":
                this.props.dispatch(addName(userInput));
                break;
            case "SUBSCRIBE":
                this.props.dispatch(subscribe(this.state.order))

        }
    };

    render() {
        return <Chat onMessageSend={this.onMessageSend} messages={this.props.messages} owner={{
            avatar: "/static/bot-icon-2883144_640.png",
            name: "Chat Bot"
        }} />;

    }
}
