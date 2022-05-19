import React, { useState } from "react";
import {  List, ListItem, ListItemText } from "@mui/material"

import styles from "./chatListStyle.module.css";



export const ChatRooms = (props) => {
    const [ chatRooms, setChatRooms] = useState([{id: props.id, nameRoom: "Auto"},{id:"2", nameRoom: "Game"},{id:"3", nameRoom: "Friends"}])


    return (
        <div className={styles.wrapper_Chat_List}>
            <h1>Chat rooms</h1>
          <List >
              {chatRooms.map((room) => 
              <ListItem  key = {props.id} >
                  <ListItemText primary={room.nameRoom} />
              </ListItem>
            )
            }
          </List>
        </div>
    )
}