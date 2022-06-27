import React, { useEffect, useRef, useState } from 'react';
import { Formik } from "formik";
import { Col, Form, Button } from "react-bootstrap";
import Styles from './BuyAndSell.module.scss';

//react-icons
import { FaChevronLeft } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";

//components
import CustomizedInput from "../../../form/input/Input";
import CustomizedButton from "../../../form/button/Button";
import AllSteps from './components/Steps';


const BuyAndSell = ({ handleCurrencylist }) => {

    const [activeTransactionType, setActiveTransactionType] = useState("buy");
    const [isLearning, setIsLearning] = useState(false);
    const [step, setStep] = useState(-1)
    const holeRef = useRef();
    let demo, currentElement;

    useEffect(() => {
        if (isLearning) {
            demo = document.getElementById("step0");
            let demoWidth = demo.offsetWidth;
            let demoHeight = demo.offsetHeight;

            if (step > -1) {

                if (step === 1) {
                    currentElement = document.getElementById(`step1_${activeTransactionType}`);
                    if (activeTransactionType === 'buy') {

                        holeRef.current.classList.add('tabBuyBorder');
                    } else {
                        holeRef.current.classList.add('tabSellBorder');
                    }
                } else {
                    currentElement = document.getElementById(`step${step}`);
                    // console.log(currentElement);
                    if (activeTransactionType === 'buy') {
                        holeRef.current.classList.remove('tabBuyBorder');
                    } else {
                        holeRef.current.classList.remove('tabSellBorder');
                    }
                }

                let holeWidth = currentElement.offsetWidth;
                // console.log(holeWidth);
                let holeHeight = currentElement.offsetHeight;
                let holeTop = currentElement.offsetTop;
                let holeRight = demo.getBoundingClientRect().right - currentElement.getBoundingClientRect().right;

                holeRef.current.style.width = `${holeWidth}px`;
                holeRef.current.style.height = `${holeHeight}px`;
                holeRef.current.style.top = `${holeTop}px`;
                holeRef.current.style.right = `${holeRight}px`;

            }  
        }


    }, [step])

    return (
        <div className={`${Styles.background} d-flex align-items-stretch flex-row-reverse flex-wrap py-5 px-3`}>
            <Col lg={12} className={`${Styles.mobileTitle} ${Styles.description} mb-3 justify-content-center`}>
                <div className={Styles.box}>
                    <h1 className={`${Styles.title} text-center`}>
                        <span className="yekan-black h1 mb-3 d-block">آموزش آسان</span>
                        <span className="h2 d-block">معاملات ارزهای دیجیتال</span>
                    </h1>
                </div>
            </Col>
            <Col lg={6} md={12} className={`${Styles.demo}`}>
                <div id="step0" className={`${Styles.box} ${isLearning ? Styles.isLearning : null} border rounded-20`}>
                    {isLearning ?
                        <div className={`${Styles.hole}  ${Styles[`holeStep${step}`]} `} ref={holeRef}></div>
                        : null
                    }
                    <div className={`${Styles.tabs} d-flex align-items-stretch size-6`}>
                        <div id="step1_buy" onClick={() => setActiveTransactionType("buy")}
                            className={`${Styles.items} col-6 px-2 py-3 ${activeTransactionType === "buy" && `lightGreen ${Styles.active}`
                                }`}>
                            <span>خرید ارز</span>
                            <span
                                className={`btn ${activeTransactionType === "buy" ? "btn-lightGreen" : "btn-secondary"} mr-2 py-0 rounded-pill`}
                            >
                                BUY
                        </span>
                        </div>
                        <div id="step1_sell"
                            className={`${Styles.items} col-6 px-2 py-3 ${activeTransactionType === "sell" && `lightRed ${Styles.active}`
                                }`}
                            onClick={() => setActiveTransactionType("sell")}
                        >
                            <span>فروش ارز</span>
                            <span
                                className={`btn ${activeTransactionType === "sell" ? "btn-lightRed" : "btn-secondary"
                                    } mr-2 py-0 rounded-pill`}
                            >
                                SELL
                        </span>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap py-2 px-2">
                        <Col lg={12} className="py-2 px-2" id="step2" >
                            <div className="text-right"> <label class={`${Styles.selectionLabel} yekan-Medium px-1 size-7`}>انتخاب ارز</label></div>
                            <div
                                className={`${Styles.selection} pointer p-2 rounded-10 d-flex justify-content-between align-items-center`}
                                onClick={handleCurrencylist}
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        className={`${Styles.imgIcon} ml-2`}
                                        src="./images/btc_ic.png"
                                        alt="lightcoinIcon"
                                    />

                                    <span className="m-0 yekan-Medium text-dark size-6">بیت کوین</span>
                                    <span className="mr-1 gainsboro size-7">(BTC)</span>

                                </div>
                                <div className="pointer">
                                    <span className="link-CurrencySelection">
                                        <span className="yekan-Bold size-7">انتخاب ارز </span>
                                        <HiChevronLeft />
                                    </span>

                                </div>
                            </div>
                        </Col>

                        <Formik
                            initialValues={{ pay_amount: "", get_amount: "" }}
                            onSubmit={(values, { setSubmitting }) => {
                                onSubmit(values);
                                setSubmitting(false);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <Form onSubmit={handleSubmit} className="d-flex w-100 flex-wrap justify-content-center">
                                    <Col lg={12} className="py-2 px-2" id="step3">
                                        <CustomizedInput
                                            label="مقدار پرداختی"

                                            textIcon={`${activeTransactionType === "buy" ? "IRR" : "ETH"} `}
                                            amountString
                                            maxLength={15}
                                            className="border-lightGray size-7 py-4 rounded-10"
                                            type="text"
                                            name="pay_amount"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.pay_amount}
                                            errorMessage={
                                                errors.pay_amount && touched.pay_amount && errors.pay_amount
                                            }
                                        />
                                    </Col>
                                    <Col lg={12} className="py-2 px-2" id="step4">
                                        <CustomizedInput
                                            label="مقدار دریافتی"
                                            className="border-lightGray size-7  py-4 rounded-10"
                                            type="text"
                                            textIcon={`${activeTransactionType === "buy" ? "ETH" : "IRR"} `}
                                            name="get_amount"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.get_amount}
                                            errorMessage={
                                                errors.get_amount && touched.get_amount && errors.get_amount
                                            }
                                        />
                                    </Col>
                                    <Col lg={8} md={8} sm={8} xs={8} className="py-2 px-2" id="step5">
                                        {activeTransactionType === "buy" ?
                                            <CustomizedButton
                                                isFullWidth
                                                type="submit"
                                                variant="lightGreen "
                                                className=" rounded-pill"
                                                size="sm"
                                            >
                                                <span className="my-1  yekan-ExtraBold size-4 d-flex align-items-center justify-content-center">
                                                    خرید
                                                    <FaChevronLeft className="mr-2" />
                                                </span>
                                            </CustomizedButton>
                                            :
                                            <CustomizedButton
                                                isFullWidth
                                                type="submit"
                                                variant="lightRed "
                                                className=" rounded-pill"
                                                size="sm"
                                            >
                                                <span className="my-1 yekan-ExtraBold size-4 d-flex align-items-center justify-content-center">
                                                    فروش
                                                    <FaChevronLeft className="mr-2" />
                                                </span>
                                            </CustomizedButton>
                                        }
                                    </Col>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Col>

            <Col lg={6} md={12} className={`${Styles.description} ${isLearning ? Styles.pcDescription : null} ${isLearning ? Styles[`step${step}`] : null}`}>
                {
                    !isLearning ?
                        <div className={Styles.box}>
                            <div id="descBox" className={`${Styles.descBox} pt-3 pr-0 pr-lg-5`}>
                                <h1 className={`${Styles.title} ${Styles.mdNone} text-right`}>
                                    <span className="yekan-black h1 mb-3 d-block">آموزش آسان</span>
                                    <span className="h2 d-block">معاملات ارزهای دیجیتال</span>
                                </h1>
                                <div className="d-flex align-items-center gainsboro mt-2 mt-lg-5">
                                    <span className={`${Styles.img} ${Styles.mdNone} ml-3`}>
                                        <img src="./images/learning-transaction-ic_01.png" />
                                    </span>
                                    <p className={`${Styles.desc} mb-0 text-justify`}>
                                    اگر برای خرید و فروش ارز دیجیتال نیاز به آموزش دارید، بر روی یکی از دکمه‌های زیر کلیک کنید.
                                    توجه داشته باشید که معاملات شما در این بخش به صورت ریالی محاسبه می‌گردد.
                                    </p>
                                </div>
                            </div>
                            <div className={`${Styles.buttons} mt-3 d-flex justify-content-lg-around justify-content-center py-3`}>
                                <div className={`${Styles.items} px-2`}>
                                    <Button variant="lightGreen" className="rounded-pill p-3"
                                        onClick={() => {
                                            setIsLearning(true)
                                            setActiveTransactionType('buy')
                                            setStep(0)
                                        }}
                                    >
                                        آموزش خرید ارز
                                    </Button>
                                    <p className={`${Styles.text} text-white mb-0 mt-1`}>
                                        اگر می‌خواهید از ما ارز بخرید
                                    </p>
                                </div>
                                <div className={`${Styles.items} px-2`}>
                                    <Button variant="lightRed" className="rounded-pill p-3"
                                        onClick={() => {
                                            setIsLearning(true)
                                            setActiveTransactionType('sell')
                                            setStep(0)
                                        }}
                                    >
                                        آموزش فروش ارز
                                    </Button>
                                    <p className={`${Styles.text} text-white mb-0 mt-1`}>
                                        اگر می‌خواهید به ما ارز بفروشید
                                    </p>
                                </div>
                            </div>
                        </div>

                        :
                        <AllSteps step={step}
                            next={() => setStep((prev) => prev + 1)}
                            prev={() => setStep((prev) => prev - 1)}
                            setIsLearning={() => setIsLearning()}
                            activeTransactionType={activeTransactionType}
                        />
                }
            </Col>


        </div>
    )
}

export default BuyAndSell
