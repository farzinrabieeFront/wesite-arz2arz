import React from 'react';
import Styles from '../styles/404.module.scss';
import { Container, Col } from 'react-bootstrap';
import { FiChevronLeft } from 'react-icons/fi';

function Custom404Page() {
    return (
        <div className="banner py-5">
            <Container>
                <div className={`${Styles.background} d-flex align-items-stretch flex-wrap py-5 px-3`}>
                    <Col className={Styles.image}>
                        <img src="./images/404-bck.png" />
                    </Col>
                    <Col className={`${Styles.desc} d-flex align-items-center justify-content-center flex-wrap`}>
                        <h1 className={`${Styles.title} d-block w-100 yekan-ExtraBold mb-2`}>404
                        <span className="size-4 d-block">
                            <p className={Styles.subTitle}>Page Not Found</p>
                        </span>
                        </h1>
                        
                        <p className="text-white size-3 yekan-Bold w-100 mb-4">صفحه مورد نظر شما یافت نشد!</p>
                        <a className={`${Styles.link} px-3 py-2 yekan-Bold pb-1 mb-0 d-inline-flex align-items-center justify-content-center`} href="/">
                            بازگشت به صفحه اصلی
                            <FiChevronLeft size="20" className="mr-1" />
                        </a>
                    </Col>
                </div>
            </Container>
        </div>
    )
}

export default Custom404Page
