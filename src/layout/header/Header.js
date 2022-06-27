import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col, Container } from "react-bootstrap";
import Styles from "./Header.module.scss";
import { RiUserLine, RiExchangeFundsLine } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
// components
import SupportIcon from "../../components/support-icon/SupportIcon";
import CustomizedButton from "../../components/form/button/Button";
import NavBar from "./component/nav-bar/NavBar";
import Link from "next/link";

const Header = ({ setOpenMenu, setOpenModal }) => {
  const { pathname } = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
    setOpenModal(false);
  }, [pathname]);

  return (
    <div className="header py-3">
      <Container>
        <Row>
          <Col lg={12}>
            <Row className="align-items-center">
              <Col lg={9} className={Styles.pcMenu}>
                <NavBar />
              </Col>

              {/* responsive menu button */}
              <Col
                md={5}
                lg={5}
                sm={5}
                className={`${Styles.responsiveButton} ${Styles.logoRSP}`}
              >
                <div
                  className={`p-2 d-flex justify-content-start align-items-center`}
                >
                  <Link href="/">
                    <a>
                      <img
                        src="/images/headerLogo.png"
                        alt="صرافی آنلاین ارز تو ارز"
                      />
                    </a>
                  </Link>
                </div>
              </Col>
              <Col md={7} lg={7} sm={7} className={Styles.responsiveButton}>
                <div
                  className={`${Styles.box} d-flex justify-content-between align-items-center`}
                >
                  <span
                    onClick={() => setOpenModal(true)}
                    className="cursor-pointer d-flex align-items-center subtitle"
                  >
                    شروع معاملات
                    <FiChevronDown size="20" className="mr-1" />
                  </span>
                  <span
                    className={`${Styles.menuButton} cursor-pointer`}
                    onClick={() => setOpenMenu((prev) => !prev)}
                  >
                    {" "}
                    <CgMenu size="40" />{" "}
                  </span>
                </div>
              </Col>

              <Col lg={3} md={3} className={`${Styles.isLoginPc} text-left`}>
                {isLogin ? (
                  <ul className="mb-0 d-flex align-items-center flex-row-reverse justify-content-start">
                    <a onClick={() => setIsLogin(true)}>
                      <li
                        data-label="پنل کاربری"
                        className={`${Styles.listIcon} cursor-pointer mr-4 darkBlue transition`}
                      >
                        <RiUserLine size="25" />
                      </li>
                    </a>
                    <a>
                      <li
                        data-label="معاملات"
                        className={`${Styles.listIcon} mr-4 darkBlue cursor-pointer transition`}
                      >
                        <RiExchangeFundsLine size="25" />
                        <span className={`${Styles.notification}  `}>2</span>
                      </li>
                    </a>
                    <a>
                      <li
                        data-label="کیف پول"
                        className={`${Styles.listIcon} darkBlue cursor-pointer transition`}
                      >
                        <IoWalletOutline size="25" />
                      </li>
                    </a>
                  </ul>
                ) : (
                    <a href="http://user.arz2arz.net/login" >
                      <CustomizedButton
                        // onClick={() => setIsLogin(true)}
                        variant="outline-lightBlue"
                        size="md"
                        className="rounded-pill font-weight-bold"
                      >
                        <RiUserLine size="20" className="ml-1" />
                        ورود / ثبت نام
                      <FiChevronDown size="20" className="mr-1" />
                      </CustomizedButton>
                    </a>
                  )}
              </Col>
            </Row>
          </Col>
          <div className={`${Styles.border} m-3 w-100`}></div>
          <Col lg={12} className={Styles.ColRowButton}>
            <Row
              className={`${Styles.bottom} justify-content-between flex-row-reverse align-items-center`}
            >
              <Col className={`${Styles.logo} text-left`}>
                <Link href="/">
                  <a>
                    <img
                      src="/images/headerLogo.png"
                      alt="صرافی آنلاین ارز تو ارز"
                    />
                  </a>
                </Link>
              </Col>
              <Col className="d-flex justify-content-start align-items-center">
                <SupportIcon color="grayBlue" />
                <span className="yekan-Medium grayBlue">
                  چگونه می‌توانیم کمکتان کنیم ؟
                </span>
                <span className="lineLink yekan-Medium mr-3">
                  <Link href="/contact-us">
                    <a className="link">ارتباط با پشتیبانی</a>
                  </Link>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
