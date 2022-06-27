import React, { useEffect } from "react";
import ButtonElement from "../../../../elements/form/button/Button";
import { FiChevronLeft, FiChevronRight, FiDollarSign } from "react-icons/fi";
import { BsChevronLeft } from "react-icons/bs";
import Styles from "./Education.module.scss";

const EducationLevel3 = ({
  handelClickNextLevel,
  handleClickBack,
  educationShow,
  setState,
  state,
  activeTab,
  handleClickEnd,
}) => {
  useEffect(() => {
    // if (state) {
    //   setState(false);
    // }
    setTimeout(() => {
      setState(true);
    }, 500);
  }, [educationShow]);

  return (
    <>
      <div className="py-5 px-5">
        <div
          className={`${Styles.Visible} ${
            state && Styles.VisibleActive
          } d-flex border rounded-15 border-success row  mb-5 `}
          style={{ minHeight: "150px" }}
        >
          {" "}
          <div className="col d-flex align-items-center justify-content-center">
            <p
              className={`${Styles.Visible} ${
                state && Styles.VisibleActive
              } grayBlue  d-flex align-items-center justify-content-center text-justify m-0`}
            >
              {activeTab === "buy"
                ? educationShow === 3 && state
                  ? " در مرحله اول مانند تصویر روی بخش خرید ارز کلیک کنید."
                  : educationShow === 4 && state
                  ? "در مرحله دوم ارز دیجیتال برای خرید را انتخاب کنید."
                  : educationShow === 5 && state
                  ? "در مرحله سوم مقدار پرداختی به ریال را در فیلد مشخص شده وارد کنید."
                  : educationShow === 6 && state
                  ? "در مرحله چهارم مقدار ارز دریافتی به صورت خودکار در فیلد مشخص‌شده به شما نشان داده خواهد شد."
                  : educationShow === 7 && state
                  ? "با کلیک بر روی دکمه خرید وارد صفحه درگاه پرداخت بانکی می‌شوید. پس از وارد کردن اطلاعات کارت بانکی حود و تایید آنها ارز مورد نظر شما خریداری خواهد شد."
                  : ""
                : ""}

              {activeTab === "sell"
                ? educationShow === 3 && state
                  ? "در مرحله اول مانند تصویر روی فروش خرید ارز کلیک کنید."
                  : educationShow === 4 && state
                  ? "در مرحله دوم ارز دیجیتال برای فروش را انتخاب کنید."
                  : educationShow === 5 && state
                  ? "در مرحله سوم مقدار پرداختی به ریال را در فیلد مشخص شده وارد کنید."
                  : educationShow === 6 && state
                  ? "در مرحله چهارم مقدار ارز پرداختی به صورت خودکار در فیلد مشخص‌ شده به شما نشان داده خواهد شد."
                  : educationShow === 7 && state
                  ? "با کلیک بر روی دکمه فروش و تایید آن، ارز مورد نظر شما فروخته خواهد شد."
                  : ""
                : ""}
            </p>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-between">
          <div className="d-flex w-75">
            <ButtonElement
              onClick={handleClickBack}
              variant="outline-lightBlue"
              size="md"
              className="px-4 py-lg-2 h-100 size-4 yekan-Medium ms-3"
            >
              <FiChevronRight />
              قبلی
            </ButtonElement>
            {educationShow !== 7 && (
              <ButtonElement
                onClick={handelClickNextLevel}
                variant="outline-lightBlue"
                size="md"
                className="px-4 py-lg-2 h-100 size-4 yekan-Medium"
              >
                بعدی
                <FiChevronLeft />
              </ButtonElement>
            )}
          </div>
          <div onClick={handleClickEnd}>
            <p
              className="size-2"
              style={{
                color: "#FB8C00",
                borderBottom: "1px solid #FB8C00",
                cursor: "pointer",
              }}
            >
              پایان آموزش
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationLevel3;
