import React from 'react';
import Styles from './Input.module.scss';
import SubTitle from '../../../../../subtitle/SubTitle';

const Input = ({ label, placeholder, className,hasSubTitle }) => {
    return (
        <div className={`${className} ${Styles.input} bg-lighterBlue radius-md py-2`}>
            {
                hasSubTitle ? <SubTitle className="bg-gray gray " left="0px" top="-34px" title="29,921,12 ~" /> : " "
            }
            <label className={`${Styles.label} subtitle`}>{label}</label>
            <input className="text-left ltr" placeholder={placeholder} />

        </div>
    )
}

export default Input
