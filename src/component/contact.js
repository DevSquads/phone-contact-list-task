import React from 'react'
import * as styles from './contact.module.css'

const contact = props =>{
    return(
        <div className={styles.contact}>
            <img src={props.src || require('../assets/canva-speech-bubble-chat-icon-MACD19Bt9IQ.png')} alt="icon" className={styles.icon} />
            <div className={styles.data}>
                <h1> {props.name} </h1>
                <p> {props.dis} </p>
            </div>
        </div>
    )
}

export default contact