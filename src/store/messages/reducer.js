import { AccessTimeOutlined } from "@mui/icons-material";
import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types"


const initialState = {
    messages: {
        Auto: [
            {
                author: "BOT",
                message: "Fill in the fields",
            },
            {
                author: "Chack",
                message: "Hi",
            }
        ]
    }
}


export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.roomId]: [
                        ...(state.messages[action.payload.roomId] ?? []),
                        { ...action.payload.message, id: nanoid() }
                    ]
                }
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.roomId]: state.messages[action.payload.roomId].filter(message => message.id !== action.payload.messageId)
                }
            }

        default:
            return state;
    }
}