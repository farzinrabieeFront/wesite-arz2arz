import React from "react";
import { Col } from "react-bootstrap";

const HeadTablePrice = () => {
  return (
    <>
      <div className="thead d-flex  align-items-center justify-content-center d-none d-lg-flex">
        <Col className="items">
          <span className="grayBlue mb-0 subtitle">نام ارز</span>
        </Col>
        <Col className="items">
          <span className="grayBlue mb-0 subtitle">قیمت جهانی(USDT)</span>
        </Col>
        <Col className="items">
          <span className="grayBlue mb-0 subtitle">تغییرات قیمت (24H)</span>
        </Col>
        <Col className="items">
          <span className="grayBlue mb-0 subtitle">حجم معاملات (24H)</span>
        </Col>
        <Col className="items">
          <span className="grayBlue mb-0 subtitle"> ارزش بازار</span>
        </Col>
        <Col className="items">
          <span className="grayBlue mb-0 subtitle"> نمودار</span>
        </Col>
        {/*<Col lg={1} className="items">*/}
        {/*  <span className="grayBlue mb-0 subtitle"></span>*/}
        {/*</Col>*/}
      </div>
    </>
  );
};

export default HeadTablePrice;
