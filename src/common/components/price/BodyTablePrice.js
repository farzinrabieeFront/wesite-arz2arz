import React, { Fragment, useState } from "react";
import Styles from "../../../styles/Price.module.scss";
import { Col } from "react-bootstrap";
import DeatailCurrency from "../../../components/deatail-currency/DeatailCurrency";
import dynamic from "next/dynamic";
const MyResponsiveStream = dynamic(
  () =>
    import("../../../components/chart/MyresponsiveStream/MyResponsiveStream"),
  {
    ssr: false,
  }
);
const BodyTablePrice = () => {
  const [activeRow, setActiveRow] = useState(0);
  let arrayMap = ["", "", "", ""];
  return (
    <>
      <div className="tbody d-flex justify-content-center flex-column align-items-center">
        {arrayMap.map((item, index) => {
          return (
            <Fragment key={index}>
              <div
                className={`tr ${
                  activeRow === index + 1 ? Styles.selected : ""
                } d-flex row w-100  align-items-stretch justify-content-center mb-4 mb-lg-0 bg-white`}
              >
                <div className="hrTable"></div>
                <Col
                  xs={6}
                  lg={2}
                  className={`${
                    index + 1 === arrayMap.length && "radiusITemsFirst"
                  } items heightCustom  order-1 order-lg-1 `}
                >
                  <span
                    data-label="نام ارز"
                    className="dataLabel d-flex align-items-center d-none d-lg-flex"
                  ></span>
                  <img src="/images/bitcoin_ic.png" />
                  <span className="d-flex flex-column align-items-start">
                    <span className=" mb-0 size-2 text-gray-5">‌Bitcoin</span>
                    <span className=" mb-0  gainsboro size-2 text-gray-3">
                      B‌‌‌TC
                    </span>
                  </span>
                </Col>
                <Col
                  xs={6}
                  lg={2}
                  className="items mb-4 mb-lg-0 order-3 order-lg-2"
                >
                  <span
                    data-label="قیمت جهانی (USDT)"
                    className=" mb-0 subtitle dataLabel text-gray-3 size-2"
                  >
                    {" "}
                    <span className="text-gray-5 size-2"> 0.730</span>
                  </span>
                </Col>
                <Col
                  xs={6}
                  lg={2}
                  className="items mb-4 mb-lg-0 order-4 order-lg-3"
                >
                  <span
                    data-label="تغییرات قیمت (24H)"
                    className=" mb-0 subtitle  dataLabel text-gray-3 size-2"
                  >
                    {" "}
                    <span className=" size-2 lightRed">0.36% -</span>
                  </span>
                </Col>
                <Col xs={6} lg={2} className="items  order-5 order-lg-4">
                  <span
                    data-label=" حجم معاملات (24H)"
                    className=" mb-0 subtitle text-gray-3 dataLabel size-2"
                  >
                    <span className="text-gray-5 size-2"> 16,584.16M </span>
                  </span>
                </Col>
                <Col xs={6} lg={2} className="items  order-5 order-lg-5">
                  <span
                    data-label=" ارزش بازار"
                    className=" mb-0 subtitle dataLabel text-gray-3 size-2"
                  >
                    {" "}
                    <span className="text-gray-5 size-2 ">$768,055.75M</span>
                  </span>
                </Col>
                <Col
                  xs={6}
                  lg={2}
                  className={`${
                    index + 1 === arrayMap.length && "radiusITemslast"
                  } items  mb-5 mb-lg-0 order-2 p-lg-2 p-0 pt-4  order-lg-5`}
                >
                  <span
                    data-label="نمودار"
                    className=" mb-0 subtitle dataLabel position-relative w-100 d-none "
                  ></span>
                  <div style={{ width: "100%", height: "50px" }}>
                    <MyResponsiveStream data={dataChart} />
                  </div>
                </Col>
              </div>
              {activeRow === index + 1 ? (
                <div className="p-3">
                  <DeatailCurrency data={[44000, 41500, 4800, 5000, 49800]} />
                </div>
              ) : null}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
let dataChart = [
  {
    id: "japan",
    color: "#26AB6D",
    data: [
      {
        x: "plane",
        y: 245,
      },
      {
        x: "helicopter",
        y: 253,
      },
      {
        x: "boat",
        y: 108,
      },
      {
        x: "train",
        y: 252,
      },
      {
        x: "subway",
        y: 266,
      },
      {
        x: "bus",
        y: 7,
      },
      {
        x: "car",
        y: 242,
      },
      {
        x: "moto",
        y: 96,
      },
    ],
  },
];

export default BodyTablePrice;
