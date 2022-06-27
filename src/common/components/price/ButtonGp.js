import React, { useState } from "react";
import ButtonElement from "../elements/form/button/Button";
import Styles from "../../../styles/Price.module.scss";
import { Row } from "react-bootstrap";
const categoryList = [
  "همه",
  "داغ ترین ها",
  "منتخب من",
  "بیشترین سود",
  "بیشترین ضرر",
];
const ButtonGp = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <>
      <Row
        className={`${Styles.ParentBtns} flex-nowrap my-4 justify-content-sm-center`}
      >
        {categoryList?.map((item, index) => {
          return (
            <ButtonElement
              outlined
              variant="light"
              active={activeCategory === index}
              className="size-2 py-3 py-lg-2 px-3 px-lg-4 w-auto mx-2"
              onClick={() =>
                activeCategory != index && setActiveCategory(index)
              }
            >
              {item}
            </ButtonElement>
          );
        })}
      </Row>
    </>
  );
};

export default ButtonGp;
