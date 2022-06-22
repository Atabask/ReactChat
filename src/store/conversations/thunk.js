import { getStartConversations, getSuccessConversations, getErrorConversations } from "./actions"

export const getConversations = () => async (dispatch, _, api) => {
    
    const conversations = [];

    try {
        dispatch(getStartConversations())

        const snapshot = await api.getConversationsApi()

        snapshot.forEach((snap) => {
            conversations.push(snap.val())
        });

        dispatch(getSuccessConversations(conversations))
    } catch(e) {
        dispatch(getErrorConversations(e))
    }
}