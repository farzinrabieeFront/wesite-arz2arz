import { useEffect, useState } from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import CustomizedModal from "../modal/modal/Modal";
import CardGallery from "./cards/card-gallery/CardGallery";
const FaqGallery = ({ data }) => {
  return (
    <Row className="justify-content-center align-items-stretch">
      <Col lg={12} className="mb-3 text-right">
        <div className="faqTabContaier justify-content-start  mb-4">
          <Row>
            {data.length ? (
              data.map((item) => {
                return <CardGallery data={item} />;
              })
            ) : (
              <div>نمایش متن برای زمانی که محتوا لود نمیشه یا نداریم</div>
            )}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default FaqGallery;
