import React from "react";
import Link from "next/link";

// Style
import Styles from "./Header.module.scss";
// bootstrap
import { Col, Row } from "react-bootstrap";
// components
import Navbar from "./components/navbar/Navbar";
import ButtonElement from "../elements/form/button/Button";
// icons
import { FiUser } from "react-icons/fi";
import MobileHeader from "./components/mobileHeader/MobileHeader";

export default function Header({ scrollY }) {
  return [
    <header
      className={`${scrollY ? Styles.onScrollHeader : ""} ${Styles.header}`}
    >
      <div className="container-fluid container-lg">
        <Row className="d-none d-md-flex align-items-center mx-auto">
          <Col md="2" className="d-flex justify-content-start py-1 px-0">
            <Link href="/">
              <a>
                <img
                  src="/images/index/logo/a2z-logo.png"
                  alt="صرافی آنلاین ارز تو ارز"
                />
              </a>
            </Link>
          </Col>
          <Col md="8">
            <Navbar />
          </Col>
          <Col md="2" className="d-flex justify-content-end">
            <a href="http://user.arz2arz.net/login">
              <ButtonElement
                variant="outline-lightBlue"
                size="md"
                className={`px-3 py-2 size-2 yekan-Medium`}
              >
                <FiUser size="20" className="ml-1" />
                ورود / ثبت نام
              </ButtonElement>
            </a>
          </Col>
        </Row>
      </div>
      <MobileHeader />
    </header>,
  ];
}
