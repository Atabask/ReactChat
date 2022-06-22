import { Button } from "@mui/material"
import styles from "./buttonExitSession.module.css"
import { signOut } from "firebase/auth"
import { auth } from "../../../api/firebase"


export const ButtonExitSession = () => {

    

    return <div>
       <Button onClick={() =>signOut(auth)} >Log out</Button>
    </div>
}