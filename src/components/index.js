import React from "react";
import { HeaderComponent } from "./HeaderChat/index"
import { ChatComponent } from "./ChatComponent/index"
import { ChatRooms } from "./ChatList/Index"
import "./wrapper.module.css"

export const App = () => {



    return (
        <div className="wrapper">
            <div>
                <HeaderComponent />
                <div className="wrapper_chat_room">
                    <ChatRooms />
                    <ChatComponent />
                </div>
            </div>
        </div>
    )
}