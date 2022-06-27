import { useField } from "formik";
import { Form } from "react-bootstrap";
// import InputElement from "../input/Input";
import Styles from "./AmountInput.module.scss";
import { RiErrorWarningLine } from "react-icons/ri";
// import Num2persian from "num2persian";
import { forwardRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import * as math from "mathjs";
import classNames from "classnames";
// import { amountFilter } from "./inputFilters";

function percentFormatter(v) {
  return `${v} %`;
}
// const SliderWithTooltip = createSliderWithTooltip(Slider);

function AmountInput(
  {
    label,
    symbol,
    limit = {},
    isValid,
    isInvalid,
    disabled,
    autocomplete,
    inputClassName,
    sliderVariant,
    minValue,
    maxValue,
    maxDecimal,
    guidText: GuidText,
    amountString,
    hiddenSymbolLabel,
    onPaste,
    onKeyDown,
    ...props
  },
  ref
) {
  const [{ name, value = 0, ...field }, { error, touched }, { setValue }] =
    useField(props);

  const pasteHandler = (evt) => {
    let clipboardData, pastedData;
    // evt.stopPropagation();

    clipboardData = evt.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData("Text");

    if (!new RegExp(/^[\d.]+$/, "g").test(pastedData)) {
      evt.preventDefault();
    } else if (pastedData.includes(".")) {
      // if (math.larger(pastedData.split(".").length, 2)) {
      //   evt.preventDefault();
      //   let [num, decimals] = pastedData.split(".")

      //   setValue(
      //     pastedData.split(".").slice(0, 2).join(".")
      //   );
      // } else
      // if (math.larger(pastedData.split(".")[1].length, maxDecimal)) {
      evt.preventDefault();
      let [num, decimals] = pastedData.split(".");
      setValue(
        [num, decimals.split("").slice(0, maxDecimal).join("")].join(".")
      );
      // }
    }
    onPaste();
  };
  const amountFilter = (evt) => {
    let ASCIICode = evt.which ? evt.which : evt.keyCode;

    if (
      ASCIICode > 31 &&
      (ASCIICode < 46 || ASCIICode > 57 || ASCIICode === 47)
    ) {
      evt.preventDefault();
    } else if (
      ASCIICode === 46 &&
      new RegExp(/\./, "g").test(evt.target.value)
    ) {
      evt.preventDefault();
    }
  };

  const keyDownHandler = (evt) => {
    let ASCIICode = evt.which ? evt.which : evt.keyCode;

    if (maxDecimal) {
      let current_value = math.largerEq(Number(evt.key), 0)
        ? [evt.target.value, evt.key].join("")
        : evt.target.value;

      if (current_value.includes(".")) {
        if (!math.smaller(current_value.split(".")[1].length, maxDecimal + 1))
          evt.preventDefault();
      }
    } else if (ASCIICode === 110 || ASCIICode === 190) {
      evt.preventDefault();
    }

    // onKeyDown();
  };

  const inputClasses = classNames(
    inputClassName,
    "en",
    "fw-500",
    symbol ? Styles.prependPadding : ""
  );
  const input = (
    <Form.Control
      className={inputClasses}
      type="text"
      inputMode="decimal"
      isInvalid={isInvalid || (error && touched)}
      autoComplete={autocomplete ? "on" : "off"}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
      value={value}
      onKeyPress={amountFilter}
      onKeyDown={keyDownHandler}
      onPaste={pasteHandler}
      {...{ isValid, ref, name, ...props }}
    />
  );

  const inputLabel = label ? (
    <Form.Label className="fw-500 size-1 text-gray-3">
      {label}
      {hiddenSymbolLabel ? null : (
        <span className="text-gray-2 me-1 en">{symbol}</span>
      )}
    </Form.Label>
  ) : null;

  const inputLimit =
    "label" in limit ? (
      <div className="d-flex align-items-center">
        <span className="size-1 text-gray-2 ms-1">{`${limit.label} :`}</span>
        <span
          className="size-1 text-gray-4 en pointer"
          onClick={() => setValue(math.ceil(limit.value || 0, maxDecimal))}
        >
          {math.ceil(limit.value || 0, maxDecimal).toString()}
          <span className="text-gray-2 en ms-1">{symbol}</span>
        </span>
      </div>
    ) : null;

  const inputSymbol = symbol ? (
    <span className={Styles.inputPrepend}>
      <span className="text-gray-1 size-1 fw-500">{symbol}</span>
    </span>
  ) : null;

  const slider = (
    <Slider
      {...field}
      tipFormatter={percentFormatter}
      onChange={(val) => {
        const amount = math.ceil(
          math.evaluate(`${maxValue}% * ${val}`),
          maxDecimal
        );
        setValue(amount);
      }}
      name={name}
      value={math.evaluate(`${0}`)}
      marks={{ 0: "", 25: "", 50: "", 75: "", 100: "" }}
      trackStyle={{ backgroundColor: sliderVariant || "#00BABA" }}
      handleStyle={{ borderColor: sliderVariant || "#00BABA" }}
      activeDotStyle={{ borderColor: sliderVariant || "#00BABA" }}
    />
  );

  const subTitle =
    error && touched ? (
      <span className={`${Styles.inputErrorText} text-danger size-1 `}>
        <RiErrorWarningLine size="16" /> {error}
      </span>
    ) : amountString && value ? (
      <Form.Text
        className={`${Styles.inputText} text-gary-2 size-1 px-1 fw-500 text-start`}
      >
        {`${value} تومان`}
      </Form.Text>
    ) : GuidText ? (
      GuidText
    ) : null;

  return (
    <Form.Group className={`position-relative mb-3`}>
      {label || "label" in limit ? (
        <div className="d-flex justify-content-between px-1 mb-1">
          {inputLabel}
          {inputLimit}
        </div>
      ) : null}

      <div className="position-relative">
        {input}

        {inputSymbol}

        {subTitle}
      </div>

      <div className="px-1 mt-4 py-2">{slider}</div>
    </Form.Group>
  );
}
export default forwardRef(AmountInput);
