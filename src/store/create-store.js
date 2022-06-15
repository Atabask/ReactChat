import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { profileReducer  } from "./profile/reducer"
import { conversationsReducer  } from "./conversations/reducer"
import { messagesReducer } from "./messages/reducer"
import { logger, botMessage } from "./middlewares"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({ 
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
compose(
    applyMiddleware( logger, botMessage ),
)
)

export const persistor = persistStore(store)