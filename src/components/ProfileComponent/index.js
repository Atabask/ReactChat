import React from "react";
import styles from "./profile.module.css"
import photoProfile from "./img/photoProfile.jpg"
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../../store/profile"
import { ModalEdit } from "./editButton/index"
import Button from '@mui/material/Button';


export const ProfilePageComponent = () => {

    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();




    return <div>
        <div className={styles.wrapper}>
            <div className={styles.photo_profile}>
                <img src={photoProfile} alt="Ooops!"></img>
            </div>
            <div className={styles.container_info_profile}>
                <Button className={styles.btn_profile_data} onClick={() => dispatch(toggleVisibleProfile())}>Profile Data</Button>
                {profile.isVisibleProfile && (
                    <div>
                        <h1><span className={styles.profile_item}>{profile.firstName}</span><ModalEdit /></h1>
                        <h2>{profile.lastName}</h2>
                        <div>
                            <h2>About me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    </div>
}