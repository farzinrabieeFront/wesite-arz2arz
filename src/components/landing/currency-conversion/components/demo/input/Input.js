import React from 'react';
import Styles from './Input.module.scss';

const Input = ({ image, label }) => {
    return (
        <div className={`${Styles.input} bg-lighterBlue radius-md py-2`}>
            <label className={`${Styles.label} subtitle`}>{label}</label>
            <input className="text-left ltr dark" />
             
        </div>
    )
}

export default Input
