import React from "react";
import styles from "./test.module.css";



export class TestClass extends React.Component {
    render() {
        const { props1, props2, props3, props4, props5, props6, testMessage } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.card} >
                    <span className={styles.header}>Число:</span> {props1}
                </div>
                <hr />
                <div className={styles.card} >
                    <span className={styles.header}>Строка:</span> {props2}
                </div>
                <hr />
                <div className={styles.card} >
                    <span className={styles.header}>Булево значение:</span> {JSON.stringify(props3)}
                </div>
                <hr />
                <button onClick={props4}>Функция</button>
                
                <hr />
                <div className={styles.card} >
                    <span className={styles.header}>Массив:</span>
                    <div>{props5.map((item) => (
                        <div>{item}</div>
                    ))}</div>
                </div>
                <hr />
                <div className={styles.card} >
                    <h2>
                        <span className={styles.header}>Объекты:</span>
                    </h2>
                    <div>
                        {props6.map((item) => (
                            <div>
                                <h3>{item.title}:{item.year}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                {testMessage}
            </div>
        )
    }
}

export class TestComp extends React.Component {
    render() {
        const { message } = this.props;
        return (
            <div className="conteinerMessage">{message}
                <span className={styles.header}>Компонент в компоненте</span>
            </div>
        )
    }
}