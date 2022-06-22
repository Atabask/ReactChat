import {CREATE_CONVERSATION, DELETE_CONVERSATION, GET_CONVERSATIONS_ERROR, GET_CONVERSATIONS_START, GET_CONVERSATIONS_SUCCESS} from "./types"


export const getStartConversations = () => ({
    type: GET_CONVERSATIONS_START,
})

export const getSuccessConversations = (conversations) => ({
    type: GET_CONVERSATIONS_SUCCESS,
    payload: conversations,
})

export const getErrorConversations = (error) => ({
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
