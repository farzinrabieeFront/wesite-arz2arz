import React, { useState } from "react";
import News from "../common/components/home/News/News";
import Faqs from "../common/components/home/faqs/Faqs";
import ContactUs from "../common/components/home/contact-us/ContactUs";
import FiatTrade from "../common/components/home/fiat-trade/FiatTrade";
import Landingbanner from "../common/components/home/landing-banner/Landingbanner";
import Trade from "../common/components/home/trade/Trade";
import InstantPrice from "../common/components/home/InstantPrice/InstantPrice";

export default function Home() {
  return [
    <Landingbanner />,
    <FiatTrade />,
    <InstantPrice />,
    <Trade />,
    <News />,
    <Faqs />,
    <ContactUs />,
  ];
}
