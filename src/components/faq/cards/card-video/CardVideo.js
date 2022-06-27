import React from 'react'
import { Col } from "react-bootstrap";
import Styles from "./CardVideo.module.scss";
import PlayButton from '../../../../components/play-button/PlayButton';
function CardVideo() {
    return (
        <Col lg={3} md={4} sm={12} className="mb-3">
            <div className={Styles.card}>
                <div className={Styles.img}>
                    <img src="./images/CardGallery.png" />
                    <span className={`${Styles.label} text-white rounded-pill`}>12:20</span>
                    <span className={Styles.icon}>
                        <PlayButton />
                    </span>
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

export default CardVideo
