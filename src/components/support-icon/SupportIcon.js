import React from 'react'
import Styles from "./SupportIcon.module.scss";
import { BiSupport } from 'react-icons/bi';

const SupportIcon = ({color, radius}) => {
    return (
        <span className={`${Styles.icon} ${Styles[radius]} ${color} ml-2`}> <BiSupport  /> </span>
    )
}

export default SupportIcon
