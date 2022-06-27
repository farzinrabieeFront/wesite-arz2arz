import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Title from "../../common/components/elements/title/Title";
import { articles } from "../../common/constant/blog";
import NewsCard from "../../common/components/elements/newsCard/NewsCard";
import CategoryCards from "../../common/components/blog/category-cards/CategoryCards";
import Styles from "../../styles/Blog.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import CustomizedSwiper from "../../common/components/elements/swiper/CustomizedSwiper";

const Blog = () => {
  return (
    <>
      <div className="container-fluid container-lg py-5">
        <Row className="my-5 center-content">
          <CategoryCards />
        </Row>
      </div>

      <div className={Styles.backImG}>
        <div className="container-fluid container-lg ">
          <Row className="justify-content-around my-5">
            <Col sm={12}>
              <Title
                lightTitle="اخبار"
                darkTitle="تکنولوژی"
                waveLine
                className="justify-content-center justify-content-md-start"
              />
            </Col>
            <Col lg={12}>
              <Row
                className={`${Styles.articles} d-flex justify-content-lg-center w-100`}
              >
                <CustomizedSwiper
                  loop
                  slidesPerView={4}
                  spaceBetween={50}
                  speed={1000}
                  navigationCustom={true}
                  breakpoints={{
                    360: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 5,
                    },
                  }}
                  effect={"fade"}
                  className={Styles.swiper}
                  navWrapper={Styles.navWrapper}
                  prevBtn={Styles.btnPrev}
                  nextBtn={Styles.btnNext}
                  pagination
                >
                  {articles.map((item) => (
                    <SwiperSlide key={`article-id-${item.id}`}>
                      <Fragment>
                        <NewsCard data={item} />
                      </Fragment>
                    </SwiperSlide>
                  ))}
                </CustomizedSwiper>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={Styles.backImG1}>
        <div className="container-fluid container-lg">
          <Row className="justify-content-around my-5">
            <Col sm={12}>
              <Title
                lightTitle="اخبار"
                darkTitle="روز"
                className="justify-content-center justify-content-md-start"
                waveLine
              />
            </Col>
            <Col lg={12}>
              <Row
                className={`${Styles.articles} d-flex justify-content-lg-center w-100`}
              >
                <CustomizedSwiper
                  slidesPerView={4}
                  spaceBetween={50}
                  speed={1000}
                  navigationCustom={true}
                  loop
                  breakpoints={{
                    360: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 5,
                    },
                  }}
                  effect={"fade"}
                  className={Styles.swiper}
                  navWrapper={Styles.navWrapper}
                  prevBtn={Styles.btnPrev}
                  nextBtn={Styles.btnNext}
                  pagination
                >
                  {articles.map((item) => (
                    <SwiperSlide key={`article-id-${item.id}`}>
                      <Fragment>
                        <NewsCard data={item} />
                      </Fragment>
                    </SwiperSlide>
                  ))}
                </CustomizedSwiper>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={Styles.backImG}>
        <div className="container-fluid container-lg">
          <Row className="justify-content-around my-5">
            <Col sm={12}>
              <Title
                lightTitle="اخبار"
                darkTitle="روز"
                className="justify-content-center justify-content-md-start"
                waveLine
              />
            </Col>
            <Col lg={12}>
              <Row
                className={`${Styles.articles} d-flex justify-content-lg-center w-100`}
              >
                <CustomizedSwiper
                  loop
                  slidesPerView={4}
                  spaceBetween={50}
                  speed={1000}
                  navigationCustom={true}
                  breakpoints={{
                    360: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 5,
                    },
                  }}
                  effect={"fade"}
                  className={Styles.swiper}
                  navWrapper={Styles.navWrapper}
                  prevBtn={Styles.btnPrev}
                  nextBtn={Styles.btnNext}
                  pagination
                >
                  {articles.map((item) => (
                    <SwiperSlide key={`article-id-${item.id}`}>
                      <Fragment>
                        <NewsCard data={item} />
                      </Fragment>
                    </SwiperSlide>
                  ))}
                </CustomizedSwiper>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Blog;
