import React, { useState } from "react";
import Styles from "./GridNewsCard.module.scss";
import { FaCommentDots, FaHeart } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { Col } from "react-bootstrap";
import Link from "next/link";
const GridNewsCard = ({ data }) => {
  const [islike, setIsLike] = useState(false);

  return (
    <Col
      lg={3}
      md={6}
      sm={6}
      className={`${Styles.col} my-3 mb-lg-0 mb-sm-3 mb-md-3 px-3 px-sm-2`}
    >
      <div className={`${Styles.box} transition text-right`}>
        <div className={`${Styles.img} p-2`}>
          <Link href={`/blog/${data?.url}`}>
            <a className="d-block">
              <img src={data?.poster_card} alt={data?.title} />
              <span className={`${Styles.label} ${Styles.greenLabel} mt-1`}>
                {data?.category}
              </span>
            </a>
          </Link>
          {/* toodo : greenLabel style daynamic */}
        </div>
        <div className={Styles.desc}>
          <Link href={`/blog/${data?.url}`}>
            <a>
              <h2 className={`${Styles.title} font-weight-bold darkBlue mb-3`}>
                {data?.title}
              </h2>
            </a>
          </Link>
          <p className={`${Styles.text} grayBlue`}>{data?.desc_sm}</p>
          <p className="mb-0 d-flex justify-content-end w-100 align-items-center">
            <span className={`${Styles.date} gainsboro mr-3 FaNum`}>
              {data?.date}
            </span>
            <span
              className={`${Styles.icon} ${
                data?.isLike || islike ? Styles.active : null
              } gainsboro mr-3 FaNum`}
            >
              {islike ? data?.like + 1 : data?.like}
              <FaHeart
                size="25"
                className="mr-1 pointer"
                onClick={() => setIsLike(true)}
              />
            </span>
          </p>
        </div>

        <div className={`${Styles.hiddenLink} transition p-2`}>
          <Link href={`/blog/${data?.url}`}>
            <a className="font-weight-bold">
              مشاهده ادامه مطلب <HiArrowLeft />
            </a>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default GridNewsCard;
