import { forwardRef, useEffect, useState } from "react";
import Styles from "./Input.module.scss";
import { Form } from "react-bootstrap";
import persianJs from "persianjs";
import { RiErrorWarningLine } from "react-icons/ri";
import { useField } from "formik";

const CustomizedInput = forwardRef(
  (
    {
      maxLength = 50,
      label = "",
      placeholder = "",
      plaintext = false,
      readOnly = false,
      disabled = false,
      className = "",
      Prepend,
      size = "md",
      labelClassName = "",
      type = "text",
      isInvalid,
      isValid,
      rows,
      textArea,
      autocomplete = false,
      amountString,
      textIcon,
      ...rest
    },
    ref
  ) => {
    const [num, setNum] = useState(0);
    const [{ name, value, ...field }, { error, touched }, { setValue }] =
      useField(rest);

    return (
      <Form.Group className={`position-relative text-right mb-0`}>
        {label ? (
          <Form.Label
            className={`${Styles.inputLabel} ${labelClassName} px-1 size-1 yekan-Medium`}
          >
            {label}
          </Form.Label>
        ) : null}
        <Form.Control
          {...field}
          className={`${className} ${Prepend ? Styles.prependPadding : null} ${
            textIcon ? Styles.textInput : null
          }`}
          type={type}
          placeholder={placeholder}
          size={size}
          onKeyUp={(e) => amountString && setNum(e.target.value)}
          readOnly={readOnly}
          plaintext={plaintext}
          disabled={disabled}
          ref={ref}
          isValid={isValid}
          isInvalid={isInvalid || (error && touched)}
          name={name}
          value={value}
          maxLength={maxLength}
          rows={textArea && rows}
          as={textArea && "textarea"}
          autocomplete={autocomplete ? "on" : "off"}
          {...rest}
        />
        {textIcon ? <span className={Styles.textIcon}>{textIcon}</span> : null}
        {Prepend ? <span className={Styles.prepend}>{Prepend}</span> : null}
        <span
          className={`${Styles.inputErrorText} position-absolute text-nowrap end-0 text-danger size-1`}
        >
          {error && touched ? (
            <>
              <RiErrorWarningLine size="16" /> {error}
            </>
          ) : null}
        </span>
        <div className="position-absolute start-0 text-gray-05 FaNum size-1 mt-1">
          {textArea ? <>{value ? value.length : 0}/255</> : null}
        </div>
      </Form.Group>
    );
  }
);
export default CustomizedInput;
