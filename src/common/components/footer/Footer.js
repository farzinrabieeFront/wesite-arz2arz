import React from "react";
import Link from "next/link";

// style
import Styles from "./Footer.module.scss";

// bootstrap
import { Col } from "react-bootstrap";
import FooterNav from "./components/FooterNav";

export default function Footer() {
  return (
    <footer className={`${Styles.footer} container-lg mt-5 pt-3 pt-md-4`}>
      <div style={{ maxHeight: "75px" }}>
        <img src="/svg/footerBorder2.svg" style={{ width: "100%" }} alt="" />
      </div>
      <Col xs="4" sm="12" className="center-content mx-auto">
        <Link href="/">
          <a>
            <img
              src="/images/index/logo/a2z-logo.png"
              alt="صرافی آنلاین ارز تو ارز"
            />
          </a>
        </Link>
      </Col>
      <Col xs="12" className="center-content mt-md-2">
        <FooterNav />
      </Col>
      <Col xs="12" className="center-content mb-4 text-gray-2 size-1">
        تمامی حقوق برای صرافی ارز تو ارز محفوظ است
      </Col>
    </footer>
  );
}
