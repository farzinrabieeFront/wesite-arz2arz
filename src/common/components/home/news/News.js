import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Title from "../../elements/title/Title";
import { articles } from "../../../constant/blog";
import NewsCard from "../../../components/elements/newsCard/NewsCard";
import Styles from "./News.module.scss";
import ButtonElement from "../../elements/form/button/Button";
import { FiChevronLeft } from "react-icons/fi";

const News = () => {
  return (
    <div className={`${Styles.backImg}`}>
      <div className="py-5 container-fluid container-lg">
        <Row className="justify-content-around">
          <Col sm={12}>
            <Title
              lightTitle="جدیدترین"
              darkTitle="اخبار"
              className="justify-content-center justify-content-md-start"
              waveLine
              button
              href="/blog"
            />
          </Col>
          <Col lg={12}>
            <Row
              className={`${Styles.articles} d-flex justify-content-lg-center w-100 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4`}
            >
              {articles.slice(0, 4).map((item) => (
                <Col as="article" key={`article-id-${item.id}`}>
                  <NewsCard data={item} />
                </Col>
              ))}
            </Row>
          </Col>
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
      </div>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
    </div>
  );
};

export default News;
