import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import styles from "./styleChatComponent.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, deleteMessage, getMessages, createMessage, messagesSelector } from "../../store/messages";
import { Button } from "@mui/material";




export const ChatComponent = () => {

    const { conversationID } = useParams();

    const [value, setValue] = useState("");

    const selector = useMemo(() => messagesSelector(conversationID), [conversationID])

    const messages = useSelector(selector)


    const dispatch = useDispatch()

    const scrollRef = useRef()

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
        }
    }, [messages])

    const addMessage = useCallback(
        (message, author = "User") => {
            if (message) {
                console.log("message>>", message)
                dispatch(createMessage({ author, message }, conversationID))
                setValue("")
            }

        }, [conversationID]);


    // useEffect(() => {
    //     if (!Object.keys(messages).length) {
    //         dispatch(getMessages());
    //     }
    // }, [dispatch, messages]); Идет бесконечный GET запрос. Почему???

    const deleteMessageId = useCallback((message) => {

        const messageID = message.id

        dispatch(deleteMessage(messageID));

    },[dispatch])

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
                            <Button
                                onClick={() => deleteMessageId(message)}
                            ><DeleteIcon />
                            </Button>
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


// onClick={() => dispatch(deleteMessage(conversationID, message.id))}
