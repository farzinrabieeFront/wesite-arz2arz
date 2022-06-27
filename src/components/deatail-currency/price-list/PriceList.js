import React from 'react'
import Styles from "./PriceList.module.scss";

const PriceList = () => {
    return (

        <div className={`${Styles.card} d-flex align-content-between flex-wrap`}>
            <div className={`${Styles.list} text-right`}>
                <p className={`${Styles.title} small grayBlue mb-2 font-weight-bold`}>بیشترین قیمت ۲۴ ساعت اخیر</p>
                <p className={`${Styles.price} dark mb-0`}>$726,786,000,000</p>
            </div>
                <div className={`${Styles.list} mt-4 text-right`}>
                    <p className={`${Styles.title} small grayBlue mb-2 font-weight-bold`}>قیمت فروش به ما</p>
                    <p className={`${Styles.price} dark mb-0`}>$726,786,000,000</p>
                </div>
        </div>

    )
}

export default PriceList
