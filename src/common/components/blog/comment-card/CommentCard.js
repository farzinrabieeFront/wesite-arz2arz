import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { BsArrowReturnLeft } from "react-icons/bs";
import CommentReplay from "./CommentReplay";
import Styles from "./Comment.module.scss";
import TextAreaReplay from "./TextAreaReplay";

const CommentCard = ({ itmComment, ind, setStateActive, stateActive }) => {
  const [AciveReplay, setAciveReplay] = useState();
  const handleClickShowReplay = (ind) => {
    if (stateActive !== ind) {
      setStateActive(ind);
    } else {
      setStateActive("");
    }
  };

  return (
    <>
      <div className="p-2">
        <div className="d-flex mb-3">
          <div style={{ width: "45px", height: "43px" }}>
            <img src={"/images/personExample.png"} alt="" />
          </div>
          <div className="me-2">
            <p className="mb-1 text-gray-5 size-2">{itmComment?.name}</p>
            <p className="mb-0 text-gray-2 size-1">{itmComment?.time}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center  flex-column align-items-center mb-4">
          <p className={`${Styles.textComment} px-5  text-gray-5 size-2  mb-4`}>
            {itmComment?.desc}
          </p>
          <div className="d-flex w-100 pe-4">
            <div
              className="d-flex align-items-center justify-content-between text-gray-5 pe-3 "
              style={{ width: "40%" }}
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
                onClick={() => handleClickShowReplay(ind)}
              >
                <span className="ms-2 text-gray-2">
                  <BsArrowReturnLeft
                    className={`${stateActive === ind ? "text-success" : ""}`}
                  />
                </span>
                <span
                  className={`${
                    stateActive === ind ? "text-success" : ""
                  }  d-flex align-items-center size-2 text-gray-2`}
                >
                  {" "}
                  پاسخ
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*{stateActive === ind ? (*/}
        <TextAreaReplay stateActive={stateActive} ind={ind} />
        {/*) : null}*/}
        {itmComment?.replay.length > 0 &&
          itmComment?.replay?.map((itmReplay, ind) => (
            <CommentReplay
              itmComment={itmComment}
              itemReplay={itmReplay}
              ind={ind}
              AciveReplay={AciveReplay}
              setAciveReplay={setAciveReplay}
            />
          ))}
        <hr />
      </div>
    </>
  );
};

export default CommentCard;
