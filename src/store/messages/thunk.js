
import {
    createMessageStart,
    createMessageSuccess,
    createMessageError,
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,
    deleteMessageStart,
    deleteMessageSuccess,
    deleteMessageError
} from "./actions";

export const getMessages = () => async (dispatch, _, api) => {
    
    const messages = {}

    try {

        dispatch(getMessagesStart())

        const snapshot = await api.getMessageApi()

        snapshot.forEach((snap) => {


            messages[snap.key] = Object.values(snap.val());
        
        });

        dispatch(getMessagesSuccess(messages))
    
    } catch (e) {
        
        dispatch(getMessagesError(e))
    
    }
}

export const createMessage = (message, roomID) => async (dispatch, _, api) => {

    try {
        dispatch(createMessageStart())

         await api.createMessageApi(message)

        dispatch(createMessageSuccess(message, roomID))
    } catch (e) {
        dispatch(createMessageError(e))
    }
}



export const deleteMessage = (messageId) => async (dispatch, _, api) => {

    try {
        dispatch(deleteMessageStart())

         await api.deleteMessageApi(messageId)

        dispatch(deleteMessageSuccess(messageId))
    } catch (e) {
        dispatch(deleteMessageError(e))
    }
}



// export const sendMessageWithBot = (roomID, message) => (dispatch) => {
//     dispatch(sendMessage(roomID, message));

//     if (message.author === "User") {
//         setTimeout(() => {
//             dispatch(
//                 sendMessage(roomID, {
//                     author: "Bot",
//                     message: "hello from bot thunk",
//                 })
//             );
//         }, 500);
//     }
// };
