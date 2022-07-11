export const messagesSelector = (conversationID) => (state) => {
    return state.messages.messages[conversationID] ?? [];
  };