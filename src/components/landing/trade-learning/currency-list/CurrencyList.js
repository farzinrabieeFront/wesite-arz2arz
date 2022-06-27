import React from 'react'
import Styles from "./CurrencyList.module.scss";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";


const CurrencyList = ({ close }) => {
  return (
    <div className={`${Styles.search}`}>
      <div className={`${Styles.head} p-4`}>
        <div className="d-flex align-items-center justify-content-between">
          <span className="darkBlue h6 mb-0">انتخاب ارز</span>
          <span className="grayBlue">
            {" "}
            <RiCloseFill
              size="25"
              className="pointer"
              onClick={close}
            />{" "}
          </span>
        </div>
        <div className="mt-3 text-right">
          <div className={`${Styles.input} rounded-pill`}>
            <FiSearch className={`${Styles.icon} gainsboro`} size="25" />
            <input
              className="gainsboro small"
              placeholder="جستجو نام ارز؛ به عنوان مثال: بیت کوین یا Bitcoin یا BTC"
            />
          </div>
        </div>
      </div>

      <div className={`${Styles.card} p-4`}>
        <div>
          <p className={`${Styles.title} size-6 mb-4 grayBlue p-1 text-center`}>
            ارزهای مهم و معروف
          </p>
          <div>
            <div
              className={`${Styles.items} transition pb-2 mb-2 d-flex align-items-center justify-content-between`}
            >
              <div className="d-flex align-items-center">
                <span className={`${Styles.img} ml-2`}>
                  <img src="./images/Bit_IC.png" />
                </span>
                <span className="text-right">
                  <span className="size-7 grayBlue mb-1 font-weight-bold d-block">
                    بیت کوین
                  </span>
                  <span className="size-7 gainsboro d-block mb-0">
                    Bitcoin
                  </span>
                </span>
              </div>
              <div>
                <span className="text-left">
                  <span className="size-7 grayBlue text-left size-6 font-weight-bold mb-1 d-block ltr">
                    4,930,366,298 IRR
                  </span>
                  <span className="size-7 text-left lightGreen size-6 d-block mb-0 ltr">
                    <BiCaretUp /> 12.81%
                  </span>
                </span>
              </div>
            </div>
            <div
              className={`${Styles.items} transition pb-2 mb-2 d-flex align-items-center justify-content-between`}
            >
              <div className="d-flex align-items-center">
                <span className={`${Styles.img} ml-2`}>
                  <img src="./images/Bit_IC.png" />
                </span>
                <span className="text-right">
                  <span className="size-7 grayBlue mb-1 font-weight-bold d-block">
                    بیت کوین
                  </span>
                  <span className="size-7 gainsboro d-block mb-0">
                    Bitcoin
                  </span>
                </span>
              </div>
              <div>
                <span className="text-left">
                  <span className="size-7 grayBlue text-left size-6 font-weight-bold mb-1 d-block ltr">
                    4,930,366,298 IRR
                  </span>
                  <span className="size-7 text-left lightGreen size-6 d-block mb-0 ltr">
                    <BiCaretUp /> 12.81%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className={`${Styles.title} size-6 mb-4 grayBlue p-1 text-center`}>
            سایر ارزها
          </p>
          <div>
            <div
              className={`${Styles.items} transition pb-2 mb-2 d-flex align-items-center justify-content-between`}
            >
              <div className="d-flex align-items-center">
                <span className={`${Styles.img} ml-2`}>
                  <img src="./images/Light_IC.png" />
                </span>
                <span className="text-right">
                  <span className="size-7 grayBlue mb-1 font-weight-bold d-block">
                    تتر
                  </span>
                  <span className="size-7 gainsboro d-block mb-0">
                    Tether-USDT
                  </span>
                </span>
              </div>
              <div>
                <span className="text-left">
                  <span className="size-7 grayBlue text-left size-6 font-weight-bold mb-1 d-block ltr">
                    4,930,366,298 IRR
                  </span>
                  <span className="size-7 text-left lightGreen size-6 d-block mb-0 ltr">
                    <BiCaretUp /> 12.81%
                  </span>
                </span>
              </div>
            </div>
            <div
              className={`${Styles.items} transition pb-2 mb-2 d-flex align-items-center justify-content-between`}
            >
              <div className="d-flex align-items-center">
                <span className={`${Styles.img} ml-2`}>
                  <img src="./images/Light_IC.png" />
                </span>
                <span className="text-right">
                  <span className="size-7 grayBlue mb-1 font-weight-bold d-block">
                    لایت کوین
                  </span>
                  <span className="size-7 gainsboro d-block mb-0">
                    Litecoin-LTC
                  </span>
                </span>
              </div>
              <div>
                <span className="text-left">
                  <span className="size-7 grayBlue text-left size-6 font-weight-bold mb-1 d-block ltr">
                    4,930,366,298 IRR
                  </span>
                  <span className="size-7 text-left lightRed size-6 d-block mb-0 ltr">
                    <BiCaretDown /> 12.81%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyList
