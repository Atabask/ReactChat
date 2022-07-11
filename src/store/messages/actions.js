import {
  // DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGE_START,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_ERROR,
  DELETE_MESSAGE_START,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR,
} from "./types";


// export const deleteMessage = ( messageId, roomID ) => ({
//   type: DELETE_MESSAGE,
//   payload: { roomID, messageId },
// });




export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages, roomID) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: {messages, roomID}
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});



export const createMessageStart = () => ({
  type: CREATE_MESSAGE_START,
});

export const createMessageSuccess = (message, roomID) => ({
  type: CREATE_MESSAGE_SUCCESS,
  payload: { message, roomID },
});

export const createMessageError = (error) => ({
  type: CREATE_MESSAGE_ERROR,
  payload: error,
});



export const deleteMessageStart = () => ({
  type: DELETE_MESSAGE_START,
});

export const deleteMessageSuccess = (roomID, messageId) => ({
  type: DELETE_MESSAGE_SUCCESS,
  payload: { roomID, messageId },
});

export const deleteMessageError = (error) => ({
  type: DELETE_MESSAGE_ERROR,
  payload: error,
});