import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Styles from "./RowNewsCard.module.scss";
import { FaCommentDots, FaHeart } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

const RowNewsCard = ({ data }) => {
  const [islike, setIsLike] = useState(false);

  return (
    <Col lg={12} md={12} sm={12} className={`${Styles.col} mb-3`}>
      <div className={`${Styles.box} transition d-flex flex-wrap text-right`}>
        <div className={`${Styles.img} p-2`}>
          <Link href={`/blog/${data?.url}`}>
            <a>
              <img src={data?.poster_card} alt={data?.title} />
            </a>
          </Link>
        </div>
        <div
          className={`${Styles.desc} d-flex flex-wrap justify-content-between align-items-center`}
        >
          <Link href={`/blog/${data?.url}`}>
            <a className="col-lg-9 px-0 pl-3">
              <>
                <h2
                  className={`${Styles.title} text-right font-weight-bold darkBlue mb-2`}
                >
                  {data?.title}
                  <span className={`${Styles.label} ${Styles.greenLabel} `}>
                    {data?.category}
                  </span>
                </h2>
              </>
            </a>
          </Link>
          <div className="col-lg-3 px-0 ltr mb-2 d-flex align-items-center">
            <span className={`d-flex align-items-center gainsboro mr-3 FaNum`}>
              {data?.date}
            </span>
            <span
              className={`${Styles.icon} ${
                data?.isLike || islike ? Styles.active : null
              } d-flex align-items-center gainsboro FaNum`}
            >
              <FaHeart
                size="22"
                className="ml-1 pointer"
                onClick={() => data?.isLike || setIsLike(true)}
              />
              {/* {data?.like} */}

              {islike ? data?.like + 1 : data?.like}
            </span>
          </div>
          {/* toodo : greenLabel style daynamic */}

          <p className={`${Styles.text} grayBlue text-justify`}>
            {data?.desc_sm}
          </p>
        </div>

        <div className={`${Styles.hiddenLink} transition`}>
          <Link href={`/blog/${data?.url}`}>
            <a className=" p-2 font-weight-bold">
              مشاهده ادامه مطلب <HiArrowLeft />
            </a>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default RowNewsCard;
