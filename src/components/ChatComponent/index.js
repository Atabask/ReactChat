import React, { useEffect, useState, useRef } from "react";
import styles from "./styleChatComponent.module.css";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material"
import { nanoid } from "nanoid";

const newId = nanoid();
const getBotMessage = () => ({ 
    id: newId, 
    author: "BOT", 
    text: "Fill in the fields", 
    date: new Date() 
});


export const ChatComponent = () => {
    const [value, setValue] = useState("");
    const [messageList, setMessageList] = useState({
        Auto: [ getBotMessage() ],
        Game: [ getBotMessage() ],
    });

    

    const scrollRef = useRef()

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
        }
    }, [messageList])

    const addMessage = () => {
        if (value) {
            setMessageList([...messageList, { author: "Nickname", text: value, date: new Date() }])
            setValue("")
        }
    }

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1]
        let timerId = null

        if (messageList.length && lastMessage?.author === "Nickname") {
            timerId = setTimeout(() => {
                setMessageList([...messageList, getBotMessage()])
            }, 1500);
        }

        return () => {
            clearInterval(timerId)
        }
    }, [messageList])

    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            addMessage()
        }
    }

    return (
        <div className={styles.wrapperChat}>
            <div className={styles.wrapperChatInput}>
                <div ref={scrollRef} className={styles.textField}>
                    {messageList.map((message) =>
                        <div className={styles.messageFull} key={newId}>
                            <h2 className={styles.message_author}>{message.author}</h2>:
                            <p className={styles.message_text}>{message.text}</p>
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
                                {value && <Send onClick={addMessage} />}
                            </InputAdornment>
                        }></Input>

                </div>
            </div>
        </div>
    )
}
