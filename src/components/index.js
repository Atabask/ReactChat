import React from "react";
// import { ChatComponent } from "./ChatComponent/index"
import { ChatRooms } from "./ChatList/Index"
import  styles from "./wrapper.module.css"




export const App = () => {

    return (
        <div className={styles.wrapper}>
                <div className={styles.wrapper_chat_and_room}>
                    <ChatRooms />
                    {/* <ChatComponent id={newId}/> */}
                </div>
        </div>
    )
}