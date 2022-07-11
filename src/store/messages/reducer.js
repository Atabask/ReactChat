import { nanoid } from "nanoid";
import {
    // SEND_MESSAGE,
    // DELETE_MESSAGE,
    GET_MESSAGES_START,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_ERROR,
    CREATE_MESSAGE_START,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_ERROR,
    DELETE_MESSAGE_START,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_ERROR
} from "./types"


const initialState = {
    messages: {},
    pending: false,
    error: null,
}


export const messagesReducer = (state = initialState, action) => {

    console.log("action>>>>>>>>>>>>", action)
    switch (action.type) {
     
        case GET_MESSAGES_START:
            return { ...state, pending: true, error: null };
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                pending: false,
                messages: action.payload
            };
        case GET_MESSAGES_ERROR:
            return { ...state, pending: false, error: action.payload };


        case CREATE_MESSAGE_START:
            return { ...state, pending: true, error: null };
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.roomID]: [
                        ...(state.messages[action.payload.roomID] ?? []),
                        { ...action.payload.message, id: nanoid() }
                    ]
                }
            };
        case CREATE_MESSAGE_ERROR:
            return { ...state, pending: false, error: action.payload };



        case DELETE_MESSAGE_START:
            return {
                ...state, pending: true, error: null,
            };
        case DELETE_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.roomID]:
                        state.messages[action.payload.roomID].filter(
                            message => message.id !== action.payload.messageId
                        )
                }
            };
        case DELETE_MESSAGE_ERROR:
            return {
                ...state, pending: false, error: action.payload,
            }
        default:
            return state;
    }
}