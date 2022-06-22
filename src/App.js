import React, { useEffect, useState } from "react";
import  "./main.css"


export const App = () => {
    const [messageList, setMessageList] = useState([])
    
    const textAreaRef = React.createRef();
    const inputAuthorRef = React.createRef();
    

    const addMessage = (e) => {
        let author = inputAuthorRef.current.value
        let text = textAreaRef.current.value
        let newMessage = {author, text}
        let messageLists = [...messageList, newMessage]
        setMessageList(messageLists)
        inputAuthorRef.current.value = ""
        textAreaRef.current.value = ""
        e.preventDefault()
    }
    
    useEffect(() => {
        
        let author = inputAuthorRef.current.value
        let text = textAreaRef.current.value
        let newMessage = {author, text}
        if( author !== "BOT" ){
            let messageLists = [...messageList, {author: "BOT", text: "Fill in the fields"}]
            setMessageList(messageLists)
        }console.log(newMessage)
        return
       
    },[]);

    return (
        <div className="wrapperChat">
            <h1 className="header">Chat</h1>
            <div className="textField">
                {messageList.map((message, index) => 
                    <p key={index.toString()}>{message.author}: {message.text}</p>
                )}
            </div>
            <form className="formAddMessage">
                <input placeholder="What's your name?" ref={inputAuthorRef} type="text" />
                <textarea className="textAreaField" type="text" ref={textAreaRef} placeholder="Write a message" ></textarea>
                <button className="btnAddMessage" type="submit" onClick={addMessage} >Add Message</button>
            </form> 
        </div>
    )
}



