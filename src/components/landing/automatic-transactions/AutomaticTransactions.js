import React from 'react';
import Styles from "./AutomaticTransactions.module.scss";
// component
import Description from './components/description/Description';
import Demo from './components/demo/Demo';
const AutomaticTransactions = () => {
    return (

        <div className={`${Styles.background} d-flex align-items-center py-5 `}>
            <div className={`${Styles.demo} `}>
                <Demo />
            </div>
            <div className={`${Styles.description} text-right `}>
                <Description />
            </div>
        </div>

    )
}

export default AutomaticTransactions
