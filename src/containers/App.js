/* eslint-disable no-undef */

import React, {Component} from 'react'
import Chat from "../components/chat/Chat";
import appStyle from "./App.css";

export default class App extends Component {
    render() {
        return (
            <div className={appStyle["main-container"]}>
                <Chat chatName="Chat Bot"/>
            </div>
        )
    }
}

