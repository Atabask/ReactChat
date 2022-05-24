import React from "react";
import styles from "./404.module.css"
import img404 from "./img/404Img.png"

export const Page404Comp = () => {
    return <div className={styles.wrapper_404}>
        <div className={styles.container_404} >
        <h1 className={styles.header_404} >AAAAAAAAAAAAAAAAAAAAA</h1>
            <img src={img404} alt="Ooops!" ></img>
        </div>
    </div>
}