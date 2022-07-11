import { CREATE_MESSAGE_SUCCESS, createMessage } from "../messages"


export const botMessage = (store) => (next) => (action) => {

    if (action.type === CREATE_MESSAGE_SUCCESS && action.payload.message.author === "User") {  
        setTimeout(()=>{
            store.dispatch(
                createMessage(action.payload.roomID, {
                    author: "BOT",
                    message: "Hi"
                })
            )
        },500)
    }

    return next(action)
};