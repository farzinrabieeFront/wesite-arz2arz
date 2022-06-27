import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Title from "../../common/components/elements/title/Title";
import Styles from "../../styles/Blog.module.scss";
import { FiMessageSquare, FiHeart, FiChevronLeft } from "react-icons/fi";
import { article, articles } from "../../common/constant/blog";
import NewsCard from "../../common/components/elements/newsCard/NewsCard";
import ButtonElement from "../../common/components/elements/form/button/Button";
import CommentCard from "../../common/components/blog/comment-card/CommentCard";

const BlogData = () => {
  const { query } = useRouter();
  const data = article(query.name);
  const descRef = useRef();

  const [islike, setIsLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [stateActive, setStateActive] = useState();

  useEffect(() => {
    if (data?.desc) {
      descRef.current.innerHTML = data.desc;
    }
  }, [data]);

  return (
    <>
      <div className={Styles.backImGSingleBlog}>
        <Container className="py-5">
          <Row className={`${Styles.article} py-5 px-4`}>
            <Col
              xs="12"
              lg="5"
              className="center-content pt-md-0  pt-5 mt-5 mt-md-0  d-flex align-items-start px-0 px-lg-1"
            >
              <div className={`${Styles.img}`}>
                <img src={data?.image} alt={data?.title} />
              </div>
            </Col>
            <Col xs="12" lg="7">
              <div className="d-flex flex-column me-md-4 m-0    pt-4 pt-lg-0 h-100 justify-content-between">
                <div>
                  <h2
                    className={`${Styles.text}   mb-4
              `}
                  >
                    {data?.title}
                  </h2>
                  <p className={`${Styles.textDesc}   `}>{data?.desc_sm}</p>
                </div>
                <div className="d-flex text-gray-2 align-items-center">
                  <span className="text-blue size-4">#{data?.category}</span>
                  <span className="size-4 FaNum mx-4">{data?.date}</span>
                  <span className="d-flex justify-content-between FaNum size-4 mx-4">
                    {data?.comments}
                    <span className="d-flex align-items-center justify-content-between mx-2">
                      <FiMessageSquare size={17} />
                    </span>
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
                  </span>
                </div>
              </div>
            </Col>
            <div className={`${Styles.short} d-flex flex-wrap`}>
              <div
                className={`${Styles.textJustify2} text text-justify`}
                ref={descRef}
              ></div>
            </div>
          </Row>
        </Container>
      </div>

      <div className={Styles.backImGSingleBlog1}>
        <Container>
          <Row className="justify-content-around my-5">
            <Col sm={12}>
              <Title
                lightTitle="مقالات"
                darkTitle="پیشنهادی"
                className="justify-content-center justify-content-md-start"
                waveLine
              />
            </Col>
            <Col xs={12}>
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
          </Row>
        </Container>
      </div>
      <div className={Styles.backImGSingleBlog2}>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={12}>
              <Title
                lightTitle="نظرات"
                darkTitle="و سوالات"
                className="justify-content-center justify-content-md-start"
                waveLine
              />
            </Col>
            <Row className="center-content align-items-start my-5 h-100">
              <Col xs="12" md="5" className={"h-100 mb-3 mb-lg-0 "}>
                <div className={`${Styles.card} bg-white rounded-10 h-100 p-3`}>
                  <div className="d-flex text-blue">
                    <p className="size-5 yekan-Bold">نظر شما</p>
                  </div>
                  <Form.Group>
                    <Form.Label
                      className={`${Styles.inputLabel} text-gray-3 px-1 size-2 yekan-Medium me-2`}
                    >
                      نظر خود را برای ما بنویسید
                    </Form.Label>
                    <Col xs={12} className="px-2 mb-4">
                      <textarea
                        className={`${Styles.input} radius-md p-2`}
                        size="sm"
                        type="text"
                        rows={2}
                        placeholder="متن نظر ..."
                        name="message"
                      />
                    </Col>
                    <Col xs={12} className="px-2">
                      <ButtonElement
                        type="submit"
                        variant="lightBlue"
                        size="md"
                        className="size-3 radius-md py-3 w-100 shadow font-weight-bold position-relative"
                        isLoading={isLoading}
                        disable={isDisable}
                      >
                        ارسال
                        <FiChevronLeft
                          size="24"
                          className={Styles.buttonIcon}
                        />
                      </ButtonElement>
                    </Col>
                  </Form.Group>
                </div>
              </Col>
              <Col xs="12" md="7" className={`h-100`}>
                <div className={`${Styles.card} bg-white rounded-10 p-3 `}>
                  <div className="d-flex text-blue">
                    <p className="size-5 yekan-Bold">
                      {dataComment.length > 0
                        ? `نظرات (${dataComment.length})   `
                        : "نظرات"}
                    </p>
                  </div>
                  {dataComment.map((itmComment, ind) => (
                    <CommentCard
                      itmComment={itmComment}
                      ind={ind}
                      stateActive={stateActive}
                      setStateActive={setStateActive}
                    />
                  ))}
                  {/*<div className="p-2">*/}
                  {/*  <div className="d-flex mb-3">*/}
                  {/*    <div style={{ width: "45px", height: "43px" }}>*/}
                  {/*      <img src={"/images/personExample.png"} alt="" />*/}
                  {/*    </div>*/}
                  {/*    <div className="me-2">*/}
                  {/*      <p className="mb-1 ext-gray-5 size-2">*/}
                  {/*        امیر حسین محمودی*/}
                  {/*      </p>*/}
                  {/*      <p className="mb-0 ext-gray-2 size-1"> 2 ساعت پیش</p>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*  <div className="d-flex justify-content-center flex-column align-items-center">*/}
                  {/*    <p*/}
                  {/*      className="text-gray-5 size-2 text-center mb-4"*/}
                  {/*      style={{ width: "90%" }}*/}
                  {/*    >*/}
                  {/*      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت*/}
                  {/*      چاپ و با استفاده از طراحان گرافیک است{" "}*/}
                  {/*    </p>*/}
                  {/*    <div className="d-flex w-100 pe-4">*/}
                  {/*      <div*/}
                  {/*        className="d-flex align-items-center justify-content-between text-gray-5 pe-3 "*/}
                  {/*        style={{ width: "30%" }}*/}
                  {/*      >*/}
                  {/*        <div className="d-flex">*/}
                  {/*          <span className="ms-2 text-gray-2">24</span>*/}
                  {/*          <span className="d-flex align-items-center">*/}
                  {/*            {" "}*/}
                  {/*            <FiHeart className="text-gray-2" />*/}
                  {/*          </span>*/}
                  {/*        </div>*/}
                  {/*        <div className="d-flex">*/}
                  {/*          <span className="ms-2 text-gray-2">*/}
                  {/*            <BsArrowReturnLeft />*/}
                  {/*          </span>*/}
                  {/*          <span className="d-flex align-items-center size-2 text-gray-2">*/}
                  {/*            {" "}*/}
                  {/*            پاسخ*/}
                  {/*          </span>*/}
                  {/*        </div>*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};

let dataComment = [
  {
    name: "امیر حسین",
    time: "2ساعت پیش",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    replay: [
      {
        name: "فرزین",
        time: "2ساعت پیش",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        replay: true,
      },
      {
        name: "فرهاد",
        time: "2ساعت پیش",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        replay: true,
      },
    ],
  },

  {
    name: "امیر حسین",
    time: "2ساعت پیش",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    replay: true,
  },
  {
    name: "امیر حسین",
    time: "2ساعت پیش",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    replay: true,
  },
  {
    name: "امیر حسین",
    time: "2ساعت پیش",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    replay: true,
  },
  {
    name: "امیر حسین",
    time: "2ساعت پیش",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    replay: true,
  },
  {
    name: "سامان",
    time: "2ساعت پیش",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    replay: [
      {
        name: "فرزین",
        time: "2ساعت پیش",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        replay: true,
      },
      {
        name: "فرهاد",
        time: "2ساعت پیش",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        replay: true,
      },
    ],
  },
];

export default BlogData;

export async function getServerSideProps(context) {
  console.log("context", context);
  return {
    props: {}, // will be passed to the page component as props
  };
}
