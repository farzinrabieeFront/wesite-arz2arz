import React, { useEffect } from "react";
import Styles from "./EducationTrade.module.scss";
import ButtonElement from "../../../../elements/form/button/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const EducationLevel3 = ({
  educationShow,
  state,
  handelClickNextLevel,
  setState,
  handleClickBack,
  handleClickEnd,
  activeTab,
}) => {
  useEffect(() => {
    // if (state) {
    //   setState(false);
    // }
    setTimeout(() => {
      setState(true);
    }, 200);
  }, [educationShow]);

  return (
    <>
      <div className="py-5 px-5">
        <div
          className={`${Styles.Visible} ${
            state && Styles.VisibleActive
          } d-flex border rounded-15 border-success row  mb-5`}
          style={{ minHeight: "170px" }}
        >
          {" "}
          <div
            className="d-flex align-items-center  col-2 p-0"
            style={{ width: "77px" }}
          >
            <img
              src={"/images/BitcoinBuy-1.png"}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col d-flex align-items-center">
            <p
              className={`${Styles.Visible} ${
                state && Styles.VisibleActive
              } grayBlue  d-flex align-items-center justify-content-center text-justify m-0`}
            >
              {" "}
              {activeTab === "market"
                ? educationShow === 3 && state
                  ? "در مرحله دوم ارز پایه و ارز درخواستی را جهت سفارش گذاری آنی انتخاب کنید."
                  : educationShow === 4 && state
                  ? "در مرحله سوم می توانید  قیمت بازار ارز پایه و درخواستی انتخاب شده را مشاهده کنید"
                  : educationShow === 5 && state
                  ? "در مرحله چهارم مقدار ارز پایه برای سفارش گذاری را وارد کنید."
                  : educationShow === 6 && state
                  ? "در این مرحله می توانید جمع مقدار ارز درخواستی با احتساب کسر کارمزد را مشاهده کنید."
                  : educationShow === 7 && state
                  ? "در مرحله آخر با کلیک بر روی دکمه سفارش خود را نهایی کنید." +
                    ""
                  : educationShow === 8 && state
                  ? "با کلیک بر روی دکمه خرید وارد صفحه درگاه پرداخت بانکی می‌شوید. پس از وارد کردن اطلاعات کارت بانکی حود و تایید آنها ارز مورد نظر شما خریداری خواهد شد."
                  : ""
                : ""}
              {activeTab === "limit"
                ? educationShow === 3 && state
                  ? "در مرحله دوم ارز پایه و ارز درخواستی را جهت سفارش گذاری آنی انتخاب کنید."
                  : educationShow === 4 && state
                  ? "در این مرحله می توانید قیمت مورد نظر برای سفارش گذاری در  بازار ارز پایه و درخواستی انتخاب شده را وارد کنید."
                  : educationShow === 5 && state
                  ? "در مرحله چهارم مقدار ارز پایه برای سفارش گذاری را وارد کنید."
                  : educationShow === 6 && state
                  ? "در این مرحله می توانید جمع مقدار ارز درخواستی با احتساب کسر کارمزد را مشاهده کنید."
                  : educationShow === 7 && state
                  ? "در مرحله آخر با کلیک بر روی دکمه سفارش خود را نهایی کنید." +
                    ""
                  : educationShow === 8 && state
                  ? "با کلیک بر روی دکمه خرید وارد صفحه درگاه پرداخت بانکی می‌شوید. پس از وارد کردن اطلاعات کارت بانکی حود و تایید آنها ارز مورد نظر شما خریداری خواهد شد."
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
            {educationShow !== 8 && (
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
