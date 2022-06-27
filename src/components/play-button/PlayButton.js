import React from 'react'
import Styles from './PlayButton.module.scss'
// import { FaPlay } from 'react-icons/fa';

const PlayButton = () => {
    return (
        <div className={`${Styles.button} p-2`}>
            <img src="./images/PlayButton_Ic.png"/>
        </div>
    )
}

export default PlayButton
