import React, { useState } from "react";
import Style from "../InstantPrice.module.scss";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCaretLeft } from "react-icons/ai";
import ApexCharts from "../../../../../components/apex-chart/ApexCharts";
import CustomizedButton from "../../../../../components/form/button/Button";
import { FaChevronLeft } from "react-icons/fa";
import dynamic from "next/dynamic";
import ButtonElement from "../../../elements/form/button/Button";
import { FiChevronLeft } from "react-icons/fi";
import Styles from "../../../../../styles/ContactUs.module.scss";
const MyResponsiveStream = dynamic(
  () =>
    import(
      "../../../../../components/chart/MyresponsiveStream/MyResponsiveStream"
    ),
  {
    ssr: false,
  }
);

const CardDetails = ({ data }) => {
  return (
    <>
      <div
        className={`${Style.detailsBox} w-100 d-flex flex-column rounded-15  pt-4 `}
      >
        <Row>
          <Col sm={12} lg={3}>
            <div className="pe-lg-3">
              <p className="size-3 text-gray-5 mb-0 ">
                <div className="px-3 px-lg-0 d-lg-flex mb-4">
                  <AiOutlineCaretLeft style={{ fill: "#00BABA" }} />
                  <span> {data.faName} </span>
                  <span className="size-3 text-gray-2 me-2">{data.name}</span>
                </div>

                {/*<div className="px-4 mb-4 d-flex d-lg-none">*/}
                {/*  <CustomizedButton*/}
                {/*    isFullWidth*/}
                {/*    leftIcon={<FaChevronLeft size="20" />}*/}
                {/*    type="submit"*/}
                {/*    className="tradeBtn size-3 fw-400 py-1"*/}
                {/*    size="sm"*/}
                {/*    variant="lightBlue"*/}
                {/*    // disabled={!(isValid && dirty)}*/}
                {/*    // loading={loading}*/}
                {/*  >*/}
                {/*    معامله*/}
                {/*    <span className="en fw-600 me-2">*/}
                {/*      /!*{values.type === "sell"*!/*/}
                {/*      /!*  ? spot.split("-")[1]*!/*/}
                {/*      /!*  : spot.split("-")[0]}*!/*/}
                {/*    </span>*/}
                {/*  </CustomizedButton>*/}
                {/*</div>*/}
                <div className={`${Style.footer} col-12 p-0`}>
                  <div style={{ width: "100%", height: "80px" }}>
                    <MyResponsiveStream data={dataChart} />
                  </div>
                  {/*{typeof window !== "undefined" && (*/}
                  {/*  <ApexCharts height="100px" data={data?.chartData} />*/}
                  {/*)}*/}
                </div>
              </p>
            </div>
          </Col>
          <Col sm={12} lg={9} className="d-flex">
            <Row className="d-flex align-items-end w-100 justify-content-start justify-content-lg-center px-3 m-0 row-cols-2 row-cols-sm-3 row-cols-lg-5">
              <Col className=" mb-3 mb-lg-0">
                <div>
                  <p className={`${Style.nowrapClass} size-2 text-gray-3`}>
                    قیمت جهانی
                  </p>
                  <p className={`${Style.nowrapClass} text-green-1 size-4`}>
                    <span className="size-1"> (btc) </span>
                    <span>45.52454</span>
                  </p>
                </div>
              </Col>
              <Col className="mb-3 mb-lg-0">
                <p
                  className={`${Style.nowrapClass} size-2 text-gray-3`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  تغییرات قیمت (24h)
                </p>
                <p className="text-green-1 size-4">1.59%+</p>
              </Col>
              <Col className="mb-3 mb-lg-0">
                <p className={`${Style.nowrapClass} size-2 text-gray-3`}>
                  بالاترین قیمت (24h)
                </p>
                <p className={`${Style.nowrapClass} size-4`}>
                  <span className="size-1 text-gray-3"> (USDT) </span>
                  <span> 43,100.00</span>
                </p>
              </Col>
              <Col className="mb-3 mb-sm-0">
                <p className={`${Style.nowrapClass}  size-2 text-gray-3`}>
                  بالاترین قیمت (24h)
                </p>
                <p className={`${Style.nowrapClass} size-4`}>
                  <span className="size-1 text-gray-3"> (USDT) </span>
                  <span> 43,100.00</span>
                </p>
              </Col>
              <Col
                xs={12}
                sm={7}
                className={`${Style.colBtn} d-flex flex-lg-column flex-sm-row-reverse flex-column-reverse justify-content-between mb-3 mb-sm-0 `}
              >
                <ButtonElement
                  type="submit"
                  variant="lightBlue"
                  size="md"
                  className={`${Style.heightBtn} size-3 radius-md me-sm-5 m-lg-0  d-lg-flex justify-content-center  w-100 shadow font-weight-bold `}
                >
                  معامله
                  <FiChevronLeft size="24" className={Styles.buttonIcon} />
                </ButtonElement>
                <div>
                  <p
                    className={`${Style.nowrapClass} size-2 text-gray-3`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    حجم معامله
                  </p>
                  <p className={`${Style.nowrapClass} size-4`}>
                    <span className="size-1 text-gray-3"> (USDT) </span>
                    <span> 43,100.00</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
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

export default CardDetails;
