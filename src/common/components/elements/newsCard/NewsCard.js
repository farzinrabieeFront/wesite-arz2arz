import React, { useState } from "react";
import Link from "next/link";

import Styles from "./NewsCard.module.scss";

import { FiHeart, FiMessageSquare } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";

import { Col, Row } from "react-bootstrap";

const NewsCard = ({ data }) => {
  const [islike, setIsLike] = useState(false);

  return (
    <div
      // sm={12}
      className={`${Styles.col} d-flex justify-content-center py-5 mb-lg-0 mb-sm-3 mb-md-3 px-3 px-sm-2`}
    >
      <div className={`${Styles.box} transition text-right`}>
        <Row className={`${Styles.img} p-2`}>
          <Link href={`/blog/${data?.url}`}>
            <a className="d-block">
              <img src={data?.poster_card} alt={data?.title} />
            </a>
          </Link>
        </Row>
        <Row className={Styles.desc}>
          <Col xs="12">
            <Link href={`/blog/${data?.url}`}>
              <a>
                <h2 className={`${Styles.title} text-gray-5 size-2 mb-3`}>
                  {data?.title}
                </h2>
              </a>
            </Link>
          </Col>
          <Col xs="12" className="d-flex justify-content-between text-gray-2">
            <span className="d-flex justify-content-between FaNum size-2">
              {islike ? data?.like + 1 : data?.like}
              <span className="d-flex align-items-center justify-content-between mx-2">
                <FiHeart
                  className="pointer"
                  size={17}
                  fill={islike ? "#EA0909" : "#ffffff"}
                  stroke={islike ? "#EA0909" : "#BCC1CD"}
                  onClick={() => setIsLike((prev) => !prev)}
                />
              </span>
              {data?.comments}
              <span className="d-flex align-items-center justify-content-between mx-2">
                <FiMessageSquare size={17} />
              </span>
            </span>
            <span className="FaNum size-2">{data?.date}</span>
          </Col>
          <Col
            xs="12"
            className="d-flex justify-content-between align-items-center my-3"
          >
            <span className="size-1 text-blue">#{data?.category}</span>
            <Link href={`/blog/${data?.url}`}>
              <span className={`${Styles.more} size-2 text-gray-1 pointer`}>
                ادامه مطلب <HiArrowNarrowLeft size={20} />
              </span>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NewsCard;
