import {
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


const initialState = {
    conversations: [],
    pending: false,
    error: null,

    pendingCreate: false,
    errorCreate: null,

    pendingRemove: false,
    errorRemove: null

}


export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CONVERSATIONS_START:
            return { ...state, pending: true, error: null };
        case GET_CONVERSATIONS_SUCCESS:
            return { ...state, pending: false, conversations: action.payload };
        case GET_CONVERSATIONS_ERROR:
            return { ...state, pending: false, error: action.payload };


        case CREATE_CONVERSATION_START:
            return { ...state, pendingCreate: true, errorCreate: null };
        case CREATE_CONVERSATION_SUCCESS:
            return {
                ...state,
                conversations: [...state.conversations, action.payload]
            };
        case CREATE_CONVERSATION_ERROR:
            return { ...state, pendingCreate: false, errorCreate: action.payload };


        case REMOVE_CONVERSATION_START:
            return { ...state, pendingRemove: true, errorRemove: null };
        case REMOVE_CONVERSATION_SUCCESS:
            return {
                ...state,
                conversations: state.conversations.filter(
                    (conversation) => conversation !== action.payload
                )
            };
        case REMOVE_CONVERSATION_ERROR:
            return { ...state, pendingRemove: false, errorRemove: action.payload };

        default:
            return state;
    }
}