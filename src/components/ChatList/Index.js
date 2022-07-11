import { useEffect} from "react";
import styles from "./chatListStyle.module.css";
import {  Routes, Route, useNavigate, Link } from "react-router-dom";
import { ChatComponent } from "../ChatComponent/index"
import { useSelector, useDispatch } from "react-redux";
import { deleteConversation } from "../../store/conversations/thunk";
import { ModalAddRoom } from "./modalAddRoom/index"
import DeleteIcon from '@mui/icons-material/Delete';
import { Button,  } from "@mui/material";
import { getConversations } from "../../store/conversations/thunk";



export const ChatRooms = () => {

  const conversations = useSelector((state) =>
  
    state.conversations.conversations 
  )


  const dispatch = useDispatch();

  const navigate = useNavigate()

  useEffect(() => {
    if (!conversations.length) {

      dispatch(getConversations())
    
    }
  }, [dispatch, conversations])



  const deleteRoom = (conversation) => {

    dispatch(deleteConversation(conversation));

    navigate("/chat/")
  }

  return (
    <div className={styles.wrapper_Chat_List}>
      <div className={styles.header_btn}>
        <h1>Chat rooms</h1>
        <span><ModalAddRoom /></span>
      </div>

      <nav className={styles.wrapper_title_conversation}>
        {conversations.map((conversation) => (
          <div className={styles.wrapper_title_conversation} key={conversation}>
            <Link className={styles.title_conversation} to={conversation} >{conversation}
              <Button onClick={() => deleteRoom(conversation)}>
                <DeleteIcon />
              </Button>
            </Link>
          </div>
        ))}
      </nav>


      <Routes>
        <Route path=":conversationID" element={<ChatComponent  className={styles.chatRoom} />}></Route>
      </Routes>
    </div>
  )
}

