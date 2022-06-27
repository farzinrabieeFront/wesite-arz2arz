/** internal import */
import React, { useEffect, useRef, useState } from "react";
import Styles from "./OrderForms.module.scss";
/** external import */
// import { useLocation } from "react-router";
/** components import */
import Market from "../forms/market/Market";
import Limit from "../forms/limit/Limit";

export default function OrderForms({
  refreshHistory,
  educationShow,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className={`${Styles.orderForms} px-3  bg-white  `}>
      <div
        className={`${educationShow >= 3 && Styles.BorderAnimation1} ${
          educationShow === 4
            ? Styles.BorderAnimation12
            : educationShow === 5
            ? Styles.BorderAnimation13
            : educationShow === 6
            ? Styles.BorderAnimation14
            : educationShow === 7
            ? Styles.BorderAnimation15
            : educationShow === 8
            ? Styles.BorderAnimation16
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
            : educationShow === 8
            ? Styles.BorderAnimation26
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
            : educationShow === 8
            ? Styles.BorderAnimation36
            : ""
        }`}
      ></div>
      <div className={`${Styles.orderTab} row py-5`}>
        <div className="col-6">
          <div
            className={`${Styles.marketTab} ${
              activeTab === "market" && Styles.active
            } text-center pointer w-100`}
          >
            <div
              onClick={() => setActiveTab("market")}
              className={`${
                activeTab === "market" ? Styles.active : ""
              } text-center py-2`}
            >
              <span className="fw-700 size-4">تبدیل</span>
              <span className="fw-700 en size-4 me-1">( Market )</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className={`${Styles.limitTab} ${
              activeTab === "limit" && Styles.active
            } text-center pointer w-100`}
          >
            <div
              onClick={() => setActiveTab("limit")}
              className={`${
                activeTab === "limit" ? Styles.active : ""
              } text-center py-2`}
            >
              <span className="fw-700 size-4">اتوماتیک</span>
              <span className="fw-700 size-4 en me-1">( Limit )</span>
            </div>
          </div>
        </div>
      </div>
      {activeTab === "limit" ? (
        <Limit refreshHistory={refreshHistory} />
      ) : (
        <Market refreshHistory={refreshHistory} />
      )}
    </div>
  );
}
