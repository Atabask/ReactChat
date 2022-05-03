import React from "react";
import styles from "./message.module.css"

export class Message extends React.Component {
    render() {
        const { messageProps } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <h2>{ messageProps }</h2>
                </div>
            </div>
        )
    }
}