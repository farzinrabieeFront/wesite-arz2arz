import React, { useState, useEffect, useRef } from "react";
import Styles from "./Demo.module.scss";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import { RiArrowUpDownLine, RiCloseFill } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
// components
import Input from "./input/Input";
import CustomizedButton from "../../../../../components/form/button/Button";
const icons = {
  bitcoin: "",
};
const Demo = ({
  setTransactionType,
  isLearning,
  transactionType,
  currentStep,
  currentEl,
}) => {
  const holeRef = useRef();
  const listCurrencyRef = useRef();
  const [showList, setShowList] = useState(false);
  let el, demo;
  useEffect(() => {
    demo = document.getElementById("demoBox");
    if (showList || currentEl === 'listCurrency') {
      listCurrencyRef.current.style.top = `10px`;

    } else {
      console.log('no');
      listCurrencyRef.current.style.top = `1000px`;
    }

    if (isLearning) {
      if (currentEl === 'listCurrency') {
        holeRef.current.style.top = `50%`;
        holeRef.current.style.right = `50%`;
        holeRef.current.style.width = `0`;
        holeRef.current.style.height = `0`;
      } else {
        if (currentStep === 0) {
          if (transactionType === "buy") {
            el = document.getElementById("buyTab");
          } else {
            el = document.getElementById("sellTab");
          }
        } else {
          el = document.getElementById(currentEl);
        }

        let topHole = el.getBoundingClientRect().top - demo.getBoundingClientRect().top;
        let rightHole = demo.getBoundingClientRect().right - el.getBoundingClientRect().right;


        holeRef.current.style.top = `${topHole}px`;
        holeRef.current.style.right = `${rightHole}px`;
        holeRef.current.style.width = `${el.offsetWidth}px`;
        holeRef.current.style.height = `${el.offsetHeight}px`;
      }

    }
  }, [currentEl, currentStep, isLearning, showList]);

  return (
    <div className={`${Styles.box} ${isLearning ? Styles.isLearning : ""}`} id="demoBox">
      {isLearning || showList ? (
        <div className={Styles.afterAnimation}>
          <div className={Styles.box}>
            {
              isLearning ?
                <div className={Styles.hole} ref={holeRef}></div>
                : null
            }
          </div>
        </div>
      ) : null}

      <div id="listCurrency" ref={listCurrencyRef} className={`${Styles.search}`}>
        <div className={`${Styles.head} p-4`}>
          <div className="d-flex align-items-center justify-content-between">
            <span className="darkBlue h6 mb-0">انتخاب ارز</span>
            <span className="grayBlue">
              {" "}
              <RiCloseFill size="25" className="cursor-pointer" onClick={() => setShowList(false)} />{" "}
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
            <p className={`${Styles.title} mb-4 grayBlue p-1 text-center`}>
              ارزهای مهم و معروف
            </p>
            <div>
              <div
                className={`${Styles.items} transition pb-2 mb-2 d-flex align-items-center justify-content-between`}
              >
                <div className="d-flex align-items-center">
                  <span className={`${Styles.img} ml-2`}>
                    <img src="/images/bitcoin_ic-rd.png" />
                  </span>
                  <span className="text-right">
                    <span className="subtitle grayBlue mb-1 font-weight-bold d-block">
                      بیت کوین
                    </span>
                    <span className="subtitle gainsboro d-block mb-0">
                      Bitcoin
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-left">
                    <span className="subtitle grayBlue font-weight-bold d-block ltr">
                      4,930,366,298 IRR
                    </span>
                    <span className="subtitle lightGreen d-block mb-0 ltr">
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
                    <img src="/images/bitcoin_ic-rd.png" />
                  </span>
                  <span className="text-right">
                    <span className="subtitle grayBlue mb-1 font-weight-bold d-block">
                      بیت کوین
                    </span>
                    <span className="subtitle gainsboro d-block mb-0">
                      Bitcoin
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-left">
                    <span className="subtitle grayBlue font-weight-bold d-block ltr">
                      4,930,366,298 IRR
                    </span>
                    <span className="subtitle lightGreen d-block mb-0 ltr">
                      <BiCaretUp /> 12.81%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div>
            <p className={`${Styles.title} mb-4 grayBlue p-1 text-center`}>
              سایر ارزها
            </p>
            <div>
              <div
                className={`${Styles.items} transition pb-2 mb-2 d-flex align-items-center justify-content-between`}
              >
                <div className="d-flex align-items-center">
                  <span className={`${Styles.img} ml-2`}>
                    <img src="/images/tt_ic-rd.png" />
                  </span>
                  <span className="text-right">
                    <span className="subtitle grayBlue mb-1 font-weight-bold d-block">
                      تتر
                    </span>
                    <span className="subtitle gainsboro d-block mb-0">
                      Tether-USDT
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-left">
                    <span className="subtitle grayBlue font-weight-bold d-block ltr">
                      4,930,366,298 IRR
                    </span>
                    <span className="subtitle lightGreen d-block mb-0 ltr">
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
                    <img src="/images/lightCoin_ic-rd.png" />
                  </span>
                  <span className="text-right">
                    <span className="subtitle grayBlue mb-1 font-weight-bold d-block">
                      لایت کوین
                    </span>
                    <span className="subtitle gainsboro d-block mb-0">
                      Litecoin-LTC
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-left">
                    <span className="subtitle grayBlue font-weight-bold d-block ltr">
                      4,930,366,298 IRR
                    </span>
                    <span className="subtitle lightGreen d-block mb-0 ltr">
                      <BiCaretUp /> 12.81%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${Styles.tabs}  d-flex align-items-stretch`}>
        <div
          id="buyTab"
          className={`${Styles.items} ${transactionType === "buy" ? Styles.active : ""
            }  py-3`}
          onClick={() => setTransactionType("buy")}
        >
          <span className="lightGreen h6">خرید از ما</span>
          <span className="btn-lightGreen mr-2 text-white btn py-1 rounded-pill">
            buy
          </span>
        </div>
        <div
          id="sellTab"
          className={`${Styles.items} ${transactionType === "sell" ? Styles.active : ""
            } py-3`}
          onClick={() => setTransactionType("sell")}
        >
          <span className="lightRed h6">فروش به ما</span>
          <span className="btn-lightRed mr-2 text-white btn py-1 rounded-pill">
            sell
          </span>
        </div>
      </div>
      <div className="px-2">
        <div id="activeLogoCurrency" className="px-2">
          <div className={`${Styles.header}  d-flex align-items-stretch `}>
            <div className={`${Styles.items} ${Styles.icon}  `}>
              <a
                className="d-flex align-items-center justify-content-center py-3"
                href="#"
              >
                {" "}
                <FaChevronRight />{" "}
              </a>
            </div>
            <div className={`${Styles.items}  `}>
              <a
                className="d-flex align-items-center justify-content-center py-3"
                href="#"
              >
                {" "}
                <img src="/images/ripple_ic.png" />{" "}
              </a>
            </div>
            <div className={`${Styles.items} ${Styles.active}  `}>
              <a
                className="d-flex align-items-center justify-content-center py-3"
                href="#"
              >
                {" "}
                <img src="/images/bitcoin_ic.png" />{" "}
              </a>
            </div>
            <div className={`${Styles.items} `}>
              <a
                className="d-flex align-items-center justify-content-center py-3"
                href="#"
              >
                {" "}
                <img src="/images/ripple_ic.png" />{" "}
              </a>
            </div>
            <div className={`${Styles.items} ${Styles.icon} `}>
              <a
                className="d-flex align-items-center justify-content-center py-3"
                href="#"
              >
                {" "}
                <FaChevronLeft />{" "}
              </a>
            </div>
          </div>
          <div className="py-2 px-3 text-center">
            <p className="h4 font-weight-bold mb-3">بیت کوین</p>
            <p className="mb-0 gainsboro">Bitcoin-BTC</p>
          </div>
        </div>
      </div>
      {/* <div className={`${Styles.body} text-center`}> */}
      {/* <div className="py-2 px-3 text-center">
                    <p className="h4 font-weight-bold mb-3">بیت کوین</p>
                    <p className="mb-0 gainsboro">Bitcoin-BTC</p>
                </div> */}

      <div className="px-2">
        <div id="searchCurrency" className={` py-2 px-2 text-center`}>
          <span className="ml-3 darkBlue h6 ">ارز مورد نظر را پیدا نکردید؟</span>
          <a onClick={() => setShowList(true)} className="link cursor-pointer">
            <span className="text-decoration-underline yekan-ExtraBold h6">
              جستجو کنید
          </span>
            <span className="mr-1">
              {" "}
              <FiSearch size="22" />{" "}
            </span>
          </a>
        </div>
      </div>
      <div className="p-2">
        <div className={`px-2 py-2`} id="payCount">
          <Input placeholder="مقدار پرداختی" image="/images/rial_Ic.png" />
        </div>
        <div className="py-2">
          <RiArrowUpDownLine className={`${Styles.arrow} link`} />
        </div>
        <div className={`px-2 py-2`} id="getCount">
          <Input placeholder="مقدار دریافتی" image="/images/bitcoin_ic.png" />
        </div>
        <div
          className={`${Styles.subDescs} px-2 text-right py-2`}
          id="infoCurrency"
        >
          <p className="gainsboro">
            <GoPrimitiveDot size="18" className="ml-2 gainsboro" />
            <span className="small">یک واحد بیتکوین برابر است با</span>
            <span className="font-weight-bold grayBlue mr-2">
              ~ 36,3554,642.5{" "}
            </span>
            <span className="font-weight-bold grayBlue small align-top">
              ریال
            </span>
          </p>
          <p className="mb-0 grayBlue">
            <GoPrimitiveDot size="18" className="ml-2 gainsboro" />
            <span> کارمزد خرید</span>
            <span className="mr-2">----</span>
          </p>
        </div>
        <div className={`py-2 px-2 `} id="button">
          <CustomizedButton
            variant={transactionType === "sell" ? "lightRed" : "lightGreen"}
            size="md"
            className="radius-md w-100 font-weight-bold"
          >
            پرداخت
            <FiChevronLeft size="20" className="mr-1" />
          </CustomizedButton>
        </div>
      </div>
    </div >
  );
};

export default Demo;

// useEffect(() => {
//     if(learning && currentEl){
//         demo = document.getElementById('demoBox');
//         el = document.getElementById(currentEl);
//         let topHole = el.getBoundingClientRect().top - demo.getBoundingClientRect().top;
//         let rightHole =  demo.getBoundingClientRect().right-el.getBoundingClientRect().right;
//         holeRef.current.style.top = `${topHole}px`;
//         holeRef.current.style.right = `${rightHole}px`;
//         holeRef.current.style.width = `${el.offsetWidth}px`;
//         holeRef.current.style.height = `${el.offsetHeight}px`;
//     }else{
//         holeRef.current.style.top = `0`;
//         holeRef.current.style.right = `0`;
//         holeRef.current.style.width = `100%`;
//         holeRef.current.style.height = `100%`;
//     }
// }, [currentEl])
