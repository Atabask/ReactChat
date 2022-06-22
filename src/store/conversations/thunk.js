import { getStartConversation, getSuccessConversation, getErrorConversation } from "./actions"

export const getConversations = () => async (dispatch, _, api) => {
    
    const conversations = [];

    try {
        dispatch(getStartConversation())

        const snapshot = await api.getConversationsApi()

        snapshot.forEach((snap) => {
            conversations.push(snap.val())
        });

        dispatch(getSuccessConversation(conversations))
    } catch(e) {
        dispatch(getErrorConversation(e))
    }
}