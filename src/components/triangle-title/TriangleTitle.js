import React from "react";
import { VscTriangleLeft } from "react-icons/vsc";

const TriangleTitle = ({ children }) => {
  return (
    <div className="d-flex align-items-center">
      <VscTriangleLeft className="text-blue ms-1" />
      {children}
    </div>
  );
};

export default TriangleTitle;
