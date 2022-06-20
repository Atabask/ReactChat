import React from "react";
import { ChatRooms } from "./ChatList/Index"
import  styles from "./wrapper.module.css"




export const App = () => {

    return (
        <div className={styles.wrapper}>
                <div className={styles.wrapper_chat_and_room}>
                    <ChatRooms />
                </div>
        </div>
    )
}