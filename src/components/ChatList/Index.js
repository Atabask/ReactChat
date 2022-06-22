import React, { useState } from "react";
import styles from "./chatListStyle.module.css";
import { Link, Routes, Route } from "react-router-dom";
import { ChatComponent } from "../ChatComponent/index"



export const ChatRooms = () => {
  const [chatRooms, setChatRooms] = useState(["Auto", "Game", "Friends"]);


  return (
    <div className={styles.wrapper_Chat_List}>
      <h1>Chat rooms</h1>
      <nav>
        {chatRooms.map((room) => (
          <div key={room}>
            <Link to={room}>{room}</Link><br/>
          </div>
        ))}
      </nav>

      <Routes>
        <Route path=":roomId" element={<ChatComponent className={styles.chatRoom} />}></Route>
      </Routes>
    </div>
  )
}