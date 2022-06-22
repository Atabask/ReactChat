import { SEND_MESSAGE, sendMessage } from "../messages"


export const botMessage = (store) => (next) => (action) => {

    if (action.type === SEND_MESSAGE && action.payload.message.author === "Nickname") {  
        setTimeout(()=>{
            store.dispatch(
                sendMessage(action.payload.roomId, {
                    author: "BOT",
                    message: "Hi"
                })
            )
        },500)
    }

    return next(action)
};