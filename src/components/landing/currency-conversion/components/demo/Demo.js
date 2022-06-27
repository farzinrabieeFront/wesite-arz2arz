import React, { useRef, useEffect } from 'react'
import Styles from './Demo.module.scss';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';
import { RiArrowUpDownLine, RiWalletLine } from 'react-icons/ri';
import { GoPrimitiveDot } from 'react-icons/go';
// components
import Input from './input/Input';
import CustomizedButton from '../../../../../components/form/button/Button';

const Demo = ({
    isLearning,
    currentStep,
    currentEl,
    setIslearning,
    next
}) => {
    // console.log(currentStep, currentEl);
    const holeRef = useRef();
    let el, demo;
    useEffect(() => {
        demo = document.getElementById("demobox2");
        if (isLearning) {
            el = document.getElementById(currentEl);
            let topHole =
                el.getBoundingClientRect().top - demo.getBoundingClientRect().top;
            let rightHole =
                demo.getBoundingClientRect().right - el.getBoundingClientRect().right;

            // console.log(el, el.getBoundingClientRect().top);
            // console.log(demo, demo.getBoundingClientRect().top);

            holeRef.current.style.top = `${topHole}px`;
            holeRef.current.style.right = `${rightHole}px`;
            holeRef.current.style.width = `${el.offsetWidth}px`;
            holeRef.current.style.height = `${el.offsetHeight}px`;
        }
    }, [currentEl, currentStep, isLearning]);
    return (
        <>
            <div className={`${Styles.startLearning} pl-2`}>
                {!isLearning ?
                    <>
                        <p className="yellow small mb-2 text-center">برای شروع کلیک کنید</p>
                        <CustomizedButton onClick={() => {
                            setIslearning(true);
                            next();
                        }} variant="yellow" size="md" className="radius-md w-100 font-weight-bold" >
                            <FiChevronRight size="20" className="ml-1" /> شروع آموزش
                </CustomizedButton>
                    </>
                    : null}

            </div>
            <div className={`${Styles.box} ${isLearning ? Styles.isLearning : ""}`} id="demobox2">
                {isLearning ? (
                    <div className={Styles.afterAnimation}>
                        <div className={Styles.boxafter}>
                            <div className={Styles.hole} ref={holeRef}></div>
                        </div>
                    </div>
                ) : null}
                <div className={`${Styles.body} text-center`}>

                    <div className="pt-2 px-2">
                        <div id="step1" className="px-2 pt-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="grayBlue subtitle yekan-Medium ">تبدیل  BTC</span>
                                <span className="gainsboro subtitle yekan-Medium ">
                                    <RiWalletLine className="ml-2" />
                            موجودی شما :
                            <span className="dark mr-2 ltr">0.00025 BTC</span>
                                </span>
                            </div>
                            <div className={`${Styles.selection} mt-2 radius-md d-flex align-items-center justify-content-between mb-2`}>
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
                        </div>
                        <div className="px-2 pt-3" id="step2">
                            <Input label="مقدار پرداختی" />
                            <p className="mt-2 mb-0 lightGreen small pr-2 text-right">پانصد میلیون ریال</p>
                        </div>
                    </div>

                    <div className={`${Styles.arrowBox}`}>
                        <RiArrowUpDownLine className={`${Styles.arrow} link`} />
                    </div>

                    <div className="px-2">
                        <div id="step3" className="px-2 pt-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="grayBlue subtitle yekan-Medium ">به  LTC</span>
                                <span className="gainsboro subtitle yekan-Medium ">

                                    حداقل خرید :
                            <span className="dark mr-2 ltr">0.025{""}LTC</span>
                                </span>
                            </div>
                            <div className={`${Styles.selection} mt-2 radius-md d-flex align-items-center justify-content-between mb-4`}>
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
                        </div>

                        <div className="px-2 pt-3" id="step4">

                            <Input label="مقدار دریافتی" />

                        </div>
                    </div>

                    <div className="py-2 px-2">

                        <div className={`${Styles.subDescs} text-right py-2 px-2`} id="step5">
                            <p className="gainsboro"><GoPrimitiveDot size="18" className="ml-2 gainsboro" />
                                <span className="small">یک واحد بیتکوین برابر است با</span>
                                <span className="font-weight-bold grayBlue mr-2">~ 36,355,642 </span>
                                <span className="font-weight-bold grayBlue small align-top">ریال</span>
                            </p>
                            <p className="mb-0 grayBlue"><GoPrimitiveDot size="18" className="ml-2 gainsboro" />
                                <span> کارمزد خرید</span>
                                <span className="mr-2">----</span>
                            </p>
                        </div>
                        <div className="py-2 px-2" id="step6">
                            <CustomizedButton variant="lightGreen" size="md" className="radius-md w-100 font-weight-bold" >
                                ثبت سفارش<FiChevronLeft size="20" className="mr-1" />
                            </CustomizedButton>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Demo
