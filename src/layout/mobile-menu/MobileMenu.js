import React from "react";
import Link from "next/link";
import Styles from "./MobileMenu.module.scss";
import { RiExchangeFundsLine, RiCloseFill } from "react-icons/ri";
import CustomizedButton from "../../components/form/button/Button";
import { FiChevronDown, FiPlus } from "react-icons/fi";
import NavBar from "../header/component/nav-bar/NavBar";
import SupportIcon from "../../components/support-icon/SupportIcon";

const MobileMenu = ({ setOpenMenu, openMenu }) => {
  return (
    <div
      className={`${Styles.fixed} ${
        openMenu ? Styles.show : ""
      }  align-items-stretch`}
    >
      <div className={Styles.box}>
        <div className={`${Styles.header} p-3 text-center`}>
          <span className={Styles.close} onClick={() => setOpenMenu(false)}>
            <RiCloseFill size="35" />
          </span>
          <p>
            <span>
              {" "}
              <img src="./images/usermenuicon-rs.png" />
            </span>
          </p>
          <div>
            <CustomizedButton
              variant="lightBlue"
              size="sm"
              className="rounded-pill py-2 shadow font-weight-bold"
            >
              ورود / ثبت نام
              <FiChevronDown size="18" className="mr-1" />
            </CustomizedButton>
          </div>
        </div>

        <div className={`${Styles.body} py-4`}>
          <div className={Styles.menuItems}>
            <NavBar mobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
