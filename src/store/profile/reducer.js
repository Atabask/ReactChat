import { TOGGLE_VISIBLE_PROFILE, EDIT_PROFILE_NAME } from "./types"


const initialState = {
    firstName: "John",
    lastName: "Mackorm",
    isVisibleProfile: false
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE_PROFILE:
            return { 
                ...state, 
                isVisibleProfile: !state.isVisibleProfile };
        case EDIT_PROFILE_NAME:
            return { 
                ...state,
                firstName: action.payload }
        default:
            return state;
    }
}