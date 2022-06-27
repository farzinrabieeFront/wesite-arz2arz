import React, { useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import Styles from "./MobileMenu.module.scss";
import Navbar from "../navbar/Navbar";

const MobileMenu = ({ show, handleClose }) => {
  const router = useRouter();
  useEffect(() => {
    handleClose();
  }, [router.pathname]);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className={Styles.wrapper}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Link href="/">
            <a>
              <img
                src="/images/index/logo/a2z-logo.png"
                alt="صرافی آنلاین ارز تو ارز"
              />
            </a>
          </Link>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <Navbar mobileMenu />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileMenu;
