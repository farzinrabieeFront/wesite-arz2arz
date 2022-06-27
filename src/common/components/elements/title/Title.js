import React from "react";
import Link from "next/dist/client/link";

import { FiChevronLeft } from "react-icons/fi";
import ButtonElement from "../form/button/Button";
import Styles from "./Title.module.scss";

const Title = ({
  lightTitle,
  darkTitle,
  waveLine,
  className,
  noneBefore,
  button,
  href = "",
}) => {
  return (
    <div
      className={`${className}  ${Styles.parentTittle} d-flex align-items-end text-right my-2 `}
    >
      <div
        className={`${Styles.icon} ${
          noneBefore ? Styles.noneBefore : ""
        } d-none d-md-flex`}
      />
      <h2 className={`${Styles.title} text-md-end text-center text-nowrap`}>
        <span className="text-blue yekan-Bold d-block size-6 mb-0">
          {lightTitle}
        </span>
        <span className="darkBlue yekan-Bold d-block size-6">{darkTitle}</span>
      </h2>
      {waveLine ? (
        <div
          className={`${Styles.waveLine} ${
            !button ? Styles.notBtn : ""
          } d-none d-lg-flex align-items-center`}
        >
          <img src="/svg/afterTitle.svg" />
          <div
            className={`${
              !button ? Styles.notBtnTitle : Styles.btnTittle
            }  w-100`}
          >
            {button ? (
              <Link href={href}>
                <ButtonElement
                  outlined
                  variant="lightBlue"
                  size="lg"
                  className={`${Styles.btn} px-4 py-2 size-4 yekan-Medium`}
                >
                  مشاهده همه
                  <FiChevronLeft size={22} />
                </ButtonElement>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Title;
