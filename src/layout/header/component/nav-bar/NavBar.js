import React from "react";
import { Nav } from "react-bootstrap";
import MenuItems from "../menu-items/MenuItems";
import Styles from "./NavBar.module.scss";
import { FiChevronLeft } from "react-icons/fi";

const NavBar = ({ mobileMenu }) => {
  return (
    <>
      {mobileMenu ? (
        <ul>
          <li>
            <MenuItems hasArrow title="صفحه اصلی" url="/" />{" "}
          </li>
          <li>
            <MenuItems hasArrow title="قیمت ارزها" url="/price" />
          </li>
          <li>
            <MenuItems hasArrow title="سوالات متداول" url="/faq" />
          </li>
          <li>
            <MenuItems hasArrow title="بلاگ" url="/blog" />
          </li>
          <li>
            <MenuItems hasArrow title="درباره ما" url="/about" />
          </li>
          <li>
            <MenuItems hasArrow title="تماس با ما" url="/contact-us" />
          </li>
        </ul>
      ) : (
        <Nav>
          <Nav.Item>
            <MenuItems title="صفحه اصلی" url="/" />
          </Nav.Item>
          <Nav.Item>
            <MenuItems title="قیمت ارزها" url="/price" />
          </Nav.Item>
          <Nav.Item>
            <MenuItems title="سوالات متداول" url="/faq" />
          </Nav.Item>
          <Nav.Item>
            <MenuItems title="بلاگ" url="/blog" />
          </Nav.Item>
          <Nav.Item>
            <MenuItems title="درباره ما" url="/about" />
          </Nav.Item>
          <Nav.Item>
            <MenuItems title="تماس با ما" url="/contact-us" />
          </Nav.Item>
        </Nav>
      )}
    </>
  );
};

export default NavBar;
