import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonElement({
  children,
  size = "md",
  className,
  variant = "success",
  isFullWidth = false,
  isLoading = false,
  outlined = false,
  disable = false,
  ...rest
}) {
  return (
    <Button
      variant={`${outlined ? "outline-" : ""}${variant}`}
      size={size}
      className={`${className} rounded-12 text-nowrap`}
      block={isFullWidth}
      disabled={isLoading || disable}
      {...rest}
    >
      {isLoading ? (
        <img src="/svg/bars.svg" style={{ height: "26px" }} />
      ) : (
        children || "button"
      )}
    </Button>
  );
}
