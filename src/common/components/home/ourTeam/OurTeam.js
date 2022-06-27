import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Styles from "./OurTeam.module.scss";
import Title from "../../elements/title/Title";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";

const data = [
  {
    titleLink: "hoseinifinance.com",
    title: "حسینی فایننس",
    text: "اگر به دنبال خرید و فروش موفق و فراگیری مهارت‌های سرمایه گذاری و ترید در بازارهای مالی مختلف مانند بازار بورس و ارزهای دیجیتال هستید، می‌توانید دوره‌های آموزشی و جامع استاد محمد حسینی را از سایت حسینی فایننس با بهترین قیمت تهیه نمایید.",
    link: "/",
    key: "hf",
  },
  {
    titleLink: "walletcenter.store",
    title: "ولت سنتر",
    text: "«ولت سنتر» معتبرترین فروشگاه اینترنتی ایرانی در حوزه فروش تخصصی کیف پول ‌های سخت افزاری، که با مناسبت ترین قیمت‌ها، ارسال رایگان و پشتیبانی ۲۴ ساعته آماده خدمت به شما عزیزان است. برای تجربه خریدی امن با ضمانت اصالت کالا با ما همراه شوید.",
    link: "/",
    key: "wc",
  },
  {
    titleLink: "iranchart.com",
    title: "ایران چارت",
    text: "وب سایت آموزشی «ایران چارت» با ارائه بیش از ۴۰۰ مقاله، آموزش تصویری، پادکست و محتوای رایگان و حرفه‌ای در حوزه ارزهای دیجیتال همواره به دنبال بالا بردن سطح دانش علاقه‌مندان در این زمینه است. همین حالا با عضویت در خانواده ایران چارت با کاربرد ارزهای دیجیتال در دنیای واقعی آشنا شوید.",
    link: "/",
    key: "ic",
  },
  {
    titleLink: "arz2arz.com",
    title: "ارز تو ارز",
    text: "«ارز تو ارز» معتبرترین صرافی آنلاین ایرانی در حوزه خرید و فروش ارزهای دیجیتال است که با استفاده از پیشرفته‌ترین تکنولوژی‌های روز دنیا و مناسب‌ترین کارمزد به صورت ۲۴ ساعته به شما عزیزان خدمت‌رسانی می‌کند. مبادلات خود را به ساده‌ترین شکل در سایت ارز تو ارز انجام دهید.",
    link: "/",
    key: "az",
  },
];

const OurTeam = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="py-5 container">
      <Row className="justify-content-center align-items-center">
        <Title
          lightTitle="خانواده "
          darkTitle="مــا"
          className="d-md-none center-content"
        />
        <Col lg={6} className={`${Styles.pics}`}>
          <div
            className={`${Styles.logo} ${Styles.hoseiniFinance}  ${
              data[activeItem].key === "hf" ? Styles.active : ""
            } transition-5`}
            onClick={() => setActiveItem(0)}
          >
            {data[activeItem].key === "hf" ? (
              <img src="/images/hoseiniFinance_logo-w.png" alt="حسینی فایننس" />
            ) : (
              <img src="/images/hoseiniFinance_logo.png" alt="حسینی فایننس" />
            )}
          </div>
          <div
            className={`${Styles.logo} ${Styles.walletCenter} ${
              data[activeItem].key === "wc" ? Styles.active : ""
            } transition-5`}
            onClick={() => setActiveItem(1)}
          >
            {data[activeItem].key === "wc" ? (
              <img src="/images/walletCenter_logo-w.png" alt="ولت سنتر" />
            ) : (
              <img src="/images/walletCenter_logo.png" alt="ولت سنتر" />
            )}
          </div>

          <div
            className={`${Styles.logo} ${Styles.arzToarz}  ${
              data[activeItem].key === "az" ? Styles.active : ""
            } transition-5`}
            onClick={() => setActiveItem(3)}
          >
            {data[activeItem].key === "az" ? (
              <img src="/images/arzTpArz_logo-w.png" alt="ارز تو ارز" />
            ) : (
              <img src="/images/arzTpArz_logo.png" alt="ارز تو ارز" />
            )}
          </div>
          <div
            className={`${Styles.logo} ${Styles.iranChart}  ${
              data[activeItem].key === "ic" ? Styles.active : ""
            } transition-5`}
            onClick={() => setActiveItem(2)}
          >
            {data[activeItem].key === "ic" ? (
              <img src="/images/iranChart_logo-w.png" alt="ایران چارت" />
            ) : (
              <img src="/images/iranChart_logo.png" alt="ایران چارت" />
            )}
          </div>
        </Col>
        <Col lg={6} className={`${Styles.desc} text-right px-lg-4 mb-5`}>
          <Title
            lightTitle="خانواده "
            darkTitle="مــا"
            className="d-none d-sm-flex"
          />
          <h3 className="darkBlue yekan-ExtraBold mt-5 mb-3">
            {data[activeItem].title}
          </h3>
          <p className="grayBlue mb-3 mb-lg-5 text-justify">
            {data[activeItem].text}
          </p>
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className={`${Styles.wideRow} d-flex`}>
              <a
                href={data[activeItem].link}
                target="_blank"
                className={`${Styles.linkButton} text-blue `}
              >
                {" "}
                {data[activeItem].titleLink} <AiOutlineGlobal size="21" />
              </a>
            </div>
            <div
              className={`${Styles.wideRow} d-flex align-items-center justify-content-center`}
            >
              <span
                className={`${Styles.arrows} gainsboro ml-3`}
                onClick={() =>
                  setActiveItem((prev) => (prev > 0 ? prev - 1 : 3))
                }
              >
                <HiArrowRight size="20" />
              </span>

              {data.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`${Styles.circle} ${
                      index === activeItem ? Styles.active : ""
                    } mx-2`}
                    onClick={() => setActiveItem(index)}
                  >
                    <FaCircle size="8" />
                  </span>
                );
              })}

              <span
                className={`${Styles.arrows} gainsboro mr-3`}
                onClick={() =>
                  setActiveItem((prev) => (prev < 3 ? prev + 1 : 0))
                }
              >
                <HiArrowLeft size="20" />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurTeam;
