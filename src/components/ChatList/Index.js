import React, { useState } from "react";
import {  List, ListItem, ListItemText } from "@mui/material"
import styles from "./chatListStyle.module.css";
import { Link, useParams } from "react-router-dom";



export const ChatRooms = (props) => {
    const [ chatRooms, setChatRooms] = useState(["Auto", "Game", "Friends"]);
    const { roomId } = useParams();


    return (
        <div className={styles.wrapper_Chat_List}>
            <h1>Chat rooms</h1>
          <List >
              {chatRooms.map((room) => 
              <Link key = {room} to={`/chat/${room}`}>
                  <ListItemText primary={room.nameRoom} />
              </Link>
            )
            }
          </List>
        </div>
    )
}