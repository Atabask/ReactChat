import { child, ref, get, push, remove } from "firebase/database" 
import { database } from "./firebase"


export const createMessageApi = (message, roomId) => {
    return push(child(ref(database), `messages/${roomId}`), message)
}

export const getMessageApi = () => {
    return get(child(ref(database), "messages"));
}

export const deleteMessageApi = (messageId) => {
    return remove(child(ref(database), `messages/${messageId}`));
}

