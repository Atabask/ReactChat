import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { profileReducer  } from "./profile/reducer"
import { conversationsReducer  } from "./conversations/reducer"
import { messagesReducer } from "./messages/reducer"
import { logger, botMessage } from "./middlewares"



export const store = createStore(
    combineReducers({ 
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
}),
compose(
    applyMiddleware( logger, botMessage ),
)
)