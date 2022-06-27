import React from "react";

import Styles from "./CategoryCards.module.scss";
import { Row, Col } from "react-bootstrap";
import CustomizedSwiper from "../../elements/swiper/CustomizedSwiper";
import { SwiperSlide } from "swiper/react";

const CategoryCards = () => {
  return [
    <Row
      className={`${Styles.categoryCards} d-none d-md-flex justify-content-between`}
    >
      <Col
        xs="3"
        className="d-flex flex-column justify-content-between flex-nowrap"
      >
        <Col xs="12" className={`${Styles.card} p-0`}>
          <img
            src="./images/index/grid-1.png"
            alt=""
            className="radius-md w-100"
          />
          <div
            className={`${Styles.overlay} d-flex align-items-end text-white p-2`}
          >
            <Col xs="7" className="d-flex">
              <h2 className={`${Styles.lineHeight} size-2 m-0`}>
                لیست صرافی های آنلاین اینترنتی ارز دیجیتال ایران
              </h2>
            </Col>
            <Col xs="5" className="d-flex flex-column align-items-end">
              <span className={`${Styles.lineHeight} size-1 m-0`}>
                ۱۷ دقیقه پیش
              </span>
              <span className="size-1 m-0 text-blue">#آموزشی</span>
            </Col>
          </div>
        </Col>
        <Col xs="12" className={`${Styles.card} p-0`}>
          <img
            src="./images/index/grid-2.png"
            alt=""
            className="radius-md w-100"
          />
          <div
            className={`${Styles.overlay} d-flex align-items-end text-white p-2`}
          >
            <Col xs="7" className="d-flex">
              <h2 className={`${Styles.lineHeight} size-2 m-0`}>
                تحلیل و بررسی انواع ارز دیجیتال
              </h2>
            </Col>
            <Col xs="5" className="d-flex flex-column align-items-end">
              <span className={`${Styles.lineHeight} size-1 m-0`}>
                ۱۷ دقیقه پیش
              </span>
              <span className="size-1 m-0 text-blue">#آموزشی</span>
            </Col>
          </div>
        </Col>
      </Col>
      <Col xs="6" className={`${Styles.card} p-0`}>
        <img
          src="./images/index/grid-3.png"
          alt=""
          className="radius-md w-100"
        />
        <div
          className={`${Styles.overlay} d-flex align-items-end text-white p-2`}
        >
          <Col xs="9" className="d-flex">
            <h2 className={`${Styles.lineHeight} size-2 m-0`}>
              بهترین استراتژی ترید ارز دیجیتال + ۶ استراتژی محبوب برای خرید و
              فروش رمزارزها در دنیای مدرن
            </h2>
          </Col>
          <Col xs="3" className="d-flex flex-column align-items-end">
            <span className={`${Styles.lineHeight} size-1 m-0`}>
              ۱۷ دقیقه پیش
            </span>
            <span className="size-1 m-0 text-blue">#آموزشی</span>
          </Col>
        </div>
      </Col>
      <Col xs="3" className="d-flex flex-column justify-content-between">
        <Col xs="12" className={`${Styles.card} p-0`}>
          <img
            src="./images/index/grid-1.png"
            alt=""
            className="radius-md w-100"
          />
          <div
            className={`${Styles.overlay} d-flex align-items-end text-white p-2`}
          >
            <Col xs="7" className="d-flex">
              <h2 className={`${Styles.lineHeight} size-2 m-0`}>
                صرافی غیر متمرکز چیست و بهترین‌ های آن کدام است؟
              </h2>
            </Col>
            <Col xs="5" className="d-flex flex-column align-items-end">
              <span className={`${Styles.lineHeight} size-1 m-0`}>
                ۱۷ دقیقه پیش
              </span>
              <span className="size-1 m-0 text-blue">#آموزشی</span>
            </Col>
          </div>
        </Col>
        <Col xs="12" className={`${Styles.card} p-0`}>
          <img
            src="./images/index/grid-2.png"
            alt=""
            className="radius-md w-100"
          />
          <div
            className={`${Styles.overlay} d-flex align-items-end text-white p-2`}
          >
            <Col xs="7" className="d-flex">
              <h2 className={`${Styles.lineHeight} size-2 m-0`}>
                ۱۱ اشتباه رایج در تحلیل تکنیکال که باید از آن اجتناب کنید
              </h2>
            </Col>
            <Col xs="5" className="d-flex flex-column align-items-end">
              <span className={`${Styles.lineHeight} size-1 m-0`}>
                ۱۷ دقیقه پیش
              </span>
              <span className="size-1 m-0 text-blue">#آموزشی</span>
            </Col>
          </div>
        </Col>
      </Col>
    </Row>,
    <Row className={`${Styles.categoryCards} d-md-none`}>
      <CustomizedSwiper
        slidesPerView={1}
        spaceBetween={50}
        loop
        navigationCustom
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel
        className={Styles.swiper}
        navWrapper={Styles.navWrapper}
        prevBtn={Styles.btnPrev}
        nextBtn={Styles.btnNext}
      >
        <SwiperSlide>
          <Col xs="12" className={`${Styles.card} p-0`}>
            <img
              src="./images/index/grid-3.png"
              alt=""
              className="radius-md w-100"
            />
            <div
              className={`${Styles.overlay} d-flex flex-column justify-content-end text-white p-2`}
            >
              <Col xs="12" className="d-flex">
                <h2 className={`${Styles.lineHeight} size-2 m-0 mb-2`}>
                  بهترین استراتژی ترید ارز دیجیتال + ۶ استراتژی محبوب برای خرید
                  و فروش رمزارزها در دنیای مدرن
                </h2>
              </Col>
              <Col
                xs="12"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <span className="size-1 m-0">۱۷ دقیقه پیش</span>
                <span className="size-1 m-0 text-blue">#آموزشی</span>
              </Col>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col xs="12" className={`${Styles.card} p-0`}>
            <img
              src="./images/index/grid-3.png"
              alt=""
              className="radius-md w-100"
            />
            <div
              className={`${Styles.overlay} d-flex flex-column justify-content-end text-white p-2`}
            >
              <Col xs="12" className="d-flex">
                <h2 className={`${Styles.lineHeight} size-2 m-0 mb-2`}>
                  بهترین استراتژی ترید ارز دیجیتال + ۶ استراتژی محبوب برای خرید
                  و فروش رمزارزها در دنیای مدرن
                </h2>
              </Col>
              <Col
                xs="12"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <span className="size-1 m-0">۱۷ دقیقه پیش</span>
                <span className="size-1 m-0 text-blue">#آموزشی</span>
              </Col>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col xs="12" className={`${Styles.card} p-0`}>
            <img
              src="./images/index/grid-3.png"
              alt=""
              className="radius-md w-100"
            />
            <div
              className={`${Styles.overlay} d-flex flex-column justify-content-end text-white p-2`}
            >
              <Col xs="12" className="d-flex">
                <h2 className={`${Styles.lineHeight} size-2 m-0 mb-2`}>
                  بهترین استراتژی ترید ارز دیجیتال + ۶ استراتژی محبوب برای خرید
                  و فروش رمزارزها در دنیای مدرن
                </h2>
              </Col>
              <Col
                xs="12"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <span className="size-1 m-0">۱۷ دقیقه پیش</span>
                <span className="size-1 m-0 text-blue">#آموزشی</span>
              </Col>
            </div>
          </Col>
        </SwiperSlide>
        <SwiperSlide>
          <Col xs="12" className={`${Styles.card} p-0`}>
            <img
              src="./images/index/grid-3.png"
              alt=""
              className="radius-md w-100"
            />
            <div
              className={`${Styles.overlay} d-flex flex-column justify-content-end text-white p-2`}
            >
              <Col xs="12" className="d-flex">
                <h2 className={`${Styles.lineHeight} size-2 m-0 mb-2`}>
                  بهترین استراتژی ترید ارز دیجیتال + ۶ استراتژی محبوب برای خرید
                  و فروش رمزارزها در دنیای مدرن
                </h2>
              </Col>
              <Col
                xs="12"
                className="d-flex justify-content-between align-items-center mt-2"
              >
                <span className="size-1 m-0">۱۷ دقیقه پیش</span>
                <span className="size-1 m-0 text-blue">#آموزشی</span>
              </Col>
            </div>
          </Col>
        </SwiperSlide>
      </CustomizedSwiper>
    </Row>,
  ];
};

export default CategoryCards;
