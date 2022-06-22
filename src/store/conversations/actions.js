import {CREATE_CONVERSATION, DELETE_CONVERSATION, GET_CONVERSATIONS_ERROR, GET_CONVERSATIONS_START, GET_CONVERSATIONS_SUCCESS} from "./types"


export const getStartConversation = () => ({
    type: GET_CONVERSATIONS_START,
})

export const getSuccessConversation = (conversations) => ({
    type: GET_CONVERSATIONS_SUCCESS,
    payload: conversations,
})

export const getErrorConversation = (error) => ({
    type: GET_CONVERSATIONS_ERROR,
    payload: error,
})

export const createConversation = (conversation) => ({
    type: CREATE_CONVERSATION,
    payload: conversation,
})

export const deleteConversation = (conversation) => ({
    type: DELETE_CONVERSATION,
    payload: conversation,
})
