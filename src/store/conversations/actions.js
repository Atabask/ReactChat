import {CREATE_CONVERSATION, DELETE_CONVERSATION} from "./types"


export const createConversation = (conversation) => ({
    type: CREATE_CONVERSATION,
    payload: conversation,
    // meta: {
    //     delay: 3000
    // }
})

export const deleteConversation = (conversation) => ({
    type: DELETE_CONVERSATION,
    payload: conversation,
})