import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  GET_GISTS_BY_NAME_START,
  GET_GISTS_BY_NAME_SUCCESS,
  GET_GISTS_BY_NAME_ERROR
} from "./types"

export const getGistsStart = () => ({
  type: GET_GISTS_START
})
export const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists
})
export const getGistsError = (error) => ({
  type: GET_GISTS_ERROR,
  payload: error
})
export const getGistsByNameStart = () => ({
  type: GET_GISTS_BY_NAME_START
})
export const getGistsByNameSuccess = (gistsByName) => ({
  type: GET_GISTS_BY_NAME_SUCCESS,
  payload: gistsByName
})
export const getGistsByNameError = (errorByName) => ({
  type: GET_GISTS_BY_NAME_ERROR,
  payload: errorByName
})