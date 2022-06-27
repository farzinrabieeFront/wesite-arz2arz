import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Styles from "./Navbar.module.scss";
import { Nav } from "react-bootstrap";

const Navbar = ({ mobileMenu }) => {
  const router = useRouter();

  const navItems = [
    { title: "خانه", url: "/", icon: "images/index/mobileMenu-icons/home.svg" },
    {
      title: "قیمت ارزها",
      url: "/price",
      icon: "images/index/mobileMenu-icons/fiat.svg",
    },
    {
      title: "بلاگ",
      url: "/blog",
      icon: "images/index/mobileMenu-icons/blog.svg",
    },
    {
      title: "سوالات متداول",
      url: "/faq",
      icon: "images/index/mobileMenu-icons/question.svg",
    },
    {
      title: "درباره ما",
      url: "/about",
      icon: "images/index/mobileMenu-icons/about.svg",
    },
    {
      title: "تماس با ما",
      url: "/contact-us",
      icon: "images/index/mobileMenu-icons/phone.svg",
    },
  ];

  return (
    <Nav as="nav">
      <ul
        className={`${
          mobileMenu
            ? `${Styles.mobile} mt-4`
            : `${Styles.desktop} center-content`
        } w-100 mb-0 px-0`}
      >
        {navItems.map((item, index) => (
          <li
            key={index}
            className={router.pathname === item.url ? Styles.active : ""}
          >
            <Link href={item.url}>
              <a
                className={`${Styles.link} px-4 px-md-2 mx-0  mx-lg-2 nav-link`}
              >
                {mobileMenu ? (
                  <img src={item.icon} alt="" className="ms-3" />
                ) : null}
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Navbar;
