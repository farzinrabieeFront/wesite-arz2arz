import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

// style
import Styles from "./Faqs.module.scss";

// icons
import { FiChevronLeft, FiSearch } from "react-icons/fi";

// components
import Title from "../../elements/title/Title";
import FaqCard from "./components/faq-card/FaqCard";
import { common_questions_faq } from "../../../constant/faq";
import ButtonElement from "../../elements/form/button/Button";

const categoryList = ["همه", "خرید", "فروش", "احرازهویت", "کیف پول", "معاملات"];

const Faqs = () => {
  const [activeAsk, setActiveAsk] = useState();
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchBox, setSearchBox] = useState("");

  return (
    <div className={`${Styles.backImg}`}>
      <div className={`${Styles.cirlceBack2} d-none d-lg-flex`}></div>
      <div className="py-5 container-fluid container-lg">
        <Row className="justify-content-around">
          <Col sm={12}>
            <Title
              lightTitle="پرسش‌های"
              darkTitle="متداول"
              className="justify-content-center justify-content-md-start"
              waveLine
              button
              href="/faq"
            />
          </Col>
          <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
          <Col lg={8} className="">
            <Row className="center-content my-4 px-3">
              <div className={`${Styles.input} form-control text-gray-3 `}>
                <FiSearch className={`${Styles.icon}`} size="20" />
                <input
                  className="size-2"
                  placeholder="پرسش مورد نظر خود را جستجو کنید"
                  onChange={(e) => setSearchBox(e.target.value)}
                />
              </div>
            </Row>
            <Row
              className={`${Styles.category} w-auto justify-content-sm-center flex-nowrap my-4 `}
            >
              {categoryList?.map((item, index) => {
                return (
                  <ButtonElement
                    key={index}
                    outlined
                    variant="light"
                    active={activeCategory === index}
                    className="size-2 py-3 py-lg-2 px-4 w-auto  mx-2"
                    onClick={() =>
                      activeCategory != index && setActiveCategory(index)
                    }
                  >
                    {item}
                  </ButtonElement>
                );
              })}
            </Row>
            <Row className="justify-content-center align-items-stretch">
              {common_questions_faq
                .filter(
                  (item) =>
                    new RegExp(searchBox, "gi").test(item.question) ||
                    new RegExp(searchBox, "gi").test(item.answer)
                )
                .slice(0, 6)
                .map((item, index) => {
                  return (
                    <Col
                      sm={10}
                      lg={12}
                      key={index}
                      className="mb-3 text-right"
                    >
                      <FaqCard
                        onClick={() =>
                          setActiveAsk((prev) =>
                            prev === index ? null : index
                          )
                        }
                        active={activeAsk === index}
                        data={item}
                      />
                    </Col>
                  );
                })}
              <Col xs={12}>
                <div className="d-flex w-100 justify-content-center d-lg-none">
                  <ButtonElement
                    outlined
                    variant="lightBlue"
                    size="lg"
                    className={`px-4 py-2 size-4 yekan-Medium`}
                  >
                    مشاهده همه
                    <FiChevronLeft size={22} />
                  </ButtonElement>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Faqs;
