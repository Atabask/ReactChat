import {
    getStartConversations,
    getSuccessConversations,
    getErrorConversations,
    createStartConversation,
    createSuccessConversation,
    createErrorConversation,
    removeStartConversation,
    removeSuccessConversation,
    removeErrorConversation
} from "./actions"


export const getConversations = () => async (dispatch, _, api) => {

    const conversations = [];

    try {
        dispatch(getStartConversations())

        const snapshot = await api.getConversationsApi()


        snapshot.forEach((snap) => {
            conversations.push(snap.val());
        });


    
        dispatch(getSuccessConversations(conversations))
        
    } catch (e) {
        dispatch(getErrorConversations(e))
    }
};

export const createConversation = (conversation) => async (dispatch, _, api) => {


    try {
        dispatch(createStartConversation())

        const snapshot = await api.createConversationsApi(conversation)

        console.log("snapshot>>", snapshot)

        dispatch(createSuccessConversation(conversation))
    } catch (e) {
        dispatch(createErrorConversation(e))
    }
}

export const deleteConversation = (conversation) => async (dispatch, _, api) => {

    try {
        dispatch(removeStartConversation())

        await api.removeConversationApi(conversation)

        dispatch(removeSuccessConversation(conversation))
    } catch (e) {
        dispatch(removeErrorConversation(e))
    }
}