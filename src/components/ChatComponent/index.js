import React, { useEffect, useState, useRef } from "react";
import  styles from "./styleChatComponent.module.css";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"
import { style } from "@mui/system";








export const ChatComponent = (props) => {
    const [value, setValue] = useState("");
    const [messageList, setMessageList] = useState([{id: props.id, author: "BOT", text: "Fill in the fields"}]);
    
    const BOT_MESSAGE = {id: props.id, author: "BOT", text: "Fill in the fields"};
    const refTextAreaField = useRef()

    useEffect(() => {
        refTextAreaField.current?.focus()
    },[])

    const addMessage = () => {
        if(value){
            setMessageList([...messageList, { author: "Nickname", text: value } ])    
            setValue("") 
        }
    }
    
    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1]
        let timerId = null

        if(messageList.length && lastMessage?.author === "Nickname" ){
            timerId = setTimeout(() => {
                setMessageList([...messageList, BOT_MESSAGE])
            },1500);
        }

        return () => {
            clearInterval(timerId)
        }
    },[messageList])

    const handlePressInput = ({code}) => {
        if(code === "Enter"){
            addMessage()
        }
    }

    return (
        <div className={styles.wrapperChat}>
            <div className={styles.textField}>
                {messageList.map((message) => 
                    <p key={props.id}>
                        <span className={styles.message_author}>
                        {message.author}</span>: 
                        <span className={styles.message_text}>
                        {message.text}</span>
                    </p>
                )}
            </div>
            <div className={styles.formAddMessage}>
                <Input className={styles.textAreaField} 
                inputRef = {refTextAreaField}
                fullWidth = {true}
                type="text" 
                onKeyDown={handlePressInput}
                placeholder="Write a message"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                endAdornment = {
                    <InputAdornment  position="end">
                        {value && <Send  onClick={addMessage}/>}
                    </InputAdornment>
                 }></Input>
                
            </div> 
        </div>
    )
}
