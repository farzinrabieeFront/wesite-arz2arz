import React, { useState } from "react";
import Link from "next/link";

import MobileMenu from "../mobileMenu/MobileMenu";

import { FiUser } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";

const MobileHeader = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return [
    <Row className="d-md-none d-flex py-2">
      <Col xs="3" className="center-content">
        <img
          src="/svg/burgermenu.svg"
          alt=""
          onClick={() => setOpenMobileMenu(true)}
        />
      </Col>
      <Col xs="6" className="center-content">
        <Link href="/">
          <a>
            <img
              src="/images/index/logo/a2z-logo-sm.png"
              alt="صرافی آنلاین ارز تو ارز"
            />
          </a>
        </Link>
      </Col>
      <Col xs="3" className="center-content">
        <a href="http://user.arz2arz.net/login">
          <FiUser size="25" className="text-gray-4" />
        </a>
      </Col>
    </Row>,
    <MobileMenu
      show={openMobileMenu}
      handleClose={() => setOpenMobileMenu(false)}
    />,
  ];
};

export default MobileHeader;
