import React from "react";
import Styles from "./Description.module.scss";
import { Button } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { descriptionsData } from "../../data";
const Description = ({
  setTransactionType,
  transactionType,
  setIslearning,
  isLearning = false,
  next,
  prev,
  currentStep,
}) => {
  const totalStep = descriptionsData.length - 1;
  return (
    <div className={Styles.box}>
      {!isLearning ? (
        <>
          <h1 className={Styles.title}>
            <span className="yekan-black h1 mb-3 d-block">آموزش آسان</span>
            <span className="h2 d-block">معاملات ارزهای دیجیتال</span>
          </h1>
          <div className="d-flex align-items-center gainsboro mt-5">
            <span className={`${Styles.img} ml-3`}>
              <img src="./images/learning-transaction-ic_01.png" />
            </span>

            <p className="mb-0">
              اگر برای معاملات خرید و فروش خود نیاز به آموزش و راهنمایی بیشتری
              دارید برروی یکی از دکمه های زیر کلیک کنید
            </p>
          </div>
          <div
            className={`${Styles.buttons} mt-5 d-flex justify-content-between py-3`}
          >
            <div className={`${Styles.items} px-2`}>
              <Button
                variant="lightGreen"
                className="rounded-pill p-3"
                onClick={() => {
                  if (transactionType !== "buy") {
                    setTransactionType("buy");
                  }
                  setIslearning(true);
                  next();
                }}
              >
                آموزش خرید از ما<span className="text-white px-2">|</span>
                <span className="text-white h5 mb-0">buy</span>
              </Button>
              <p className={`${Styles.text} lightGreen mb-0 mt-1`}>
                اگر میخواهید از ما ارز بخرید
              </p>
            </div>
            <div className={`${Styles.items} px-2`}>
              <Button
                variant="lightRed"
                className="rounded-pill p-3"
                onClick={() => {
                  if (transactionType !== "sell") {
                    setTransactionType("sell");
                  }
                  setIslearning(true);
                  next();
                }}
              >
                آموزش فروش به ما<span className="text-white px-2">|</span>
                <span className="text-white h5 mb-0">sell</span>
              </Button>
              <p className={`${Styles.text} lightRed mb-0 mt-1`}>
                اگر میخواهید به ما ارز بفروشید
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className={Styles.isLearning}>
          <div>
            <p>
              <span className="text-white h5">خرید از ما</span>{" "}
              <span className="lightGreen mr-5 btn btn-light py-1 rounded-pill">
                buy
              </span>
            </p>
            <p className="lightGreen small mb-0">
              <span className={`${Styles.border} pt-2 d-inline-block`}>
                اگر می‌خواهید از ما ارز بخرید
              </span>
            </p>
          </div>
          <div className="d-flex align-items-center gainsboro mt-5">
            <span className={`${Styles.img} ml-3`}>
              <img src={`./images/${descriptionsData[currentStep].icon}`} />
            </span>

            <span className="mb-0">{descriptionsData[currentStep].text}</span>
          </div>

          <div className="d-flex mt-5 justify-content-end">


            {
              currentStep ?
                <Button
                  variant="outline-light"
                  className="radius-md p-3 ml-3"
                  onClick={() => {
                    prev();
                    if (!currentStep) {
                      setIslearning(false)
                    }
                  }}
                >

                  <FiChevronRight size="20" className="mr-1" />
                        قبلی
                </Button>
                : ""
            }

            {
              currentStep < totalStep ?
                <Button
                  variant="light"
                  className="radius-md darkBlue p-3"
                  onClick={() => next()}
                >
                  بعدی <FiChevronLeft size="20" className="ml-1" />
                </Button>
                :
                <Button
                  variant="yellow"
                  className="radius-md darkBlue p-3"
                  onClick={() => setIslearning(false)}
                >
                  پایان آموزش <FiChevronLeft size="20" className="ml-1" />

                </Button>

            }

          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
