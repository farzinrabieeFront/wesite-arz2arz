import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../common/components/elements/title/Title";
import Styles from "../styles/About.module.scss";
import OurStory from "../common/widgets/our-story/OurStory";

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

const About = () => {
  return (
    <div className={`${Styles.backImG} position-relative`}>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
      <div className="container-fluid container-lg py-5 my-5">
        <Row className="justify-content-around">
          <Col sm="12">
            <Title
              lightTitle="درباره"
              darkTitle="ارز تو ارز"
              className="justify-content-center justify-content-md-start"
              waveLine
            />
          </Col>
          <Col xs="12" className={`${Styles.ourTeamPic} center-content my-5`}>
            <img src="/images/index/aboutUs-img.png" alt="" />
          </Col>
          <Col xs="12">
            <p
              className={`${Styles.preText} text-center text-justify text-gray-4 size-4 mt-2`}
            >
              {` صرافی ارز تو ارز در نظر دارد با ایجاد بستری امن برای انجام تراکنش‌های نامحدود رمز ارزی، به عنوان پلتفرمی آنلاین با رابط \n کاربری آسان عمل کند. تیم ارز تو ارز در تلاش است با شفافیت در انتقال اطلاعات و حفظ حریم خصوصی کاربران، به عنوان \n امن‌ترین سامانه‌ی تبادل ارزهای دیجیتال در ایران رضایت کاربران خود را فراهم کند.`}
            </p>
          </Col>
        </Row>
        <OurStory />
      </div>
      <div className={`${Styles.cirlceBack2} d-none d-lg-flex`}></div>
    </div>
  );
};

export default About;
