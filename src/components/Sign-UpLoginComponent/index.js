import styles from "./sign-up-login.module.css"
import { Input, Button } from "@mui/material"
import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../api/firebase"


const newUser = (form) => {
    return createUserWithEmailAndPassword(auth, form.email, form.password)
}

const loginUser = (form) => {
    return signInWithEmailAndPassword(auth, form.email, form.password)
}

export const SignUp = () => {
    const [form, setForm] = useState({ email: "", password: "" })


    const handleChangeForm = (e) => {
       const field = e.target.getAttribute("type")

        if(!!field) {
            setForm({
                ...form,
                [field]: e.target.value,
            });
        }
    }

    return <div className={styles.wrapper_sign_up_login}>
        <div>
            <h1 className={styles.header_form}>Sign Up</h1>
            <form className={styles.form_login_sign_up}>
                <Input
                    onChange={handleChangeForm}
                    value={form.email}
                    placeholder="Your email"
                    fullWidth
                    type="email"
                    />
                <Input
                    onChange={handleChangeForm}
                    value={form.password}
                    placeholder="Password"
                    fullWidth
                    type="password"
                    />
                <Button onClick={() => newUser(form)} >Sign Up</Button>
                <Button onClick={() => loginUser(form)} >Login</Button>
            </form>
        </div>
    </div>
}