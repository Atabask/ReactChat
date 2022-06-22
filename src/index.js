import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// {/* <h1 className="header">Chat</h1> */}

// import React, { useState, useEffect } from "react";
// import styles from "../message/message.module.css";

// export const Chat = () => {
//     const [value, setValue] = useState()
//     const [messageList, setMessage] = useState([])


   
//     // function handleChange(event) {
//     //     setValue(event.target.value)
//     // };
    
//     // function makeMessage(event) {
//     //     const chatMessage = {author: "John", text: value};
//     //     setMessage({messageList: [...messageList, chatMessage]});
//     //     event.preventDefault()
//     // };

//     // useEffect(() => {
//     //     let lastMessage = messageList[messageList.length-1]
//     //     if(lastMessage.author === "John") {
//     //         messageList({messageList: [...messageList, {author: "BOT", text: "lorem"}]});
//     //     } return;
//     // })

//     return (
//         <div className={styles.wrapperChat}>
//             <form>
//             <input  className={styles.inputField} placeholder="Enter a message" value={value}/>
//             <button  type="button" className={styles.btnAddMessage} >Add message</button>
//             <div className={styles.textField}>
//                 {messageList.map((message) => (
//                     <p>{message.author}: {message.text}</p>
//                 )  
                    
//                 )}
//             </div>
//             </form>
//         </div>
//     )

// }