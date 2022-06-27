import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Styles from "./DeatailCurrency.module.scss";
// components
import CustomizedButton from '../../components/form/button/Button';
import PriceList from './price-list/PriceList';
import ApexCharts from '../apex-chart/ApexCharts';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const DeatailCurrency = ({ up, hideButtnons, data }) => {
    // console.log(data)
    return (
     
            <div className={`${Styles.card} p-3 d-flex flex-wrap`}>
                <div className="w-100 d-flex flex-wrap align-items-center">
                    <Col lg={6} className="text-right pr-0 mb-4">
                        {/* <span className={`${Styles.title} mb-0 h5 darkBlue`}>جزئیات {data.faName}</span> */}
                        <span className={`${Styles.title} mb-0 h5 darkBlue`}>جزئیات Bitcoin</span>
                    </Col>
                    <Col lg={6} className="pl-0 mb-4 text-left">
                        {/* {
                            !hideButtnons ?
                                <> */}
                        <CustomizedButton variant="lightGreen" size="md" className={`${Styles.actionButton} ml-3`}>
                            خرید
                        </CustomizedButton>
                        <CustomizedButton variant="lightRed" size="md" className={Styles.actionButton}>
                            فروش
                        </CustomizedButton>
                        {/* </>
                                : ""
                        } */}

                    </Col>
                    <Col className={`${Styles.chart} text-center px-0`}>


                        <div className={Styles.chartBox}>
                            <ApexCharts height="130px" up={up} data={data.chartData} />

                        </div>
                        <div className={`${Styles.gradient} ${up ? Styles.up : ""} `} >
                            <div className={`${Styles.deatails} d-flex align-items-center justify-content-between text-left`}>
                                <div>
                                    <p className={` text-right mb-1 h6 d-flex justify-content-end ltr ${up ? 'lightGreen' : 'lightRed'}`}>
                                        <AiOutlineDollarCircle size="18" /><span className={`${Styles.largeText} mb-0 ml-1 h6 font-weight-bold `}>23,873.63</span>
                                    </p>
                                    <p className="mb-0 d-flex justify-content-start gray">
                                        <span>4,951,343/67</span>
                                        <span className="mr-2 small">ریال</span>
                                    </p>
                                </div>
                                <div>
                                    <span className={`text-left ${up ? 'lightGreen' : 'lightRed'} ltr`}>13.0830</span>
                                    <span className={`text-left ${up ? 'lightGreen' : 'lightRed'} ltr`}>
                                        {up ? <BiCaretUp className="mr-1" /> : <BiCaretDown className="mr-1" />}
                                     20%</span>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col className={`${Styles.priceList} pr-3 pl-0`}>
                        <Row>
                            <Col className={Styles.items}>
                                <PriceList />
                            </Col>
                            <Col className={Styles.items}>
                                <PriceList />
                            </Col>
                            <Col className={Styles.items}>
                                <PriceList />
                            </Col>
                            <Col className={Styles.items}>
                                <PriceList />
                            </Col>
                            {/* <Col className={Styles.items}>
                                <PriceList />
                            </Col> */}

                        </Row>
                    </Col>
                </div>
            </div>
     
    )
}

export default DeatailCurrency
