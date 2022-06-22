import React from "react";
import styles from "./chatListStyle.module.css";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { ChatComponent } from "../ChatComponent/index"
import { useSelector, useDispatch } from "react-redux";
import { deleteConversation } from "../../store/conversations/actions";
import { ModalAddRoom } from "./modalAddRoom/index"
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";




export const ChatRooms = () => {

  // const { roomId } = useParams();

  const conversations = useSelector(
    (state) => state.conversations.conversations
  )

  // const message = useSelector((state) => {
  //   const messages = state.messages.messages[roomId] ?? [];
  //   return messages[messages.length - 1];
  // }
  // )



  const dispatch = useDispatch();

  const navigate = useNavigate()



  const deleteRoom = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate("/chat")
  }

  return (
    <div className={styles.wrapper_Chat_List}>
      <div className={styles.header_btn}>
        <h1>Chat rooms</h1><span><ModalAddRoom /></span></div>
      <nav>
        {conversations.map((conversation) => (
          <div className={styles.wrapper_link_room} key={conversation}>
            <Link to={conversation}>{conversation}</Link>
            <Button onClick={() => deleteRoom(conversation)}>
              <DeleteIcon />
            </Button>
            <br />
          </div>
        ))}
      </nav>

      <Routes>
        <Route path=":roomId" element={<ChatComponent className={styles.chatRoom} />}></Route>
      </Routes>
    </div>
  )
}

// <Button onClick={createRoom()}>Add chatroom</Button>
// <Button onClick={deleteRoom()}>Delete</Button>
// import Modal from '@mui/material/Modal';
// import { Input, InputAdornment } from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';