import React from 'react'
import { Col } from "react-bootstrap";
import Styles from "./CardGallery.module.scss";
function CardGallery() {
    return (
        <Col lg={3} md={4} sm={12} className="mb-3">
            <div className={Styles.card}>
                <div className={Styles.img}>
                    <img src="./images/CardGallery.png" />
                    <span className={`${Styles.label} text-white rounded-pill`}>5 تصویر</span>
                </div>
                <div className="py-3">
                    <p className="dark cursor-pointer">
                    عکس خود برای احراز هویت را چطور و با چه شرایطی ارسال کنم؟
                    </p>
                </div>
            </div>
        </Col>
    )
}

export default CardGallery
