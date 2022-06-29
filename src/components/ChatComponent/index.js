import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from "./styleChatComponent.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, deleteMessage } from "../../store/messages";
import { Button } from "@mui/material";




export const ChatComponent = () => {

    const { roomId } = useParams();

    const [value, setValue] = useState("");

    const messages = useSelector((state) => state.messages.messages[roomId] ?? [])

    const dispatch = useDispatch()

    const scrollRef = useRef()

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
        }
    }, [messages])

    const addMessage = useCallback(
        (message, author = "Nickname") => {
            if (message) {
                dispatch(sendMessage(roomId, { message, author }))
                setValue("")
            }
        }, [roomId])


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
                        <div className={styles.messageFull} key={message.id}>
                            <h2 className={styles.message_author}>{message.author}</h2>:
                            <p className={styles.message_text}>{message.message}</p>
                            <Button onClick={() => dispatch(deleteMessage(roomId, message.id))}><DeleteIcon /></Button>
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
