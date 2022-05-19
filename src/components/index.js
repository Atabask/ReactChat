import React from "react";
import { HeaderComponent } from "./HeaderChat/index"
import { ChatComponent } from "./ChatComponent/index"
import { ChatRooms } from "./ChatList/Index"
import  styles from "./wrapper.module.css"
import { nanoid } from "nanoid";



export const App = () => {

    const newId = nanoid();

    return (
        <div className={styles.wrapper}>
            <div>
                <HeaderComponent />
                <div className={styles.wrapper_chat_and_room}>
                    <ChatRooms id={newId}/>
                    <ChatComponent id={newId}/>
                </div>
            </div>
        </div>
    )
}