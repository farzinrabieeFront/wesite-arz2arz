import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../elements/title/Title";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import ButtonElement from "../../elements/form/button/Button";
import { FiChevronLeft } from "react-icons/fi";
import Styles from "./InstantPrice.module.scss";

const InstantPrice = () => {
  const [selected, setSelected] = useState({
    item: currencyPriceData[2],
    activeIndex: 2,
  });

  const handleClickSelected = (itm, ind) => {
    setSelected((prevState) => {
      return { ...prevState, item: itm, activeIndex: ind };
    });
  };

  return (
    <div className={`${Styles.backImG} position-relative`}>
      <div className={` py-5 container-fluid container-lg`}>
        <Row>
          <Col sm={12}>
            <Title
              lightTitle="قیمت لحظه ای"
              darkTitle="ارز های دیجیتال"
              className="justify-content-center justify-content-md-start"
              waveLine
              button
              href="/blog"
            />
          </Col>
          <Col sm={12} className="py-5">
            <Cards
              data={currencyPriceData}
              selected={selected}
              handleClickSelected={handleClickSelected}
            />
          </Col>
          <Col sm={12}>
            <CardDetails data={selected.item} />
          </Col>
          <Col sm={12} className="my-5">
            <div className="d-flex w-100 justify-content-center d-lg-none">
              <ButtonElement
                outlined
                variant="lightBlue"
                size="lg"
                className={`px-4 py-2 size-4 yekan-Medium`}
              >
                مشاهده همه
                <FiChevronLeft size={22} />
              </ButtonElement>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${Styles.cirlceBack} d-none d-lg-flex`}></div>
    </div>
  );
};
const currencyPriceData = [
  {
    name: "Bitcoin",
    faName: "بیت کوین",
    image: "/svg/BitCoin.svg",
    price: "$59,482.81",
    rialPrice: "1,493,661,309 ",
    buy: "1,493,661,309 IRR",
    sell: "1,493,661,309 IRR",
    marketCap: " $1,118,610,000,000 ",
    dailyTransaction: "$64,940,300,000",
    chartData: [150, 191, 420, 160, 150, 100, 60, 15, 150],
  },
  {
    name: "Ethereum",
    faName: "اتریوم",
    image: "/svg/tether.svg",
    price: "$2,049.81",
    rialPrice: "52,445,415 ",
    buy: "265,661,309 IRR",
    sell: "254,661,309 IRR",
    marketCap: " $118,610,002,650 ",
    dailyTransaction: "$4,900,565,020",
    chartData: [150, 191, 180, 130, 150, 178, 60, 15, 150],
  },
  {
    name: "ethereum (ETH)",
    faName: "اتریوم",
    image: "./images/Tether_ICON.png",
    price: "$1,010.01",
    rialPrice: "2,531,415 ",
    buy: "122,661,309 IRR",
    sell: "123,661,309 IRR",
    marketCap: " $118,610,002,650 ",
    dailyTransaction: "$450,565,020",
    chartData: [150, 191, 20, 160, 150, 60, 120, 15, 150],
  },
  {
    name: "Litecoin",
    faName: "لایت کوین",
    image: "./svg/Litecoin.svg",
    price: "$201,652.50",
    rialPrice: "52,531,415 ",
    buy: "122,661,309 IRR",
    sell: "123,661,309 IRR",
    marketCap: " $118,610,002,650 ",
    dailyTransaction: "$450,565,020",
    chartData: [150, 191, 180, 160, 150, 178, 60, 15, 150],
  },
  {
    name: "Litecoin",
    faName: "لایت کوین",
    image: "./svg/Ripple.svg",
    price: "$201,652.50",
    rialPrice: "52,531,415 ",
    buy: "122,661,309 IRR",
    sell: "123,661,309 IRR",
    marketCap: " $118,610,002,650 ",
    dailyTransaction: "$450,565,020",
    chartData: [150, 191, 180, 160, 150, 178, 60, 15, 150],
  },
];

export default InstantPrice;
