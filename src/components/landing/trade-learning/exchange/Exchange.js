
import React, { useState, useRef, useEffect } from 'react';
import Styles from './Exchange.module.scss';
import { Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";

//react-icons

import { FaChevronLeft } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiWalletLine, RiArrowUpDownLine } from "react-icons/ri";

//components
import CustomizedInput from "../../../form/input/Input";
import CustomizedButton from "../../../form/button/Button";
import Title from '../../../title/Title';
import ExchangeSteps from './components/Steps'
const Exchange = ({ handleCurrencylist }) => {

    const [isLearning, setIsLearning] = useState(false);
    const [step, setStep] = useState(-1)
    const holeRef = useRef();
    let demo, currentElement;



    useEffect(() => {

        if (isLearning) {
            demo = document.getElementById("ExStep0");
           
            let demoWidth = demo.offsetWidth;
            
            let demoHeight = demo.offsetHeight;
            

            if (step > -1) {
                currentElement = document.getElementById(`ExStep${step}`);

                let holeWidth = currentElement.offsetWidth;
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
        <div className={`  ${isLearning ? Styles.isLearning : null} d-flex align-items-center flex-wrap py-5 position-relative `}>
            <Col lg={6} md={12} className={`${Styles.description} ${isLearning ? Styles.pcDescription : null} ${isLearning ? Styles[`step${step}`] : null}`}>
                {
                    !isLearning ?
                        <div className={Styles.box}>
                            <h1 className={Styles.title}>
                                <Title lightTitle="معاملات " darkTitle="تبدیل ارزها به یکدیگر" className="text-right" icon="/images/currency-conversion.png" />
                            </h1>
                            <div className={`${Styles.mdNone} d-flex align-items-center gray mt-5`}>
                                <p className="mb-0 size-6 line-height-2 text-justify">داخل پنل کاربری شما در صرافی، بخشی برای تبدیل ارزها به یکدیگر وجود دارد و شما به سـادگی می‌تـوانید پس از احـراز هویت در صـرافی ارز تو ارز با استفاده از این بخش، ارزهـای دیجیتال خود را به یکدیـگر تبدیـل کنیـد. در باکس روبه‌رو با کلیک کردن روی «شروع آموزش» می‌توانید توضیحات مرتبط با هر فیلد را مطالعه کرده و سپس ارز مورد نظر خود را به راحت‌ترین شکل با ارز دیگری مبادله کنید. پر سود باشید!</p>
                            </div>
                            <div className={`${Styles.buttons} ${Styles.mdNone} mt-5 d-flex justify-content-end py-3`}>
                                <div >
                                    <CustomizedButton variant="darkBlue" size="md" className="font-weight-bold py-2 radius-md size-7" >
                                        شروع معاملات تبدیل<FiChevronLeft size="20" />
                                    </CustomizedButton>
                                </div>
                                <div className="pr-3">
                                    <CustomizedButton variant="outline-darkBlue" size="md" className="font-weight-bold py-2 radius-md size-7" >
                                        پرسش‌های متداول تبدیل<FiChevronLeft size="20" />
                                    </CustomizedButton>
                                </div>
                            </div>
                        </div>
                        :
                        <ExchangeSteps
                            step={step}
                            next={() => setStep((prev) => prev + 1)}
                            prev={() => setStep((prev) => prev - 1)}
                            setIsLearning={() => setIsLearning()}
                        />
                }
            </Col>
            <Col lg={6} md={12} className={Styles.demo} >
                <div id="ExStep0" className={`${Styles.box} ${isLearning ?Styles.isLearningBox:null}  border rounded-20`}>
                    {isLearning ?
                        <div className={`${Styles.hole} ${Styles[`holeStep${step}`]} `} ref={holeRef}></div>
                        : null
                    }
                    <Formik
                        initialValues={{ pay_amount: "", get_amount: "" }}
                        // validationSchema={loginFormSchema}
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
                            <Form
                                onSubmit={handleSubmit}
                                className={`${Styles.body} text-center py-2 px-2 d-flex flex-wrap justify-content-center`}
                            >

                                <Col lg={12} className="py-2 px-2">
                                    <div className="d-flex flex-wrap flex-row-reverse align-items-center justify-content-between size-6">
                                        <Col xs={8} className={` px-0 mb-0 text-left  `}>
                                            <span className="gainsboro size-7 yekan-Medium ">
                                                <RiWalletLine size="18" className="ml-1" />
                                                موجودی شما :<span className="grayBlue size-6 mr-2 ltr d-inline-block">12 BTC</span>
                                            </span>
                                        </Col>
                                        <Col xs={4} className={` px-0 text-right`}><span className="grayBlue size-6 yekan-Medium ">تبدیل BTC</span></Col>
                                    </div>
                                </Col>
                                <Col lg={12} className="py-2 px-2" id="ExStep1">
                                    <div className="text-right"> <label class={`${Styles.selectionLabel} yekan-Medium px-1 size-7`}>انتخاب ارز</label></div>
                                    <div
                                        className={`${Styles.selection} pointer p-2 rounded-10 d-flex justify-content-between align-items-center`}
                                        onClick={handleCurrencylist}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                className={`${Styles.imgIcon} ml-2`}
                                                src="./images/btc_ic.png"
                                                alt="bitcin"
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
                                <Col lg={12} className="py-2 px-2" id="ExStep2">
                                    <CustomizedInput
                                        label="مقدار پرداختی"
                                        type="text"
                                        textIcon="BTC"
                                        name="pay_amount"
                                        className="border-lightGray size-7  py-4 rounded-10"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.pay_amount}
                                        errorMessage={
                                            errors.pay_amount && touched.pay_amount && errors.pay_amount
                                        }
                                    />
                                </Col>
                                <Col lg={12} className="py-2 px-2">
                                    <div className={`${Styles.arrowBox}`}>
                                        <RiArrowUpDownLine className={`${Styles.arrow} link`} />
                                    </div>
                                </Col>
                                <Col lg={12} className="py-2 px-2">
                                    <div className="d-flex px-2 align-items-center justify-content-between size-7">
                                        <span className="grayBlue yekan-Medium size-6 ">به USDT </span>
                                        <span className="gainsboro size-7 yekan-Medium ">
                                            حداقل خرید :<span className="grayBlue mr-2 size-6 ltr d-inline-block">۰.۱ USDT</span>
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={12} className="py-2 px-2" id="ExStep3">
                                    <div className="text-right"> <label class={`${Styles.selectionLabel} yekan-Medium px-1 size-7`}>انتخاب ارز</label></div>
                                    <div
                                        className={`${Styles.selection} pointer p-2 rounded-10 d-flex justify-content-between align-items-center`}
                                        onClick={handleCurrencylist}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                className={`${Styles.imgIcon} ml-2`}
                                                src="./images/usd_ic.png"
                                                alt="tether"
                                            />

                                            <span className="m-0 yekan-Medium text-dark size-6">تتر</span>
                                            <span className="mr-1 gainsboro size-7">(USDT)</span>

                                        </div>
                                        <div className="pointer" >
                                            <span className="link-CurrencySelection">
                                                <span className="yekan-Bold size-7">انتخاب ارز </span>
                                                <HiChevronLeft />
                                            </span>

                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} className="py-2 px-2" id="ExStep4">
                                    <CustomizedInput
                                        label="مقدار دریافتی"
                                        type="text"
                                        textIcon="USDT"
                                        name="get_amount"
                                        className="border-lightGray size-7 py-4 rounded-10"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.get_amount}
                                        errorMessage={
                                            errors.get_amount && touched.get_amount && errors.get_amount
                                        }
                                    />
                                </Col>
                                <Col lg={8} md={8} sm={8} xs={8} className="py-2 px-2" id="ExStep5">
                                    <CustomizedButton
                                        isFullWidth
                                        type="submit"
                                        className=" rounded-pill"
                                        size="sm"
                                    >
                                        <span className="my-1 size-4 yekan-ExtraBold d-flex align-items-center justify-content-center">
                                        دریافت USDT
                                        <FaChevronLeft className="mr-2" />
                                        </span>
                                    </CustomizedButton>
                                </Col>
                            </Form>
                        )}
                    </Formik>
                </div>
                {!isLearning ?
                    <div className={`${Styles.startLearning} pl-2`}>
                        <p className={`${Styles.mdNone} yellow small mb-2 text-left`}>برای شروع کلیک کنید</p>
                        <Button variant="yellow" size="md" className="size-7   radius-md px-5 px-lg-2 yekan-ExtraBold"
                            onClick={() => {
                                setIsLearning(true)
                                setStep(0)
                            }}
                        >
                            <FiChevronRight size="20" className="ml-1" /> شروع آموزش
                    </Button>
                    </div>
                    : null
                }

            </Col>
        </div>
    )
}

export default Exchange
