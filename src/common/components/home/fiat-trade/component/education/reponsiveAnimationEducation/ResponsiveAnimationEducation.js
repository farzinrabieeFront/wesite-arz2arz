import React from "react";
import Styles from "../../marketForms/MarketForms.module.scss";
import ButtonElement from "../../../../../elements/form/button/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ResponsiveAnimationEducation = ({
  educationShow,
  handelClickNextLevel,
  handleClickBack,
  handleClickNextLevelType,
  state,
}) => {
  return (
    <>
      <div
        className={`${Styles.posReponsiveParent} ${
          educationShow >= 3 && state && Styles.posReponsiveParentActive
        }  `}
      >
        {" "}
        <div
          className={`${
            educationShow >= 3 && state && Styles.posReponsiveChild
          }`}
        >
          در مرحله اول مانند تصویر روی بخش خرید ارز کلیک کنید.
          {educationShow === 3 && (
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
          )}
          {educationShow > 3 && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default ResponsiveAnimationEducation;
