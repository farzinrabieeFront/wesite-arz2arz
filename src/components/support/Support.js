import React from 'react'
import Styles from './Support.module.scss'
import { MdPhoneInTalk } from 'react-icons/md'

const Support = () => {
    return (
        <div className={Styles.support}>
            <MdPhoneInTalk size={22} />
        </div>
    )
}

export default Support
