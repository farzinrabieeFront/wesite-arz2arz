import React, { useState } from "react";
import Styles from "./FaqCard.module.scss";
import { FiChevronDown } from "react-icons/fi";

const FaqCard = ({ onClick, active, data }) => {
  return (
    <div
      className={`${Styles.box}  ${
        active ? Styles.active : ""
      }  cursor-pointer transition size-2`}
      onClick={onClick}
    >
      <div
        className={`${Styles.question} d-flex justify-content-between py-3 px-4 darkBlue`}
      >
        <span className="yekan-Medium">{data?.question}</span>
        <span className={Styles.icon}>
          <FiChevronDown size={22} />
        </span>
      </div>
      {/*{active ? (*/}
      <p
        className={`${Styles.answer} py-4 px-3 m-0 h-100  grayBlue text-justify`}
      >
        {data?.answer}
      </p>
      {/*) : null}*/}
    </div>
  );
};

export default FaqCard;
