import { Fragment } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Title from "../../title/Title";
import GridNewsCard from "../../news-card/grid-news-card/GridNewsCard";
import CustomizedButton from "../../../components/form/button/Button";
import { FiChevronLeft } from "react-icons/fi";
import { articles } from "../../../constant/blog";
import Styles from './News.module.scss'
const News = () => {
  return (
    <Row className={`${Styles.RowNewsCard} justify-content-center`}>
      <Col lg={6} md={6} sm={12} className="pb-3 mb-4">
        <Title
          lightTitle="اخبار جدید "
          darkTitle="تکنولوژی"
          className="center"
          icon="/images/NewsIc.png"
        />
      </Col>
      <Col lg={12}>
        <Row>
          {articles.slice(0, 4).map((item) => (
            <Fragment key={`article-id-${item.id}`}>
              <GridNewsCard data={item} />
            </Fragment>
          ))}
        </Row>
      </Col>
      <Col lg={12} className="text-center mt-5">
        <Link href="/blog">
          <a>
            <CustomizedButton
              variant="outline-lightBlue"
              size="md"
              className="rounded-pill font-weight-bold"
            >
              مشاهده همه اخبار تکنولوژی
              <FiChevronLeft size="20" className="mr-1" />
            </CustomizedButton>
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default News;
