import React from "react";
import Styles from "./ContactUs.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../elements/title/Title";
import ButtonElement from "../../elements/form/button/Button";

const ContactUs = () => {
  return (
    <div className={Styles.backImg}>
      <Container className="py-5">
        <Row>
          <Title
            lightTitle="ارتباط "
            darkTitle="با ما"
            className="center-content d-md-none mb-5"
          />
          <Col sm="6" className="center-content px-4">
            <img src="/images/index/Contact-us.png" alt="" />
          </Col>
          <Col sm="6">
            <Title
              lightTitle="ارتباط "
              darkTitle="با ما"
              className="d-none d-md-flex mb-5"
            />
            <p className={`${Styles.preText} size-3 text-gray-4 mt-3 `}>
              {`در صورتی که در مورد صرافی سوالی دارید میتوانید به راحتی \nاز طریق پشتیبانی آنلاین وب سایت باما در ارتباط باشید`}
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <ButtonElement
                variant="lightBlue"
                size="lg"
                className="px-3 py-2 size-4 yekan-Medium"
              >
                تماس با ما
              </ButtonElement>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
      <div className={`${Styles.TriangleBack} d-none d-md-flex`}>
        <img src={"/svg/backgroundRightArrow.svg"} alt="" />
      </div>
      <div className={`${Styles.TriangleBack} d-flex d-md-none`}>
        <img src={"/svg/backgroundRightMobile.svg"} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
