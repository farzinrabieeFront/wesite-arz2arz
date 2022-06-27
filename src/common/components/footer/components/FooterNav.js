import React from "react";
import Link from "next/link";

import Styles from "./FooterNav.module.scss";
import { Nav } from "react-bootstrap";

const FooterNav = () => {
  const navItems = [
    { title: "قیمت ارزها", url: "/price" },
    { title: "سوالات متداول", url: "/faq" },
    { title: "درباره ما", url: "/about" },
    { title: "تماس با ما", url: "/contact-us" },
  ];
  return (
    <Nav as="nav">
      <ul className="d-flex justify-content-around p-0">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a
                className={`${Styles.link} size-2 text-gray-4 px-2 mx-0 mx-lg-3 yekan-Medium nav-link`}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default FooterNav;
