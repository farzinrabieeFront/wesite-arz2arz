import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
// components
import Title from "../../title/Title";
import Styles from "./Faqs.module.scss";
import FaqCard from "../../faq-card/FaqCard";
import CustomizedButton from "../../../components/form/button/Button";
import { FiChevronLeft } from "react-icons/fi";
import { common_questions_faq } from "../../../constant/faq";
const Faqs = () => {
  const [activeAsk, setActiveAsk] = useState();

  return (
    <Row className="justify-content-center">
      <Col sm={12} className="pb-3 ">
        <Title
          lightTitle="پرسش‌های "
          darkTitle="متداول"
          className="center"
          waveLine
        />
      </Col>

      <Col lg={9} className="mt-3 px-3 px-sm-0">
        <Row className="justify-content-center align-items-stretch">
          {common_questions_faq.slice(0, 6).map((item, index) => {
            return (
              <Col lg={12} className="mb-3 text-right">
                <FaqCard
                  onClick={() =>
                    setActiveAsk((prev) => (prev === index ? null : index))
                  }
                  active={activeAsk === index}
                  data={item}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default Faqs;
