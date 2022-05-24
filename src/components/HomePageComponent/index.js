import React from "react";
import styles from "./homePageStyle.module.css"
import imgHome from "./img/mainHomeImg.jpg"



export const Home = () => {
    return <div className={styles.wrapper_home}>
        <h1 className={styles.header_home} >Home</h1>
        <div className={styles.container_img_text}>
        <img className={styles.img_home_page} src={imgHome} alt="Oooops!"></img>
        <div className={styles.home_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
    </div>
}