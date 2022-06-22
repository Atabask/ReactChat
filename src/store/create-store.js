import { createStore, combineReducers } from "redux"
import { profileReducer  } from "./profile/reducer"
import { conversationsReducer  } from "./conversations/reducer"
import { messagesReducer } from "./messages/reducer"



export const store = createStore(
    combineReducers({ 
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
})
)