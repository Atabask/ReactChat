import { Button } from "@mui/material"
import styles from "./buttonExitSession.module.css"
import { signOut } from "firebase/auth"
import { auth } from "../../../api/firebase"
import LogoutIcon from '@mui/icons-material/Logout';


export const ButtonExitSession = () => {

    

    return <div>
       <Button onClick={() =>signOut(auth)} ><LogoutIcon /></Button>
    </div>
}