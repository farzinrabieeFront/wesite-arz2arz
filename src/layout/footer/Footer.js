import React from 'react'
import { Row, Col, Container, Nav } from 'react-bootstrap';
import Styles from "./Footer.module.scss";
// components
import FooterItems from './component/FooterItems';
import Social from './component/Social';
import SupportIcon from '../../components/support-icon/SupportIcon'
import Link from 'next/link';
const Footer = () => {
    return (
        <div className={Styles.footer}>
            <div className={`${Styles.top} py-5`}>
                <Container>
                    <Row>
                        <Col lg={4} className={`${Styles.hiddenMd} px-4`}>
                            <div className={`${Styles.title} mb-3`}><p className="lightBlue pb-2 mb-0 font-weight-bold">لینک‌های مهم</p></div>
                            <ul className={`${Styles.linkItems} mb-0`}>
                                <li className="mb-2"><a href="/">صفحه اصلی</a></li>
                                <li className="mb-2"><a href="/">آموزش خرید و فروش ارز دیجیتال</a></li>
                                <li className="mb-2"><a href="/">آموزش معاملات تبدیل ارز</a></li>
                                <li className="mb-2"><a href="/">آموزش معاملات اتوماتیک ارزها</a></li>
                                <li><a href="/price">قیمت لحظه ای ارزها</a></li>

                            </ul>
                        </Col>
                        <Col lg={4} className={`${Styles.hiddenMd} px-4`}>
                            <div className={`${Styles.title} mb-3`}><p className="lightBlue pb-2 mb-0 font-weight-bold">سایر مطالب</p></div>
                            <ul className={`${Styles.linkItems} mb-0`}>
                                <li className="mb-2"><a href="/faq">سوالات متداول</a></li>
                                <li className="mb-2"><a href="/rules">قوانین و مقررات</a></li>
                                <li className="mb-2"><a href="/about">درباره صرافی ارز تو ارز</a></li>
                                <li className="mb-2"><a href="/contact-us">تماس با ما</a></li>
                                <li><a href="/blog">وبلاگ ارز تو ارز</a></li>
                            </ul>
                        </Col>
                        <Col lg={4} className="px-4">
                            <div className={`${Styles.title} mb-3`}><p className="lightBlue pb-2 mb-0 font-weight-bold">تماس با ما</p></div>
                            <div className={`${Styles.contact} d-flex align-items-start mb-4`}>
                                <div className={Styles.icon}>
                                    <span className="d-flex align-items-center justify-content-center p-2 p-lg-3">
                                        <img src="/images/telephone.png" />
                                    </span>
                                </div>
                                <div className={`${Styles.desc} pr-4`}>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className={`${Styles.name} yekan-Medium`}>خرید ارز</span>
                                        {/* <span className={Styles.light}>آقای صحبتی</span> */}
                                        <span><a href="tel:09104608800" className="FaNum yekan-Bold">09104608800</a></span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className={`${Styles.name} yekan-Medium`}>فروش ارز</span>
                                        {/* <span className={Styles.light}>خانم فخاری</span> */}
                                        <span><a href="tel:09104604888" className="FaNum yekan-Bold">09104604888</a></span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className={`${Styles.name} yekan-Medium`}>دوره آموزشی</span>
                                        {/* <span className={Styles.light}>خانم اکبری</span> */}
                                        <span><a href="tel:09104604003" className="FaNum yekan-Bold">09104604003</a></span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className={`${Styles.name} yekan-Medium`}>ولت سنتر</span>
                                        {/* <span className={Styles.light}>آقای بیات</span> */}
                                        <span><a href="tel:09104604001" className="FaNum yekan-Bold">09104604001</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Styles.contact} d-flex align-items-start`}>
                                <div className={Styles.icon}>
                                    <span className=" d-flex align-items-center justify-content-center p-2 p-lg-3">
                                        <img src="/images/address.png" />
                                    </span>
                                </div>
                                <div className={`${Styles.desc} pr-4`}>
                                    <p className="FaNum"> تهران خیابان مرزداران خیابان ابراهیمی برج الوند طبقه 5 واحد 510 </p>
                                    <p>
                                        <a href="mailto:info@arz2arz.com">info@arz2arz.com</a>
                                        <span className="mx-2">|</span>
                                        <a href="tel:021241233" className="FaNum">021-241233</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`${Styles.middle} py-3`}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} className={Styles.footerMenu}>
                            <Nav>
                                <FooterItems title="قیمت ارزها" url="/price" />
                                <FooterItems title="سوالات متداول" url="/faq" />
                                <FooterItems title="بلاگ" url="/blog" />
                                <FooterItems title="درباره‌ما" url="/about" />
                                <FooterItems title="تماس با ما" url="/contact-us" />
                            </Nav>
                        </Col>
                        <Col lg={4} md={12}>
                            <ul className="d-flex align-items-center justify-content-center justify-content-lg-end justify mb-0">
                                <Social />
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`${Styles.bottom} py-2`}>
                <Container>
                    <Row>
                        <Col lg={5} md={12} className={`${Styles.hiddenMd} d-flex justify-content-center align-items-center justify-content-lg-start`}>
                            <SupportIcon color="grayBlue" />
                            <span className="yekan-Medium grayBlue">چگونه می‌توانیم کمکتان کنیم ؟</span>
                            <span className="lineLink yekan-Medium mr-3">
                                <Link href="/contact-us">
                                    <a className="link">ارتباط با پشتیبانی</a>
                                </Link>
                            </span>
                        </Col>
                        <Col lg={7} md={12} className={`${Styles.copyRight} d-flex justify-content-center justify-content-lg-end align-items-center gainsboro`}>
                            <span className="ml-2 ml-lg-3 text-right">تمامی حقوق برای صرافی ارز تو ارز محفوظ است.</span>
                            <span className="ml-2 ml-lg-3">2021 ©</span>
                            <span><a href="/" className="gainsboro">www.arz2arz.ir</a></span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
