import React, { useState } from "react";
import Styles from "../styles/Faq.module.scss";

import { Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { common_questions_faq } from "../common/constant/faq";
//components
import Title from "../common/components/elements/title/Title";
import FaqCard from "../common/components/home/faqs/components/faq-card/FaqCard";
import ButtonElement from "../common/components/elements/form/button/Button";
import PaginationElement from "../components/paigination/Pagination";

const Faq = ({ pageNumber, marginPagesDisplayed }) => {
  const categoryList = [
    "همه",
    "خرید",
    "فروش",
    "احرازهویت",
    "کیف پول",
    "معاملات",
  ];
  const [activeAsk, setActiveAsk] = useState();
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchBox, setSearchBox] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(50);
  const handleChangePage = () => {};
  return (
    <div className={`${Styles.backImG} position-relative`}>
      <div className={`${Styles.TriangleBack} d-none d-md-flex`}>
        <img src={"/svg/backgroundRightArrow.svg"} alt="" />
      </div>
      <div className={`${Styles.TriangleBack} d-flex d-md-none`}>
        <img src={"/svg/backgroundRightMobile.svg"} alt="" />
      </div>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
      <div className="container-fluid container-lg py-5 my-5">
        <Row className="justify-content-around">
          <Col sm={12}>
            <Title
              lightTitle="پرسش‌های"
              darkTitle="متداول"
              className="justify-content-center justify-content-md-start"
              waveLine
            />
          </Col>
          <Col lg={8}>
            <Row className="center-content my-4 px-3">
              <div className={`${Styles.input} form-control text-gray-3`}>
                <FiSearch className={`${Styles.icon}`} size="24" />
                <input
                  className="size-2"
                  placeholder="پرسش مورد نظر خود را جستجو کنید"
                  onChange={(e) => {
                    setSearchBox(e.target.value);
                  }}
                />
              </div>
            </Row>
            <Row
              className={`${Styles.category} w-auto flex-nowrap my-4 justify-content-sm-center`}
            >
              {categoryList?.map((item, index) => {
                return (
                  <ButtonElement
                    outlined
                    variant="light"
                    active={activeCategory === index}
                    className="size-2 py-3 py-lg-2 px-3 px-lg-4 w-auto mx-2"
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
                    <Col lg={12} key={index} className="mb-3 text-right">
                      <FaqCard
                        onClick={() =>
                          setActiveAsk((prev) =>
                            prev === index ? null : index
                          )
                        }
                        data={item}
                        active={activeAsk === index}
                        totalRecords={common_questions_faq.length}
                        handleChangePage={(page) => console.log(page)}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>

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
        </Row>
      </div>
      <div className={`${Styles.cirlceBack2} d-none d-lg-flex`}></div>
      <div className={`${Styles.TriangleBack2} d-none d-md-flex`}>
        <img src={"/svg/backgroundLeftArrow.svg"} alt="" />
      </div>
      <div className={`${Styles.TriangleBack2} d-flex d-md-none`}>
        <img src={"/svg/backgroundLeftMobile.svg"} alt="" />
      </div>
    </div>
  );
};

export default Faq;
