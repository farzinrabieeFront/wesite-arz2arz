import React from 'react';

import Styles from './SubTitle.module.scss'
const SubTitle = ({ className, title, left,top }) => {
    return (
        <div className={`${Styles.subtitle} `}
            style={{ left: `${left}`, top: `${top}` }}
        >
            <span className={`${className}`}>
                <p className="text-white mb-0">{title}</p>
            </span>
        </div>
    )
}

export default SubTitle
