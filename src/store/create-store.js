import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { profileReducer  } from "./profile/reducer"
import { conversationsReducer  } from "./conversations/reducer"
import { messagesReducer } from "./messages/reducer"
import { gistsReducer } from "./gists"
import thunk from "redux-thunk";
import { logger, botMessage } from "./middlewares"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { getPublicGistsApi, getGistsByNameApi } from "../api/gists"

const api = { getPublicGistsApi, getGistsByNameApi }

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({ 
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
compose(
    applyMiddleware( thunk.withExtraArgument(api), logger, botMessage ),
)
)

export const persistor = persistStore(store)