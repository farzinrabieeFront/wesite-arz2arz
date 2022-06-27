import React from "react";
import Styles from "./Comment.module.scss";
import ButtonElement from "../../elements/form/button/Button";
import { FiChevronLeft } from "react-icons/fi";

const TextAreaReplay = ({ ind, stateActive }) => {
  return (
    <>
      <div
        className={`${
          stateActive === ind
            ? Styles.replayCommentActive
            : Styles.replayComment
        } d-flex flex-column align-items-center  justify-content-center mb-3`}
      >
        {stateActive === ind ? (
          <>
            <p
              className="d-flex justify-content-start mb-1 text-gray-3"
              style={{ width: "90%" }}
            >
              پاسخ شما
            </p>
            <textarea
              id="areaCommnet"
              name="w3review"
              className={`${Styles.textArea} mb-3 p-3`}
              placeholder="پاسخ خود یا بازبرخورد خود را بنویسید"
              rows="5"
            />
            <div
              style={{ width: "90%" }}
              className="d-flex justify-content-center justify-content-md-start"
            >
              <ButtonElement
                type="submit"
                variant="lightBlue"
                size="md"
                className={`${Styles.btnSend} size-3 radius-md shadow font-weight-bold position-relative`}
              >
                ارسال
                <FiChevronLeft size="24" className={Styles.buttonIcon} />
              </ButtonElement>
            </div>
          </>
        ) : (
          ""
        )}

        {/*<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">*/}
        {/*  <Form.Label>پاسخ شما</Form.Label>*/}
        {/*  <Form.Control as="textarea" rows={10} />*/}
        {/*</Form.Group>*/}
      </div>
    </>
  );
};

export default TextAreaReplay;
