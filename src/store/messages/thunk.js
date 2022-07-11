
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



export const deleteMessage = (roomID, message) => async (dispatch, _, api) => {

    const messageID = message.id

    try {

        dispatch(deleteMessageStart())

         await api.deleteMessageApi()

        dispatch(deleteMessageSuccess(roomID, messageID))

    } catch (e) {

        dispatch(deleteMessageError(e))
    }
}

