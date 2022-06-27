import React from "react";
import Styles from "./EducationTrade.module.scss";

const EducationLevel2 = ({ handleClickNextLevelType }) => {
  return (
    <>
      <div className="py-5 px-5">
        <div className="d-flex border rounded-15 border-success mb-5">
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
          <p className="grayBlue mb-3 mb-lg-5 text-justify mt-5">
            بیت دو گزینه سفارش تبدیل آنی (Market) و سفارش گذاری قیمت دار (Limit)
            انتخاب کنید.
          </p>
        </div>
        <div className="d-flex w-75">
          <div
            onClick={() => handleClickNextLevelType("market")}
            className={`${
              // type === "buy"
              `${Styles.btnGray}  text-gray-4  shadow ms-3 w-50`
              // : "bg-light text-gray-4"
            } pointer p-2 text-center rounded-12 bordered`}
            // onClick={() => setType("buy")}
          >
            <span className="size-3 fw-500">تبدیل (market)</span>
          </div>
          <div
            onClick={() => handleClickNextLevelType("limit")}
            className={`${
              // type === "buy"
              `${Styles.btnGray}  shadow w-50`
              // : "bg-light text-gray-4"
            } pointer p-2 text-center rounded-12 bordered`}
            // onClick={() => setType("buy")}
          >
            <span className="size-3 fw-500">اتوماتیک (limit)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationLevel2;
