import React from "react";
import { Row, Col } from "react-bootstrap";
import Styles from "./TransactionsUser.module.scss";
import Title from "../../title/Title";
import { lastTransactions } from "../../../constant/userLastTransaction";

const Transactions = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={6} md={6} sm={12} className="pb-3 ">
        <Title
          lightTitle="معاملات "
          darkTitle="اخیر کاربران"
          className="center"
          icon="/images/TransactionsIC.png"
        />
        <p className="grayBlue text-center mb-0 mt-3">
          در این بخش معاملات خرید و فروش و تبدیل لحظه‌ای کاربران در صرافی ارز تو
          ارز را مشاهده می‌کنید.
        </p>
      </Col>
      <Col lg={9} className={Styles.col}>
        <div className={Styles.responsiveBox}>
          <div className="table responsive">
            <div className="thead d-flex  align-items-stretch justify-content-center">
              <Col className="items">
                <span className="grayBlue mb-0 "> نام ارزها</span>
              </Col>
              <Col className="items">
                <span className="grayBlue mb-0 "> مقدار ارزی</span>
              </Col>
              <Col className="items">
                <span className="grayBlue mb-0 "> مقدار ریالی</span>
              </Col>
              <Col className="items">
                <span className="grayBlue mb-0 "> نوع معامله</span>
              </Col>
              <Col className="items">
                <span className="grayBlue mb-0 "> زمان انجام معامله</span>
              </Col>
            </div>
            <div className="tbody">
              {lastTransactions.map((item) => (
                <div
                  className="tr d-flex flex-wrap align-items-stretch justify-content-center"
                  key={`transaction-id-${item.id}`}
                >
                  <Col className="items">
                    <span>
                      <img src="/images/transaction.png" />
                    </span>
                    <span className="dark mb-0 "> {item.name}</span>
                  </Col>
                  <Col className="items">
                    <span date-label="مقدار ارزی" className="lightGreen mb-0 ">
                      {" "}
                      {item.amount}
                    </span>
                  </Col>
                  <Col className="items">
                    <span date-label="مقدار ریالی" className="lightRed mb-0 ">
                      {" "}
                      {item.rial_amount}
                    </span>
                  </Col>
                  <Col className="items">
                    <span date-label="نوع معامله" className="gainsboro mb-0 ">
                      {" "}
                      {item.type}
                    </span>
                  </Col>
                  <Col className="items">
                    <span
                      date-label="زمان انجام معامله"
                      className="gainsboro mb-0 "
                    >
                      {" "}
                      {item.time}
                    </span>
                  </Col>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Transactions;
