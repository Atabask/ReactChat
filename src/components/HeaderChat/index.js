import React from "react";
import styles from "./headerStyle.module.css"
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { ButtonExitSession } from "./ButtonExitSession/index"


const menuWithoutSession = [
    { title: "Home", to: "/" },
    { title: "SignUp", to: "/sign-up" },
    { title: "Gists", to: "/gists" },
    { title: "Chat", to: "/chat" },
    { title: <PersonIcon />, to: "/profile" },
]


export const HeaderComponent = ({session}) => {


    return (
        <div className={styles.wrapper} >
            <h1 className={styles.header}>HeaderChat</h1>
            <ul className={styles.nav_header}>
                {menuWithoutSession.map(item => <li className={styles.nav_item_title} key={item.title}>
                    <NavLink to={item.to}>{item.title}</NavLink>
                </li>)}
            
                    {!!session && (

                    <ButtonExitSession />)}
                
            </ul>
        </div>

    )
}