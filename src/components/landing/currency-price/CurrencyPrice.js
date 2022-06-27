import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
// components
import Title from '../../title/Title';
import CurrencyCard from '../../currency-card/CurrencyCard';
import DeatailCurrency from '../../deatail-currency/DeatailCurrency';
import Styles from './CurrencyPrice.module.scss';
import { currencyPriceData } from './data';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
const CurrencyPrice = () => {
    const [activeCurrency, setActiveCurrency] = useState(2);

    return (
        <Row>
            <Col lg={12} className="pb-3 mb-4">
                <Title lightTitle="قیمت لحظه‌ای" darkTitle="ارزهای دیجیتال" waveLine />
            </Col>
            <Col lg={12}>
                <Row className={`${Styles.currencyPrice} justify-content-center align-items-start`}>



                    {currencyPriceData.map((item, index) => {
                        return (
                            <>
                                {
                                    index < 4 ?
                                        <>
                                            <Col lg={3} md={12} className={`${Styles.currencyCol} ${activeCurrency === index ? Styles.activeCol : null}`} >
                                                <CurrencyCard data={item}
                                                    activeCurrency={activeCurrency === index ? true : false}
                                                    onClick={() => setActiveCurrency(index)}
                                                    up={index % 2 === 0 ? true : false}
                                                />

                                            </Col>
                                            {activeCurrency === index ?
                                                <Col lg={12} className={`${Styles.deatailCurrency} my-3`}>
                                                    <DeatailCurrency up={activeCurrency % 2 === 0 ? true : false} data={item} />
                                                </Col>
                                                : ""
                                            }
                                        </>
                                        :
                                        null
                                }
                            </>
                        )
                    })}


                    <Col lg={3} className={`${Styles.currencyCol} ${Styles.more}`} >
                        <CurrencyCard more />
                    </Col>


                </Row>
                <div className={`${Styles.responsiveMore} d-flex align-items-center justify-content-center mt-4`}>
                    <Link href="/">
                        <a>
                            <div className="mb-3 blue yekan-ExtraBold text-center col-12 cursor-pointer d-flex align-items-center">
                            <ins>مشاهده همه ارزهای دیجیتال</ins> <span className={`${Styles.icon} mr-3`}><HiArrowLeft /></span>
                            </div>
                        </a>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}

export default CurrencyPrice
