import React from "react";
import styles from "./headerStyle.module.css"
import { NavLink } from "react-router-dom";
import  PersonIcon  from '@mui/icons-material/Person';

const menu = [
    {title: "Home", to: "/"},
    {title: "Gists", to: "/gists"},
    {title: "Chat", to: "/chat"},
    {title: <PersonIcon/>, to: "/profile"},
]

export const HeaderComponent = () => {


    return (
        <div className={styles.wrapper} >
        <h1 className={styles.header}>HeaderChat</h1>
        <ul className={styles.nav_header}>
            {menu.map(item => <li className={styles.nav_item_title} key={item.title}>
                <NavLink to={item.to}>{item.title}</NavLink>
                    </li>)}
        </ul>
        </div>

    )
}