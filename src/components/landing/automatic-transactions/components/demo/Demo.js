import React from 'react'
import Styles from './Demo.module.scss';
import { FaChevronRight, FaChevronLeft, FaCircle } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';
import { RiArrowUpDownLine, RiWalletLine } from 'react-icons/ri';
import { GoPrimitiveDot } from 'react-icons/go';

// components
import Input from './input/Input';
import CustomizedButton from '../../../../../components/form/button/Button';
import SubTitle from '../../../../subtitle/SubTitle';

const Demo = () => {
    return (
        <>

            <div className={`${Styles.box}`}>
                <div className={`${Styles.tabs}  d-flex align-items-stretch`}>
                    <div id="buyButton" className={`${Styles.items} ${Styles.active}  py-3`}>
                        <span className="lightGreen h6">خرید LTC</span>

                    </div>
                    <div id="sellButton" className={`${Styles.items} py-3`}>
                        <span className="lightRed h6">فروش BTC</span>

                    </div>
                </div>
                <div className={`${Styles.body} text-center`}>

                    <div className="pt-3 pb-0 px-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="grayBlue subtitle yekan-Medium ">انتخاب جفت ارز</span>
                            <span className="gainsboro subtitle yekan-Medium ">
                                <RiWalletLine className="ml-2" />
                            موجودی شما :
                            <span className="dark mr-2 ltr">12BTC</span>
                            </span>
                        </div>
                        <div className="mt-2">
                            <div className={`${Styles.selection} radius-md d-flex align-items-center justify-content-between mb-2`}>
                                <div className={`${Styles.items} d-flex align-items-center `}>
                                    <span className={`${Styles.img} ml-2`}>
                                        <img src="/images/bitcoin_ic.png" />
                                    </span>
                                    <span className={`${Styles.text} text-right`}>
                                        <span className="subtitle dark font-weight-bold d-block">بیت کوین</span>
                                        <span className="subtitle gainsboro d-block mb-0">Bitcoin</span>
                                    </span>
                                </div>
                                <div className={Styles.items}>
                                    <CustomizedButton variant="outline-darkBlue" size="sm" className="font-weight-bold radius-md" >
                                        انتخاب ارز<FiChevronLeft size="20" className="mr-1" />
                                    </CustomizedButton>
                                </div>
                            </div>
                            <div className={`${Styles.selection} radius-md d-flex align-items-center justify-content-between mb-4`}>
                                <div className={`${Styles.items} d-flex align-items-center `}>
                                    <span className={`${Styles.img} ml-2`}>
                                        <img src="/images/lightCoin_ic.png" />
                                    </span>
                                    <span className={`${Styles.text} text-right`}>
                                        <span className="subtitle dark font-weight-bold d-block">لایت کوین</span>
                                        <span className="subtitle gainsboro d-block mb-0">Litecoin</span>
                                    </span>
                                </div>
                                <div className={Styles.items}>
                                    <CustomizedButton variant="outline-darkBlue" size="sm" className="font-weight-bold radius-md" >
                                        انتخاب ارز<FiChevronLeft size="20" className="mr-1" />
                                    </CustomizedButton>
                                </div>
                            </div>
                            <Input label="مقدار LTC به BTC" placeholder="29,921,265" className="mb-3" hasSubTitle />
                            <Input label="مقدار LTC " placeholder="1.3 LTC" />

                        </div>
                    </div>

                    <div className="p-3">
                        <div className={`${Styles.inventory} d-flex justify-content-between align-items-center`}>
                            <div className={`${Styles.circle}`}></div>
                            <div className={`${Styles.circle}`}> </div>
                            <div className={`${Styles.circle}`}> </div>
                            <div className={`${Styles.circle} ${Styles.active}`}>
                                <SubTitle className="bg-blue blue " left="-55px" top="-47px" title="25 درصد موجودی" />
                            </div>
                            <div className={`${Styles.circle} ${Styles.selected}`}></div>
                        </div>
                    </div>


                    <div className="py-2 px-3">
                        <Input label="جمع BTC " placeholder="3.5 BTC" />
                        <div className={`${Styles.subDescs} text-right py-2`}>

                            <p className="mt-2 mb-0 grayBlue"><GoPrimitiveDot size="18" className="ml-2 gainsboro" />
                                <span> کارمزد خرید</span>
                                <span className="mr-2">----</span>
                            </p>
                        </div>
                        <div className="py-2">
                            <CustomizedButton variant="lightGreen" size="md" className="radius-md w-100 font-weight-bold" >
                                دریافت BTC<FiChevronLeft size="20" className="mr-1" />
                            </CustomizedButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Styles.startLearning} pl-2`}>
                <p className="yellow small mb-2 text-center">برای شروع کلیک کنید</p>
                <CustomizedButton variant="yellow" size="md" className="radius-md w-100 font-weight-bold" >
                    <FiChevronRight size="20" className="ml-1" /> شروع آموزش
                </CustomizedButton>
            </div>
        </>
    )
}

export default Demo
