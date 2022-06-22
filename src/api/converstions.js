import { child, ref, get, set } from "firebase/database" 
import { database } from "./firebase"


export const createConversationsApi = (title) => {
    return set(child(ref(database), `conversations/${title}`), title)
}

export const getConversationsApi = () => {
    return get(child(ref(database), "conversations"));
}