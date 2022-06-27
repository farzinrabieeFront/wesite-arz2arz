import React, { useCallback, useRef } from "react";

import Styles from "./CustomizedSwiper.module.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Mousewheel, Pagination, EffectFade } from "swiper";

const CustomizedSwiper = ({
  direction = "horizontal",
  slidesPerView = 1,
  spaceBetween = 50,
  speed = 1000,
  navigationCustom = false,
  mousewheel = false,
  pagination = false,
  loop = false,
  effect,
  className,
  navWrapper,
  prevBtn,
  nextBtn,
  children,
  breakpoints,
  navigation,
}) => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Swiper
      ref={sliderRef}
      direction={direction}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      speed={speed}
      mousewheel={mousewheel}
      pagination={pagination}
      loop={loop}
      effect={effect ? effect : "fade"}
      modules={[Mousewheel, Pagination]}
      className={`${Styles.swiperWrapper} ${className}`}
      breakpoints={breakpoints}
      navigation={navigation}
    >
      {navigationCustom ? (
        <div className={`${navWrapper} d-flex justify-content-between`}>
          <IoIosArrowUp
            size="20"
            onClick={handlePrev}
            className={`${prevBtn} ${Styles.btn} pointer`}
          />
          <IoIosArrowDown
            size="20"
            onClick={handleNext}
            className={`${nextBtn} ${Styles.btn} pointer`}
          />
        </div>
      ) : null}
      {children}
    </Swiper>
  );
};

export default CustomizedSwiper;
