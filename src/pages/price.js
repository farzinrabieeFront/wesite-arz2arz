import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import Title from "../common/components/elements/title/Title";

import FormSearchPrice from "../common/components/price/FormSeachPrice";
import ButtonGp from "../common/components/price/ButtonGp";
import HeadTablePrice from "../common/components/price/HeadTablePrice";
import BodyTablePrice from "../common/components/price/BodyTablePrice";
import Styles from "../common/components/price/Price.module.scss";
import PaginationElement from "../components/paigination/Pagination";
const Price = ({ pageNumber, marginPagesDisplayed }) => {
  const [totalRecords, setTotalRecords] = useState(50);
  const handleChangePage = () => {};

  return (
    <>
      <div className={`${Styles.backImG} py-5`}>
        <div className={`${Styles.TriangleBack} d-none d-md-flex`}>
          <img src={"/svg/backgroundRightArrow.svg"} alt="" />
        </div>
        <div className={`${Styles.TriangleBack} d-flex d-md-none`}>
          <img src={"/svg/backgroundRightMobile.svg"} alt="" />
        </div>
        <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
        <div className="py-5 container-fluid container-lg">
          <Row className="justify-content-center py-5 py-lg-0">
            <Col lg={12} className="pb-3">
              <Title
                lightTitle="قیمت لحظه‌ای"
                darkTitle="ارزهای دیجیتال"
                waveLine
                className="justify-content-center justify-content-md-start"
              />
            </Col>
            <Col lg={7} md={7} sm={12} className="my-3">
              <FormSearchPrice />
            </Col>
            <Col lg={9} md={8} sm={12}>
              <ButtonGp />
            </Col>
            <Col lg={12}>
              <div className="pc-table table">
                <HeadTablePrice />
                <BodyTablePrice />
              </div>
            </Col>
          </Row>
          <div className={`${Styles.TriangleBack2} d-none d-md-flex`}>
            <img src={"/svg/backgroundLeftArrow.svg"} alt="" />
          </div>
          <div className={`${Styles.TriangleBack2} d-flex d-md-none`}>
            <img src={"/svg/backgroundLeftMobile.svg"} alt="" />
          </div>
          {/*{data.length > 10 && (*/}
          <Col lg={12}>
            <PaginationElement
              totalRecords={totalRecords}
              pageLimit={5}
              onChangePage={handleChangePage}
              pageNeighbours={2}
              marginPagesDisplayed={marginPagesDisplayed}
              pageNumber={pageNumber}
            />
          </Col>
          {/*)}*/}
        </div>

        <div className={`${Styles.cirlceBack2} d-none d-lg-flex`}></div>
      </div>
    </>
  );
};

export default Price;
