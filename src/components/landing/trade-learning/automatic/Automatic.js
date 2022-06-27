import { useEffect, useRef, useState } from "react";
import Styles from "./Automatic.module.scss";
import { Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";

//react-icons
import { FaChevronLeft } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import { FiChevronLeft } from "react-icons/fi";
import { RiWalletLine } from "react-icons/ri";
//components
import CustomizedInput from "../../../form/input/Input";
import CustomizedButton from "../../../form/button/Button";
import Title from "../../../title/Title";
import RangeInput from "../../../../components/range/RangeInput";
import AutomaticSteps from "./components/Steps";

const Automatic = ({ handleCurrencylist }) => {
  const [activeTransactionType, setActiveTransactionType] = useState("buy");
  const [isLearning, setIsLearning] = useState(false);
  const [step, setStep] = useState(-1);
  const holeRef = useRef();
  let demo, currentElement;

  useEffect(() => {
    if (isLearning) {
      demo = document.getElementById("AuStep0");
      let demoWidth = demo.offsetWidth;
      console.log(demoWidth);
      let demoHeight = demo.offsetHeight;

      if (step) {
        currentElement = document.getElementById(`AuStep${step}`);
        let holeWidth = currentElement.offsetWidth;
        let holeHeight = currentElement.offsetHeight;
        let holeTop = currentElement.offsetTop;
        let holeRight =
          demo.getBoundingClientRect().right -
          currentElement.getBoundingClientRect().right;

        holeRef.current.style.width = `${holeWidth}px`;
        holeRef.current.style.height = `${holeHeight}px`;
        holeRef.current.style.top = `${holeTop}px`;
        holeRef.current.style.right = `${holeRight}px`;
      } else {
        holeRef.current.style.width = `${demoWidth}px`;
        holeRef.current.style.height = `${demoHeight}px`;
        holeRef.current.style.right = `0px`;
        holeRef.current.style.top = `0px`;
      }
    }
  }, [step]);

  return (
    <div
      className={`${
        isLearning ? Styles.isLearning : null
      } d-flex align-items-center flex-wrap flex-row-reverse py-5 position-relative `}
    >
      <Col
        lg={6}
        className={`${Styles.description} ${
          isLearning ? Styles.pcDescription : null
        } ${isLearning ? Styles[`step${step}`] : null}`}
      >
        {!isLearning ? (
          <div className={Styles.box}>
            <h1 className={Styles.title}>
              <Title
                lightTitle="معاملات "
                darkTitle="اتوماتیک ارزها"
                className="text-right"
                icon="/images/currency-conversion.png"
              />
            </h1>
            <div
              className={`${Styles.mdNone} d-flex align-items-center gray mt-5`}
            >
              <p className="mb-0 size-6 line-height-2 text-justify">
                داخل پنل کاربری شما در صرافی، بخش دیگری برای تبدیل اتوماتیک
                ارزها به یکدیگر وجود دارد. در این روش شما به راحتی می‌توانید
                زمان رسیدن یک ارز به یک قیمت مشخص که مد نظر شماست، به‌صورت
                اتوماتیک ارزتان را به ارز دیگری تبدیل کنید. در باکس روبه‌رو بخش
                معاملات اتوماتیک ارزها را مشاهده می‌کنید و با کلیک کردن روی دکمه
                شروع آموزش می‌توانید قبل از انجام هرگونه مبادله‌ای این بخش را به
                صورت کامل یادبگیرید و سپس اقدام به معامله و خرید و فروش کنید. پر
                سود باشید!
              </p>
            </div>
            <div
              className={`${Styles.buttons} ${Styles.mdNone} mt-5 d-flex justify-content-end py-3`}
            >
              <div>
                <CustomizedButton
                  variant="darkBlue"
                  size="md"
                  className="size-7 font-weight-bold py-2 radius-md"
                >
                  شروع معاملات اتوماتیک
                  <FiChevronLeft size="20" />
                </CustomizedButton>
              </div>
              <div className="pr-3">
                <CustomizedButton
                  variant="outline-darkBlue"
                  size="md"
                  className="size-7 font-weight-bold py-2 radius-md"
                >
                  پرسش‌های متداول معاملات اتوماتیک
                  <FiChevronLeft size="20" />
                </CustomizedButton>
              </div>
            </div>
          </div>
        ) : (
          <AutomaticSteps
            step={step}
            next={() => setStep((prev) => prev + 1)}
            prev={() => setStep((prev) => prev - 1)}
            setIsLearning={() => setIsLearning()}
          />
        )}
      </Col>

      <Col lg={6} className={`${Styles.demo} justify-content-between`}>
        <div
          id="AuStep0"
          className={`${Styles.box} ${
            isLearning ? Styles.isLearningBox : null
          } border rounded-20`}
        >
          {isLearning ? (
            <div
              className={`${Styles.hole}  ${Styles[`holeStep${step}`]}`}
              ref={holeRef}
            ></div>
          ) : null}

          <div className={`${Styles.shadow} py-2 px-2`}>
            <div className="d-flex flex-wrap flex-row-reverse align-items-center justify-content-between py-2 px-2 size-6">
              <Col xs={8} className="px-0 mb-sm-0 text-left">
                <span className="gainsboro yekan-Medium size-7">
                  <RiWalletLine size="16" className="ml-1" />
                  موجودی شما :
                  <span className="mr-2 grayBlue size-6 ltr d-inline-block">
                    12 BTC
                  </span>
                </span>
              </Col>
              <Col xs={4} className="text-right px-0">
                <span className="grayBlue yekan-Medium size-6 ">
                  انتخاب جفت ارز
                </span>
              </Col>
            </div>

            <Col lg={12} className="py-2 px-2" id="AuStep1">
              <div className="text-right d-flex">
                <label
                  class={`${Styles.selectionLabel} yekan-Medium px-1 size-7`}
                >
                  انتخاب ارز مبدا
                </label>
              </div>
              <div
                className={`${Styles.selection} pointer p-2 rounded-10 d-flex justify-content-between align-items-center`}
                onClick={handleCurrencylist}
              >
                <div className="d-flex align-items-center">
                  <img
                    className={`${Styles.imgIcon} ml-2`}
                    src="./images/btc_ic.png"
                    alt="bitcoin"
                  />

                  <span className="m-0 yekan-Medium text-dark size-6">
                    بیت کوین
                  </span>
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
            <Col lg={12} className="py-2 px-2" id="AuStep2">
              <div className="text-right d-flex">
                <label
                  class={`${Styles.selectionLabel} yekan-Medium px-1 size-7`}
                >
                  انتخاب ارز مقصد
                </label>
              </div>
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

                  <span className="m-0 yekan-Medium text-dark size-6">
                    تتر
                  </span>
                  <span className="mr-1 gainsboro size-7">(USDT)</span>
                </div>
                <div className="pointer">
                  <span className="link-CurrencySelection">
                    <span className="yekan-Bold size-7">انتخاب ارز </span>
                    <HiChevronLeft />
                  </span>
                </div>
              </div>
            </Col>
          </div>

          <Formik
            initialValues={{ price: "", amount: "", total: "" }}
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
                className="py-2 px-2 d-flex flex-wrap justify-content-center"
              >
                <Col lg={12} className="py-2 px-2" id="AuStep3">
                  <CustomizedInput
                    label="قیمت BTC به USDT"
                    className="border-lightGray py-4 rounded-10 size-7"
                    type="text"
                    name="price"
                    // placeholder="30,000"
                    textIcon="USDT"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    errorMessage={errors.price && touched.price && errors.price}
                  />
                </Col>
                <Col lg={12} className="py-2 px-2" id="AuStep4">
                  <CustomizedInput
                    label="مقدار پرداختی BTC "
                    className="border-lightGray py-4 rounded-10 size-7"
                    type="text"
                    name="amount"
                    textIcon="BTC"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                    errorMessage={
                      errors.amount && touched.amount && errors.amount
                    }
                  />
                </Col>
                <Col lg={12} className="py-1 pr-2 pl-3 mt-3" id="AuStep5">
                  <RangeInput
                    ranges={[25, 50, 75, 100]}
                    onChange={(val) => setPercentSelected(val)}
                  />
                </Col>
                <Col lg={12} className="py-2 px-2" id="AuStep6">
                  <CustomizedInput
                    label="مقدار دریافتی USDT"
                    className="border-lightGray py-4 rounded-10 size-7"
                    type="text"
                    textIcon="USDT"
                    name="total"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.total}
                    errorMessage={errors.total && touched.total && errors.total}
                  />
                </Col>

                <Col
                  lg={8}
                  md={8}
                  sm={8}
                  xs={8}
                  className="py-2 px-2"
                  id="AuStep7"
                >
                  <CustomizedButton
                    isFullWidth
                    type="submit"
                    className=" rounded-pill"
                    size="sm"
                  >
                    <span className="my-1 size-4 d-flex align-items-center justify-content-center yekan-ExtraBold">
                      دریافت USDT
                      <FaChevronLeft className="mr-2" />
                    </span>
                  </CustomizedButton>
                </Col>
              </Form>
            )}
          </Formik>
        </div>

        {!isLearning ? (
          <div
            className={`${Styles.startLearning} text-center text-lg-right pr-2`}
          >
            <p className={`${Styles.mdNone} yellow small mb-2 text-right`}>
              برای شروع کلیک کنید
            </p>
            <CustomizedButton
              variant="yellow"
              size="md"
              className="size-7 radius-md   px-5 px-lg-2  yekan-ExtraBold"
              onClick={() => {
                setIsLearning(true);
                setStep(0);
              }}
            >
              شروع آموزش
              <FiChevronLeft size="20" className="mr-1" />
            </CustomizedButton>
          </div>
        ) : null}
      </Col>
    </div>
  );
};

export default Automatic;
