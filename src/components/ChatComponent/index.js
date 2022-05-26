import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from "./styleChatComponent.module.css";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";

const newId = nanoid();
const getBotMessage = () => ({ 
    id: newId, 
    author: "BOT", 
    message: "Fill in the fields", 
});


export const ChatComponent = () => {
    const { roomId } = useParams();
    const [value, setValue] = useState("");
    const [messageList, setMessageList] = useState({
        Auto: [ getBotMessage() ],
        Game: [ getBotMessage() ],
    });

    
    const messages = messageList[roomId] ?? []
    

    const scrollRef = useRef()

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
        }
    }, [messageList])

    const addMessage = useCallback(
        (message, author = "Nickname") => {
        // ...messageList, { author: "Nickname", text: value, date: new Date() }
        if (message) {
            setMessageList((state) => ({
                 ...state, 
                 [roomId]: [
                     ...(state[roomId] ?? []),
                     { author, message }
                 ] }))
            setValue("")
        }
    },[roomId])

    useEffect(() => {
        const messages = messageList[roomId] ?? []
        const lastMessage = messages[messages.length - 1]
        let timerId = null

        if (messages.length && lastMessage?.author === "Nickname") {
            timerId = setTimeout(() => {
                addMessage("Hello", "BOT")
            }, 1500);
        }

        return () => {
            clearInterval(timerId)
        }
    }, [addMessage, messageList, roomId])

    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            addMessage(value);
        }
    };

    return (
        <div className={styles.wrapperChat}>
            <div className={styles.wrapperChatInput}>
                <div ref={scrollRef} className={styles.textField}>
                    {messages.map((message) =>
                        <div className={styles.messageFull} key={newId}>
                            <h2 className={styles.message_author}>{message.author}</h2>:
                            <p className={styles.message_text}>{message.message}</p>
                            
                        </div>
                    )}
                </div>
                <div className={styles.formAddMessage}>
                    <Input className={styles.textAreaField}
                        fullWidth={true}
                        type="text"
                        onKeyDown={handlePressInput}
                        placeholder="Write a message"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                {value && <Send onClick={() => addMessage(value)} />}
                            </InputAdornment>
                        }></Input>

                </div>
            </div>
        </div>
    )
}
