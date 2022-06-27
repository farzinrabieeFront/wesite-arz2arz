import React, { useEffect, useState } from "react";

// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window?.scrollY > 5 ? setScrollY(true) : setScrollY(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header scrollY={scrollY} />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer />
    </>
  );
}
