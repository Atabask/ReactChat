import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGistsByName } from "../../../store/gists";
import styles from "./gistsByName.module.css"
import debounce from "lodash.debounce"

const searchGists = debounce((query, dispatch) => {
    dispatch(getGistsByName(query))
}, 1500)

export const GistsByName = () => {

    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const { gistsByName, errorByName, pendingByName } = useSelector((state) => state.gists);
    
    
    useEffect(() => {
        dispatch(getGistsByName())
    }, [dispatch])

    useEffect(() => {
        if(!!value) {
            searchGists(value, dispatch)
        }
    }, [value, dispatch])

    if (errorByName) {
        return (<div className={styles.wrapper_error}>
            <div className={styles.msg_error}>ERROR
            <Input 
            placeholder="Search Gist"
            value={value}
            onChange={(e) => setValue(e.target.value)}/></div></div>
            
        )
    }

    if (pendingByName) {
        return (
            <h1 className={styles.header_gists_loading}>LOADING</h1>
        )
    }

    return <div className={styles.wrapper_gists_by_name}>
        <h1 className={styles.header_search_gist}>Search Gist</h1>
        <div>
            <Input 
            placeholder="Search Gist"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
        </div>
        <div>
        {gistsByName.map((gist, index) => (
            <div key={index}>
                <h2>{gist.description}</h2>
            </div>
        ))}
        </div>
    </div>
}