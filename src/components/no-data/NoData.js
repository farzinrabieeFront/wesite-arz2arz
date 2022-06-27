import React from "react";
// import nodata from "../../assets/images/a2z-special-icon-2.png";
import nodata from "../../../public/images/a2z-special-icon-2.png";
import Styles from "./NoData.module.scss";

const NoData = ({ text }) => {
  return (
    <div className={`${Styles.noData} `}>
      <img src={nodata} />
      <span className="mt-3 size-4 text-gray-3">
        {" "}
        {text || "داده ای موجود نیست"}
      </span>
    </div>
  );
};

export default NoData;
