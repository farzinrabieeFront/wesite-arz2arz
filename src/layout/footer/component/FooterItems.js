import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";

const FooterItems = ({ title, url }) => {
  return (
    <>
      <Nav.Item>
        <Link href={url} as={url}>
          <a className="darkBlue px-0 pl-5 yekan-Medium">
            {title}
          </a>
        </Link>
      </Nav.Item>
    </>
  );
};

export default FooterItems;
