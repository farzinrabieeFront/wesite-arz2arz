import React, { useEffect, useState } from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import FaqCard from "../faq-card/FaqCard";
import Pagination from "../paigination/Pagination";
import Styles from "./FaqList.module.scss";

const FaqQuestions = ({ data, handleChangePage, totalRecords }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [activeAsk, setActiveAsk] = useState();

  useEffect(() => {
    handleCreateCategoryList();
  }, [data]);

  const handleCreateCategoryList = () => {
    let category_list = ["همه"];
    for (let item of data) {
      if (!category_list.includes(item.category))
        category_list.push(item.category);
    }
    setCategoryList(category_list);
  };

  return (
    <Row className="justify-content-center align-items-stretch">
      <Col lg={12} className="mb-3 text-right ">
        <div className={Styles.responsiveCategory}>
          <ul className={`${Styles.category} d-flex`}>
            {categoryList?.map((category) => (
              <li
                className={`px-3 py-2 pointer gainsboro  ${
                  !categorySelected && category === "همه"
                    ? Styles.active
                    : categorySelected === category
                    ? Styles.active
                    : ""
                }`}
                onClick={() =>
                  setCategorySelected(category === "همه" ? "" : category)
                }
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="faqTabContaier row justify-content-start mb-4">
          {data.length ? (
            data
              .filter((item) => item.category.includes(categorySelected))
              .slice(0, 10)
              .map((item, index) => {
                return (
                  <Col lg={12} className="mt-3 text-right">
                    <FaqCard
                      data={item}
                      onClick={() =>
                        setActiveAsk((prev) => (prev === index ? null : index))
                      }
                      active={activeAsk === index}
                    />
                  </Col>
                );
              })
          ) : (
            <div>نمایش متن برای زمانی که محتوا لود نمیشه یا نداریم</div>
          )}
        </div>
      </Col>
      <Col lg={12} className="mb-3 d-flex justify-content-center ">
        {data.length > 10 && (
          <Pagination
            totalRecords={totalRecords}
            pageLimit={5}
            pageNeighbours={2}
            handleChangePage={(page) => handleChangePage(page)}
            marginPagesDisplayed={2}
          />
        )}
      </Col>
    </Row>
  );
};

export default FaqQuestions;
