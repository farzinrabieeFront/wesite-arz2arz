import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

import Styles from "../styles/ContactUs.module.scss";
import { FiMessageSquare, FiChevronLeft, FiMapPin } from "react-icons/fi";
import { BiSupport, BiCheck } from "react-icons/bi";
import { isMobile, deviceName, contactUsFormSchema } from "../utils";
import Title from "../common/components/elements/title/Title";
import { Formik, Form, FastField } from "formik";
import CustomizedInput from "../components/form/input/Input";
import ButtonElement from "../common/components/elements/form/button/Button";

function ContactUs({ userAgent }) {
  const [isLoading, setIsLoading] = useState(false);
  const is_mobile = isMobile.any(userAgent);
  const device_name = deviceName(userAgent);

  const handleOpenMap = () => {
    switch (device_name) {
      case "Android":
      // case "BlackBerry":
      // case "iOS":
      default:
        window.open(
          "https://www.google.com/maps?ll=35.733848,51.345247&z=17&t=m&hl=en&gl=FR&mapclient=embed&cid=2701648819780614328",
          "_blank"
        );
    }
  };

  const onSendMessage = async (vals) => {
    setIsLoading(true);
    alert(vals.message);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(
        <div>
          <span>
            <BiCheck size={40} />
          </span>
          "پیام شما با موفقیت ارسال شد"
        </div>,
        {
          position: "bottom-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }, 1000);
  };

  const data = [
    { no: "احراز هویت", name: "خانم ایراندوست", phone: "۰۹۱۰۴۶۰۸۰۰۰" },
    { no: "احراز هویت", name: "خانم ایراندوست", phone: "۰۹۱۰۴۶۰۸۰۰۰" },
    { no: "احراز هویت", name: "خانم ایراندوست", phone: "۰۹۱۰۴۶۰۸۰۰۰" },
  ];

  return (
    <div className={`${Styles.backImG} position-relative`}>
      <div className={`${Styles.TriangleBack} d-none d-md-flex`}>
        <img src={"/svg/backgroundRightArrow.svg"} alt="" />
      </div>
      <div className={`${Styles.TriangleBack} d-flex d-md-none`}>
        <img src={"/svg/backgroundRightMobile.svg"} alt="" />
      </div>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
      <div className="container-fluid container-lg py-5 my-5">
        <Row className="justify-content-around">
          <Title
            lightTitle="تماس"
            darkTitle="با ما"
            waveLine
            className="justify-content-center justify-content-md-start"
          />
        </Row>
        <Row className="justify-content-center py-5 m-0">
          <Col
            xs="12"
            md="6"
            className={`mb-4 mb-md-0 d-flex justify-content-center p-0   pe-xxl-5`}
          >
            <div className={Styles.card}>
              <Formik
                initialValues={{
                  name: "",
                  phone: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={contactUsFormSchema}
                onSubmit={(vals) => {
                  onSendMessage(vals);
                }}
              >
                {({ isValid, dirty }) => (
                  <Form
                    className={`${Styles.formContact}  d-flex flex-wrap h-100 flex-column justify-content-between  m-0`}
                  >
                    <div>
                      <div className="d-flex text-blue mb-2">
                        <FiMessageSquare size="32" />
                        <p className="me-3  size-5 yekan-Bold">ارسال پیام</p>
                      </div>
                      <p className="size-2 text-gray-4 mb-0 mb-4">
                        با ما در تماس باشید.
                      </p>
                      <div className="d-flex flex-wrap">
                        <Col xs="12" lg="6" className="ps-lg-3 my-3">
                          <FastField
                            as={CustomizedInput}
                            className="radius-md p-3"
                            size="sm"
                            type="text"
                            label="نام و نام خانوادگی"
                            name="name"
                            autocomplete
                          />
                        </Col>
                        <Col xs="12" lg="6" className="pe-lg-3 my-3">
                          <FastField
                            as={CustomizedInput}
                            className="radius-md p-3"
                            size="sm"
                            type="tel"
                            label="شماره تماس"
                            name="phone"
                            autocomplete
                          />
                        </Col>
                        <Col xs="12" className="my-3">
                          <FastField
                            as={CustomizedInput}
                            className="radius-md p-3"
                            size="sm"
                            type="text"
                            label="موضوع"
                            name="subject"
                          />
                        </Col>
                        <Col xs={12} className="my-3">
                          <FastField
                            as={CustomizedInput}
                            className={`${Styles.input} radius-md`}
                            size="sm"
                            type="text"
                            label="پیام"
                            name="message"
                            textArea
                            rows={3}
                            maxLength={255}
                          />
                        </Col>
                      </div>
                    </div>
                    <div>
                      <Col xs="12" className="mt-4 mt-md-0">
                        <ButtonElement
                          type="submit"
                          variant="lightBlue"
                          size="md"
                          className="size-3 radius-md py-3 w-100 shadow font-weight-bold position-relative"
                          isLoading={isLoading}
                          disabled={!(isValid && dirty)}
                        >
                          ارسال
                          <FiChevronLeft
                            size="24"
                            className={Styles.buttonIcon}
                          />
                        </ButtonElement>
                      </Col>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col
            xs="12"
            md="6"
            className={`d-flex justify-content-center p-0 px-md-3 ps-xxl-5`}
          >
            <div className={`${Styles.card}`}>
              <div className="d-flex text-blue">
                <BiSupport size="32" />
                <p className="me-3 size-5 yekan-Bold">پشتیبانی</p>
              </div>
              <p className="size-2 text-gray-4 FaNum">
                ۷ روز هفته، ۲۴ ساعت روز، پاسخگوی تماس های شما هستیم.
              </p>
              <ul className={`${Styles.supporters} mt-4 px-2`}>
                {data.map((item, index) => {
                  return (
                    <Row
                      as="li"
                      key={index}
                      className="d-flex justify-content-between py-3"
                    >
                      <Col
                        xs="12"
                        lg="4"
                        className="text-gray-2 size-2 yekan-Medium mb-2 mb-md-0 text-lg-center"
                      >
                        {item.no}
                      </Col>
                      <Col
                        xs="6"
                        lg="4"
                        className="text-gray-4 size-2 yekan-Medium text-lg-center"
                      >
                        {item.name}
                      </Col>
                      <Col
                        xs="6"
                        lg="4"
                        className="text-gray-4 size-2 yekan-Medium FaNum text-lg-center"
                      >
                        {item.phone}
                        <img
                          src="/images/index/icon-call.svg"
                          alt=""
                          className="me-2"
                        />
                      </Col>
                    </Row>
                  );
                })}
              </ul>
              <div className="d-flex text-blue">
                <FiMapPin size="28" />
                <p className="me-3 size-5 yekan-Bold">آدرس</p>
              </div>
              <p className="size-2 text-gray-4 FaNum">
                تهران، مرزداران، خیابان ابراهیمی، برج الوند، طبقه 5 واحد 510
              </p>
              <div className="mb-3">
                <iframe
                  className={`${Styles.map} radius-md`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.692572096262!2d51.3428934151129!3d35.733778580182225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd898dea7aed%3A0x257e2f49a2e078b8!2sAlvand%20Tower!5e0!3m2!1sen!2sfr!4v1613806665865!5m2!1sen!2sfr"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${Styles.cirlceBack2} d-none d-lg-flex`}></div>
      <div className={`${Styles.TriangleBack2} d-none d-md-flex`}>
        <img src={"/svg/backgroundLeftArrow.svg"} alt="" />
      </div>
      <div className={`${Styles.TriangleBack2} d-flex d-md-none`}>
        <img src={"/svg/backgroundLeftMobile.svg"} alt="" />
      </div>
    </div>
  );
}

export default ContactUs;

ContactUs.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
    return {
      userAgent,
    };
  } else {
    userAgent = navigator.userAgent;
    return {
      userAgent,
    };
  }
};
