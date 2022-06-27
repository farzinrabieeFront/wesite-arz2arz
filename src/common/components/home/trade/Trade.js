import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Title from "../../elements/title/Title";
import ButtonElement from "../../elements/form/button/Button";
import { AiOutlineLeft } from "react-icons/ai";
import OrderForms from "./components/order-forms/OrderForms";
import EducationLevel1 from "./components/education/EducationLevel1";
import EducationLevel2 from "./components/education/EducationLevel2";
import EducationLevel3 from "./components/education/EducationLevel3";
import Styles from "./Trade.module.scss";
const refreshHistory = () => {};
const Trade = () => {
  ///////////////////////////////////////////////////////////////////////////////////////////////state
  const [educationShow, setEducationShow] = useState(1);
  const [activeTab, setActiveTab] = useState("market");
  const [state, setState] = useState(true);
  ///////////////////////////////////////////////////////////////////////////////////////////////functions
  const handelClickNextLevel = (event, type) => {
    if (type) {
      setActiveTab(type);
    }
    if (state) {
      setState(false);
    }
    setEducationShow(educationShow + 1);
  };
  const handleClickNextLevelType = (type) => {
    setActiveTab(type);
    handelClickNextLevel();
  };
  const handleClickBack = () => {
    if (educationShow === 3) {
      setActiveTab("");
    }
    if (state) {
      setState(false);
    }
    setEducationShow(educationShow - 1);
  };
  const handleClickEnd = () => {
    setEducationShow(1);
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////return
  return (
    <div className={`${Styles.backImg} position-relative`}>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
      <div className="py-5 container-fluid container-lg">
        <Row>
          <Col sm={12} lg={6}>
            <Title
              lightTitle="معاملات"
              darkTitle="تبدیل و اتوماتیک ارزها"
              className="justify-content-center justify-content-md-start"
              button
              href="/blog"
            />
            {educationShow === 1 && (
              <EducationLevel1 handelClickNextLevel={handelClickNextLevel} />
            )}
            {educationShow === 2 && (
              <EducationLevel2
                setActiveTab={setActiveTab}
                handleClickNextLevelType={handleClickNextLevelType}
              />
            )}
            {educationShow >= 3 && (
              <EducationLevel3
                state={state}
                educationShow={educationShow}
                handelClickNextLevel={handelClickNextLevel}
                setState={setState}
                handleClickBack={handleClickBack}
                handleClickEnd={handleClickEnd}
                activeTab={activeTab}
              />
            )}
          </Col>
          <Col className="d-flex justify-content-center" sm={12} lg={6}>
            <OrderForms
              refreshHistory={refreshHistory}
              educationShow={educationShow}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          </Col>
          {educationShow < 2 && (
            <Col
              sm={12}
              className="d-flex d-lg-none justify-content-center pt-5"
            >
              <div className="d-flex justify-content-center justify-content-md-start">
                <ButtonElement
                  variant="outline-lightBlueText"
                  size="lg"
                  className="px-3 py-2 is-size-4 yekan-Medium "
                  onClick={handelClickNextLevel}
                >
                  شروع آموزش
                  <span className="mx-1">
                    <AiOutlineLeft />
                  </span>
                </ButtonElement>
              </div>
            </Col>
          )}
        </Row>
      </div>
      <div className={`${Styles.cirlceBack2} d-none d-lg-flex`}></div>
    </div>
  );
};

export default Trade;
