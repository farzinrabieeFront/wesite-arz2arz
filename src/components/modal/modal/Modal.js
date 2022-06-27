import React from "react";
import { Modal } from "react-bootstrap";
import { IoAlertCircle } from "react-icons/io5";
import TriangleTitle from "../../triangle-title/TriangleTitle";

const CustomizedModal = ({
  size = "md",
  header: Header,
  title,
  children,
  footer: Footer,
  onHide,
  alert,
  show = false,
  className = "",
  bodyClassName = "",
  contentClassName = "",
  ...rest
}) => {
  return (
    <Modal
      {...rest}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
      className={`${className} `}
      title={title}
      contentClassName={contentClassName}
    >
      {title ? (
        <Modal.Header className="px-4 pt-4" closeButton>
          <Modal.Title
            className={`${alert ? "text-red" : "text-gray-4"} size-1`}
          >
            {alert ? (
              <>
                <IoAlertCircle size="20" />
                <span className="mr-2">{title}</span>
              </>
            ) : (
              <TriangleTitle>{title}</TriangleTitle>
            )}
          </Modal.Title>
        </Modal.Header>
      ) : null}
      <Modal.Body className={`p-4 ${bodyClassName || ""}`}>
        {children}
      </Modal.Body>
    </Modal>
  );
};
export default CustomizedModal;
