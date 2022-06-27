import React, { useEffect } from 'react'
import Styles from "./CurrencyCard.module.scss";
import { AiOutlineDollarCircle } from 'react-icons/ai';
import ApexCharts from '../apex-chart/ApexCharts';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { HiArrowLeft } from 'react-icons/hi';
const CurrencyCard = ({ onClick, activeCurrency, more, up, data }) => {

    // console.log('chartData :' + data.chartData);
    return (
        <> {

            more ?
                <div className={`${Styles.card} ${Styles.more} d-flex flex-wrap `}>
                    <div className="py-3 text-center col-12 d-flex align-content-center flex-wrap ">
                        <div className="mb-3 text-center col-12 cursor-pointer">
                            <span className={Styles.icon}><HiArrowLeft /></span>
                        </div>
                        <div className="col-12">
                            <h3 className="mb-3 blue h6 font-weight-bold cursor-pointer">مشاهده همه</h3>
                            <p className="mb-0 gainsboro h5 cursor-pointer">ارزهای دیجیتال</p>
                        </div>
                    </div>
                </div>
                :
                <div onClick={onClick} className={`${Styles.card} ${activeCurrency ? Styles.active : ""} cursor-pointer d-flex flex-wrap`}>

                    <div className={`${Styles.front} cursor-pointer d-flex flex-wrap`}>
                        <div className="pt-3 text-center col-12">
                            <div className={`${Styles.image} mb-2`}>
                                <img src={data.image} alt={data.name} />
                            </div>
                            <div>
                                <h3 className={`${Styles.title} mb-1 darkBlue h6 font-weight-bold`}>{data.faName}</h3>
                                <p className={`${Styles.subTitle} mb-0 gainsboro small`}>{data.name} </p>
                            </div>
                        </div>
                        <div className={`${Styles.price} pt-3 text-center col-12 darkBlue`}>
                            <p className={`${Styles.dollar} mb-1 d-flex justify-content-center`}>
                                {/* <AiOutlineDollarCircle size="23" /> */}
                                <span className={`${Styles.price} mb-0 h4 ml-1 font-weight-bold`}>{data.price}</span>
                            </p>
                            <p className={` mb-0 d-flex justify-content-center`}>
                                <span className={Styles.rialPrice}>{data.rialPrice}</span>
                                <span className="mr-2 small">ریال</span>
                            </p>
                        </div>
                        <div className={`${Styles.footer} col-12 p-0`}>

                            <ApexCharts height="100px" up={up} data={data.chartData} />

                        </div>
                        <div className={`${Styles.gradient} ${up ? Styles.up : ""} p-3`} >
                            <div className={`${Styles.details} text-left`}>
                                <span className={`${Styles.chartPrice} text-left ${up ? 'lightGreen' : 'lightRed'} ltr`}>
                                    {up ? <BiCaretUp className="mr-1" /> : <BiCaretDown className="mr-1" />}
                                     20%</span>
                                <span className={`text-left ${up ? 'lightGreen' : 'lightRed'} ltr ${Styles.chartPrice}`}>13.0830</span>
                            </div>
                        </div>
                    </div>

                    <div className={`${Styles.back} cursor-pointer d-flex flex-wrap`}>
                        <div className="py-3 text-center col-12 d-flex align-content-center flex-wrap">
                            <div className={`${Styles.image} mb-3  col-12`}>
                                <img src={data.image} alt={data.name} />
                            </div>
                            <div className="col-12">
                                <h3 className={`${Styles.title} mb-3 text-white h5 font-weight-bold`}>{data.faName}</h3>
                                <p className={`${Styles.subTitle} mb-0 gainsboro h5`}>{data.name}</p>
                            </div>
                        </div>
                    </div>

                </div>
        }
        </>

        // --------------------------------------------------  //





    )
}

export default CurrencyCard;
