import { TOGGLE_VISIBLE_PROFILE, EDIT_PROFILE_NAME } from "./types"


export const toggleVisibleProfile = () => {
    return { type: TOGGLE_VISIBLE_PROFILE };
}

export const editProfileName = (value) => {
    return { 
        type: EDIT_PROFILE_NAME,
        payload: value
        
    };
}