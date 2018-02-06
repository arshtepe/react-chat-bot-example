import React from "react";
import chatStyle from "../../Chat.css";


export default ({message}) => {
    return (<ol className={chatStyle["offer-message-container"]}>
            {message.map((product, i) => (<li key={i}>{product.model} ${product.price}</li>))}
        </ol>)
}