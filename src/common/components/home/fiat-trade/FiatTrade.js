import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Title from "../../elements/title/Title";
import MarketForms from "./component/marketForms/MarketForms";
import ButtonElement from "../../elements/form/button/Button";
import { AiOutlineLeft } from "react-icons/ai";
import EducationLevel1 from "./component/education/educationLevel1";
import EducationLevel2 from "./component/education/EducatinLevel2";
import EducationLevel3 from "./component/education/EducationLevel3";

import Styles from "./component/education/Education.module.scss";

export default function FiatTrade() {
  ///////////////////////////////////////////////////////////////////////////////////////////////state
  const [educationShow, setEducationShow] = useState(1);
  const [state, setState] = useState(false);
  const [activeTab, setActiveTab] = useState("buy");

  ///////////////////////////////////////////////////////////////////////////////////////////////functionss
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

  const refreshHistoryHandler = () => {
    historyRef.current.test();
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////retunr
  return (
    <div className="py-5 container-fluid container-lg position-relative">
      <Row className="flex-column-reverse flex-lg-row">
        <Col sm={12} className="d-flex d-lg-none justify-content-center pt-5">
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
        <Col className="d-flex  justify-content-center" sm={12} lg={6}>
          <MarketForms
            refreshHistory={refreshHistoryHandler}
            educationShow={educationShow}
            type={activeTab}
            setType={setActiveTab}
            handelClickNextLevel={handelClickNextLevel}
            handleClickBack={handleClickBack}
            handleClickNextLevelType={handleClickNextLevelType}
            state={state}
          />
        </Col>
        <Col lg={6} className={`text-right px-lg-4 `}>
          <Title
            lightTitle="خرید و فروش"
            darkTitle="آسان ارز"
            className="justify-content-center justify-content-md-start"
            button
            href="/blog"
          />
          {educationShow === 1 && (
            <EducationLevel1 handelClickNextLevel={handelClickNextLevel} />
          )}
          {educationShow === 2 && (
            <EducationLevel2
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
      </Row>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
    </div>
  );
}
