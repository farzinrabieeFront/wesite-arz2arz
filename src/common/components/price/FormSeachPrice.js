import React from "react";
import Styles from "../../../styles/Price.module.scss";
import { FiSearch } from "react-icons/fi";

const FormSearchPrice = () => {
  return (
    <>
      <form className="pb-3 mb-3 d-flex justify-content-center w-100">
        <div className={`${Styles.form} gainsboro text-right rounded-pill`}>
          <div className="me-4 ms-3">
            <span className={`${Styles.icon} gainsboro`}>
              <FiSearch size="20" />
            </span>
          </div>
          <div className={`${Styles.parentInput} w-75`}>
            <input
              type="text"
              placeholder="ارز مورد نظر خود را جستجو کنید"
              className="w-100"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormSearchPrice;
