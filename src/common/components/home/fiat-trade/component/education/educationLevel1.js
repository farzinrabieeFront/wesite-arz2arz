import React from "react";
import ButtonElement from "../../../../elements/form/button/Button";
import { AiOutlineLeft } from "react-icons/ai";

const EducationLevel1 = ({ handelClickNextLevel }) => {
  return (
    <>
      <div className="mb-5 mb-lg-0">
        <p className="grayBlue mb-3 mb-lg-5 text-justify mt-5">
          تجربه کاربری برای ما مهمه...!
        </p>
        <p className="grayBlue mb-3 mb-lg-5 text-justify">
          {" "}
          آسون ترین روش خرید و فروش ارز رو با ما تجربه کنید.پلتفرم خرید و فروش
          صرافی ارز تو ارز به شما این امکان رو میده که بدون دانش قبلی بتونید به
          راحتی ارز خرید و فروش کنید{" "}
        </p>
        <p className="mb-3 mb-lg-5 text-justify d-none d-lg-flex">
          برای یک آموزش سری آماده ای؟بزن رو دکمه زیر تا بهت یاد بدیم...
        </p>
        <div className="d-lg-flex justify-content-center justify-content-md-start d-none">
          <ButtonElement
            variant="outline-lightBlueText"
            size="lg"
            className="px-3 py-2 is-size-4 yekan-Medium "
            onClick={() => handelClickNextLevel(1)}
          >
            شروع آموزش
            <span className="mx-1">
              {" "}
              <AiOutlineLeft />
            </span>
          </ButtonElement>
        </div>
      </div>
    </>
  );
};

export default EducationLevel1;
