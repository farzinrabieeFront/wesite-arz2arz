import React, { useEffect, useState } from "react";

// style
import Styles from "./Landingbanner.module.scss";
// icons
import { FiUser, FiDollarSign } from "react-icons/fi";

import { Col, Container, Row } from "react-bootstrap";
import ReactTextTransition, { presets } from "react-text-transition";
import ButtonElement from "../../elements/form/button/Button";

export default function Landingbanner() {
  const texts = ["ساده ترین روش", "کمترین تعرفه کارمزد", "بیشترین تنوع ارز"];
  const textColor = ["blue", "warning", "danger"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTextIndex((prev) => prev + 1);
    }, 5000);
  }, []);

  return (
    <div className={`${Styles.bannerContainer} mb-5`}>
      <div className="container-fluid container-lg px-4 px-lg-0">
        <Row className={`center-content flex-row-reverse`}>
          <Col xs="12" sm="10" md="6" className={`${Styles.bannerImg} p-0`}>
            <img src="/images/index/banner-img.png" alt="ارز تو ارز" />
          </Col>
          <Col xs="12" sm="10" md="6" className="d-flex flex-column p-md-0">
            <h2
              className={`${Styles.bannerTitle} text-right size-7 text-gray-5 yekan-ExtraBold`}
            >
              تجربه معاملات ارزهای دیجیتال با{" "}
              <ReactTextTransition
                text={texts[textIndex % texts.length]}
                springConfig={presets.gentle}
                className={`text-${textColor[textIndex % texts.length]}`}
                // delay={0}
                inline
              />
            </h2>
            <p className="size-2 text-right mt-4">
              {`ساده ترین روش معامله، کمترین تعرفه خرید و فروش و بیشترین تنوع \n ارز رو با ما تجربه کنید`}
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start mt-3 mt-md-5">
              <a
                href="http://user.arz2arz.net/login"
                className="d-none d-sm-flex ml-1"
              >
                <ButtonElement
                  variant="lightBlue"
                  size="md"
                  className="px-3 py-3 h-100 size-4 yekan-Medium"
                >
                  <FiUser size="24" /> ثبت نام در ارزتو ارز
                </ButtonElement>
              </a>
              <a href="http://user.arz2arz.net/login" className="d-sm-none">
                <ButtonElement
                  variant="lightBlue"
                  size="md"
                  className="px-4 py-2 size-4 yekan-Medium"
                >
                  <FiUser size="24" /> ثبت نام
                </ButtonElement>
              </a>
              <a href="" className="me-3">
                <ButtonElement
                  variant="outline-lightBlue"
                  size="md"
                  className="px-4 py-lg-2 h-100 size-4 yekan-Medium"
                >
                  <FiDollarSign size="24" /> قیمت ارز
                </ButtonElement>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
      <div className={`${Styles.cirlceBack2} d-none d-lg-flex`}></div>
    </div>
  );
}
