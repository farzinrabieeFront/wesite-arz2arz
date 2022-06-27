import React from 'react';
import Styles from './Input.module.scss';

const Input = ({ image, placeholder }) => {
    return (
        <div className={`${Styles.input} bg-lighterBlue radius-md py-2`}>
            <input placeholder={placeholder} className="" />
            <img className={Styles.img} src={image} />
        </div>
    )
}

export default Input
