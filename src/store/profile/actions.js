import { TOGGLE_VISIBLE_PROFILE } from "./types"
import { EDIT_PROFILE_NAME } from "./types";


export const toggleVisibleProfile = () => {
    return { type: TOGGLE_VISIBLE_PROFILE };
}

export const editProfileName = () => {
    return { type: EDIT_PROFILE_NAME };
}