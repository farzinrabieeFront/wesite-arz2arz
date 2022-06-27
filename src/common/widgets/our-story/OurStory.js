import React from "react";

import Styles from "./OurStory.module.scss";
import { Col, Row } from "react-bootstrap";
import Title from "../../components/elements/title/Title";
import CustomizedSwiper from "../../../common/components/elements/swiper/CustomizedSwiper";

import { SwiperSlide } from "swiper/react";

const OurStory = () => {
  return (
    <div className={`${Styles.storyWrapper} py-5 position-relative`}>
      <Title
        lightTitle="داستان"
        darkTitle="ما"
        className={`${Styles.title} justify-content-center justify-content-md-start`}
      />
      <CustomizedSwiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={50}
        speed={1000}
        navigationCustom
        mousewheel
        effect={"fade"}
        className={Styles.swiper}
        prevBtn={Styles.btnPrev}
        nextBtn={Styles.btnNext}
      >
        <SwiperSlide>
          <Row className={`${Styles.storyItem} pe-4 mb-5 center-content`}>
            <Col xs="12" md="6" className="center-content">
              <div className="mt-4 px-5">
                <h2 className="size-4 yekan-Medium">تاسیس صرافی</h2>
                <p className="size-2 FaNum">مرداد 1400</p>
                <p className={`${Styles.text} size-3 text-gray-5 text-justify`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </Col>
            <Col xs="8" md="6">
              <img src="/images/index/our-story.svg" alt="" />
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row className={`${Styles.storyItem} pe-4 mb-5 center-content`}>
            <Col xs="12" md="6" className="center-content">
              <div className="mt-4 px-5">
                <h2 className="size-4 yekan-Medium">تاسیس صرافی</h2>
                <p className="size-2 FaNum">مرداد 1400</p>
                <p className={`${Styles.text} size-3 text-gray-5 text-justify`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </Col>
            <Col xs="8" md="6">
              <img src="/images/index/our-story.svg" alt="" />
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row className={`${Styles.storyItem} pe-4 mb-5 center-content`}>
            <Col xs="12" md="6" className="center-content">
              <div className="mt-4 px-5">
                <h2 className="size-4 yekan-Medium">تاسیس صرافی</h2>
                <p className="size-2 FaNum">مرداد 1400</p>
                <p className={`${Styles.text} size-3 text-gray-5 text-justify`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </Col>
            <Col xs="8" md="6">
              <img src="/images/index/our-story.svg" alt="" />
            </Col>
          </Row>
        </SwiperSlide>
      </CustomizedSwiper>
    </div>
  );
};

export default OurStory;
