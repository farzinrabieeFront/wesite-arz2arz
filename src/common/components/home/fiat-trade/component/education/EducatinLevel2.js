import React from "react";

const EducationLevel2 = ({ handleClickNextLevelType }) => {
  return (
    <>
      <div className="py-5 px-5">
        <div
          className="d-flex border rounded-15 border-success mb-5 align-items-center justify-content-center"
          style={{ minHeight: "150px" }}
        >
          {" "}
          <p className="grayBlue mb-0  text-justify px-2 ">
            {" "}
            برای شروع آموزش خرید و فروش ارز دیجیتال بر روی یکی از دکمه های زیر
            کلیلک کنید ؛ توجه داشته باشید که معاملات شما به صورت ریالی محاسبه می
            شود .
          </p>
        </div>
        <div className="d-flex w-75">
          <div
            onClick={() => handleClickNextLevelType("buy")}
            className={`${
              // type === "buy"
              "bg-success btn-success text-white shadow ms-3 w-50"
              // : "bg-light text-gray-4"
            } pointer p-2 text-center rounded-12 bordered`}
            // onClick={() => setType("buy")}
          >
            <span className="size-3 fw-500">آموزش خرید</span>
          </div>
          <div
            onClick={() => handleClickNextLevelType("sell")}
            className={`${
              // type === "buy"
              "bg-danger btn-danger text-white shadow w-50"
              // : "bg-light text-gray-4"
            } pointer p-2 text-center rounded-12 bordered`}
            // onClick={() => setType("buy")}
          >
            <span className="size-3 fw-500">آموزش فروش</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationLevel2;
