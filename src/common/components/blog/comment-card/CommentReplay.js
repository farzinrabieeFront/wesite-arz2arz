import React from "react";
import { FiHeart } from "react-icons/fi";
import { BsArrowReturnLeft } from "react-icons/bs";
import TextAreaReplay from "./TextAreaReplay";
import Styles from "./Comment.module.scss";

const CommentReplay = ({
  itmComment,
  itemReplay,
  ind,
  AciveReplay,
  setAciveReplay,
}) => {
  const handleCliCkActiveReply = (ind) => {
    if (AciveReplay === ind) {
      setAciveReplay("");
    } else {
      setAciveReplay(ind);
    }
  };
  return (
    <>
      <div className="p-2 pe-5 mb-4">
        <div className="d-flex mb-3">
          <div style={{ width: "45px", height: "43px" }}>
            <img src={"/images/personExample.png"} alt="" />
          </div>
          <div className="me-2">
            <p className="mb-1 text-gray-5 size-2">
              {itemReplay?.name}{" "}
              <span className="size-1 text-gray-2 me-2">
                ({itmComment.name})
              </span>{" "}
            </p>
            <p className="mb-0 text-gray-2 size-1">{itemReplay?.time}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column mb-3 align-items-center">
          <p className={`${Styles.textComment} pe-5  text-gray-5 size-2  mb-4`}>
            {itemReplay?.desc}
          </p>
          <div className="d-flex w-100 pe-4">
            <div
              className="d-flex align-items-center justify-content-between text-gray-5 pe-3 "
              style={{ width: "30%" }}
            >
              <div className="d-flex">
                <span className="ms-2 text-gray-2">24</span>
                <span className="d-flex align-items-center">
                  {" "}
                  <FiHeart className="text-gray-2" />
                </span>
              </div>
              <div
                className="d-flex pointer"
                onClick={() => handleCliCkActiveReply(ind)}
              >
                <span
                  className={`${
                    AciveReplay === ind ? "text-success" : ""
                  } ms-2 text-gray-2`}
                >
                  <BsArrowReturnLeft />
                </span>
                <span
                  className={`${
                    AciveReplay === ind ? "text-success" : ""
                  }  d-flex align-items-center size-2 text-gray-2`}
                >
                  {" "}
                  پاسخ
                </span>
              </div>
            </div>
          </div>
        </div>
        <TextAreaReplay stateActive={AciveReplay} ind={ind} />
      </div>
    </>
  );
};

export default CommentReplay;
