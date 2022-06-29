import {
    DELETE_CONVERSATION,
    GET_CONVERSATIONS_ERROR,
    GET_CONVERSATIONS_START,
    GET_CONVERSATIONS_SUCCESS,
    CREATE_CONVERSATION_START,
    CREATE_CONVERSATION_SUCCESS,
    CREATE_CONVERSATION_ERROR,
    REMOVE_CONVERSATION_START,
    REMOVE_CONVERSATION_SUCCESS,
    REMOVE_CONVERSATION_ERROR
} from "./types"


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

export const createStartConversation = () => ({
    type: CREATE_CONVERSATION_START,
})

export const createSuccessConversation = (conversation) => ({
    type: CREATE_CONVERSATION_SUCCESS,
    payload: conversation,
})

export const createErrorConversation = (error) => ({
    type: CREATE_CONVERSATION_ERROR,
    payload: error,
})

export const removeStartConversation = () => ({
    type: REMOVE_CONVERSATION_START,
})

export const removeSuccessConversation = (conversation) => ({
    type: REMOVE_CONVERSATION_SUCCESS,
    payload: conversation,
})

export const removeErrorConversation = (error) => ({
    type: REMOVE_CONVERSATION_ERROR,
    payload: error,
})

