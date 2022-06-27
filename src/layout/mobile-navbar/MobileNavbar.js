import React, { useEffect, useState } from "react";
import Styles from "./MobileNavbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

import { RiAppsLine, RiAppsFill, RiFundsLine, RiWalletLine } from 'react-icons/ri'
import { HiOutlineCurrencyDollar} from 'react-icons/hi'
const MobileNavbar = ({ activeTheme }) => {
    const { pathname } = useRouter();
    return (
        <div className={`${Styles.rspeFixedMenu} flex-wrap justify-content-around align-items-center`}>

            <div className={`${Styles.rspeFixedMenuItems} ${pathname === "/" ? Styles.active : " "}`} >
                <Link href="/">
                    <a className="text-center">
                        <RiAppsLine size="26" /> 
                        <p className="mb-0 text-center">داشبورد</p>
                    </a>
                </Link>
            </div>
            <div className={`${Styles.rspeFixedMenuItems} ${pathname === "/login" ? Styles.active : " "}`} >
                <Link href="/">
                    <a className="text-center">
                        <RiFundsLine size="26" />
                        <p className="mb-0 text-center">معاملات</p>
                    </a>
                </Link>
            </div>
            <div className={`${Styles.rspeFixedMenuItems} ${pathname === "/login" ? Styles.active : " "}`} >
                <Link href="/">
                    <a className="text-center">
                        <RiWalletLine size="26" />
                        <p className="mb-0 text-center">کیف پول</p>
                    </a>
                </Link>
            </div>

            <div className={`${Styles.rspeFixedMenuItems} ${pathname === "/price" ? Styles.active : " "}`} >
                <Link href="/price">
                    <a className="text-center">
                        <HiOutlineCurrencyDollar size="26" />
                        <p className="mb-0 text-center">قیمت ارزها</p>
                    </a>
                </Link>
            </div>
            {/* <div className={`${Styles.rspeFixedMenuItems} ${pathname === "/blog" ? Styles.active : " "}`} >
                <Link href="/blog">
                    <a className="text-center">
                        <HiOutlineNewspaper size="30" />
                        <p className="mb-0 text-center">بلاگ</p>
                    </a>
                </Link>
            </div> */}
            {/* <div className={`${Styles.rspeFixedMenuItems} ${pathname === "/faq" ? Styles.active : " "}`} >
                <Link href="/faq">
                    <a className="text-center">
                        <HiOutlineQuestionMarkCircle size="30" />
                        <p className="mb-0 text-center">سوالات متداول</p>
                    </a>
                </Link>
            </div> */}


        </div>
    );
};
export default MobileNavbar;
