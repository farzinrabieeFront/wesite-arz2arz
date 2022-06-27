import React, { useState } from "react";
import Styles from "./MarketForms.module.scss";
import { Col } from "react-bootstrap";
import Buy from "../buy/Buy";
import Sell from "../sell/Sell";
import ButtonElement from "../../../../elements/form/button/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ResponsiveAnimationEducation from "../education/reponsiveAnimationEducation/ResponsiveAnimationEducation";

const MarketForms = ({
  refreshHistory,
  educationShow,
  setType,
  type,
  handelClickNextLevel,
  handleClickBack,
  handleClickNextLevelType,
  state,
}) => {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////state
  console.log("educationShow", educationShow);
  const [fiatBalances, setFiatBalances] = useState({});
  const [spotBalances, setSpotBalances] = useState({});
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////return
  return (
    <>
      <div className={`${Styles.containerMarket}`}>
        {/*<ResponsiveAnimationEducation*/}
        {/*  handleClickBack={handleClickBack}*/}
        {/*  educationShow={educationShow}*/}
        {/*  handelClickNextLevel={handelClickNextLevel}*/}
        {/*  handleClickNextLevelType={handleClickNextLevelType}*/}
        {/*  state={state}*/}
        {/*/>*/}
        <div
          className={` ${educationShow >= 3 && Styles.BorderAnimation1} ${
            educationShow === 4
              ? Styles.BorderAnimation12
              : educationShow === 5
              ? Styles.BorderAnimation13
              : educationShow === 6
              ? Styles.BorderAnimation14
              : educationShow === 7
              ? Styles.BorderAnimation15
              : ""
          }`}
        ></div>
        <div
          className={`${educationShow >= 3 && Styles.BorderAnimation2} ${
            educationShow === 4
              ? Styles.BorderAnimation22
              : educationShow === 5
              ? Styles.BorderAnimation23
              : educationShow === 6
              ? Styles.BorderAnimation24
              : educationShow === 7
              ? Styles.BorderAnimation25
              : ""
          }`}
        ></div>
        <div
          className={`${educationShow >= 3 && Styles.BorderAnimation3} ${
            educationShow === 4
              ? Styles.BorderAnimation32
              : educationShow === 5
              ? Styles.BorderAnimation33
              : educationShow === 6
              ? Styles.BorderAnimation34
              : educationShow === 7
              ? Styles.BorderAnimation35
              : ""
          }`}
        ></div>
        {/*<div className={Styles.BorderAnimation4}></div>*/}
        <div
          className={`${Styles.formTabs} 
           w-100 d-flex flex-wrap  pt-5 px-4 px-lg-0 `}
        >
          <div className={` d-flex w-100`}>
            <Col md={3} xs={6} className="pe-lg-5 px-2 w-50">
              <div
                className={`${Styles.tab} ${
                  type === "buy"
                    ? "bg-success btn-success text-white"
                    : `${Styles.tabDefault} text-gray-4`
                } pointer p-2 text-center rounded-12 bordered`}
                onClick={() => setType("buy")}
              >
                <span className="size-3 fw-500">خرید ارز</span>
              </div>
            </Col>

            <Col md={3} xs={6} className="ps-lg-5 px-2 w-50">
              <div
                className={`${Styles.tab} ${
                  type === "sell"
                    ? "bg-danger btn-danger text-white"
                    : `${Styles.tabDefault} text-gray-4`
                } pointer p-2 text-center rounded-12 bordered`}
                onClick={() => setType("sell")}
              >
                <span className="size-3 fw-500">فروش ارز</span>
              </div>
            </Col>
          </div>
        </div>

        <div
          className={`
           
           flex-wrap d-flex`}
        >
          <Col md={6} xs={12} className="px-lg-4 px-3 px-md-3 mb-3 w-100">
            {type === "buy" ? (
              <Buy
                balance={fiatBalances}
                spotBalance={spotBalances}
                refreshHistory={refreshHistory}
              />
            ) : (
              <Sell
                spotBalance={spotBalances}
                refreshHistory={refreshHistory}
              />
            )}
          </Col>
        </div>
      </div>
    </>
  );
};

export default MarketForms;
