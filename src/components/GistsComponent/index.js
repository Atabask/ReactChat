import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../../store/gists"
import styles from "./gists.module.css"
import { Button } from "@mui/material"



export const GistsComponent = () => {

    const dispatch = useDispatch()
    const { gists, error, pending } = useSelector((state) => state.gists)

    useEffect(() => {
        dispatch(getGists())
    }, [dispatch]);

    if (error) {
        return (
            <div className={styles.msg_error}>ERROR</div>
        )
    }

    if (pending) {
        return (
            <h1>LOADING</h1>
        )
    }


    return <div className={styles.wrapper_gists}>
        <h1>Gists</h1>
        {gists.map((gist, index) => (
            <div key={index}>
                <h2>{gist.description}</h2>
            </div>
        ))}

        {Array.from({ length: 10 })
            .map((_, index) => index + 1)
            .map((item) =>
                <Button onClick={() => dispatch(getGists(item))} key={item}>
                    {item}
                </Button>)}
    </div>
}
