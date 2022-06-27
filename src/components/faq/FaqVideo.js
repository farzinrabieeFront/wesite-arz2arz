import React from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";

import CardVideo from "./cards/card-video/CardVideo";
const FaqVideo = ({ data }) => {
  return (
    <Row className="justify-content-center align-items-stretch">
      <Col lg={12} className="mb-3 text-right">
        <Row className="faqTabContaier justify-content-start mb-4">
          {data.length ? (
            data.map((item) => {
              return <CardVideo data={item} />;
            })
          ) : (
            <div>نمایش متن برای زمانی که محتوا لود نمیشه یا نداریم</div>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default FaqVideo;
