/**internal import */
import { useState, useEffect, useRef } from "react";
// import { orderServices } from "../../../../../services";
// import { Toastify } from "../../../../../utils";
// import { useOrder } from "../../../../../context/OrderServises";

/**external  import */
import { Form, Formik, Field } from "formik";
import { Col } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { create, all } from "mathjs";
import * as yup from "yup";

/** components import */
import AmountInput from "../../../../../elements/form/input/amount-input/AmountInput";
import InputElement from "../../../../../elements/form/input/element-input/input/Input";
import MarketInput from "../../../../../elements/form/input/input-market/MarketInput";
import CustomizedButton from "../../../../../../../components/form/button/Button";

const math = create(all, {
  number: "BigNumber",
  preciaion: 64,
});
let exchange = {
  banks: [
    {
      hardNumber: "610433",
      isDeleted: false,
      logo: "1647161969763-mellat_bnk.png",
      name: "بانک ملت",
      _id: "622db271360a2b7dc4794ae1",
    },
    {
      hardNumber: "621986",
      isDeleted: false,
      logo: "1647162044487-saman_bnk.png",
      name: "بانک سامان",
      _id: "622db2bc360a2b7dc4794b2d",
    },
  ],
  error: "",
  fees: {
    FIAT: "0.1",
    LIMIT: "0.1",
    WITHDRAW: "0.1",
  },
  limits: {
    exchangeLimits: {
      fiatDeposit: {
        highest: "50000000",
        lowest: "500000",
      },
      fiatWithdraw: {
        highest: "50000000",
        lowest: "500000",
      },
      _id: "622deba70a79ac6587a2da01",
    },
    orderLimits: {
      fiatBuy: {
        highest: "1500",
        lowest: "12",
      },
      fiatSell: {
        highest: "1500",
        lowest: "12",
      },
      _id: "622dea8d0a79ac6587a2d83e",
    },
    loading: false,
  },
};

export default function Limit({ refreshHistory }) {
  const formikRef = useRef(null);
  // const { spot } = useParams();
  // const navigate = useNavigate();
  // const { state } = useLocation();

  const [state] = useState({ type: "sell" });
  const spot = "BTC-USDT";
  // const { prices, balance } = useOrder();

  const [balance] = useState({
    fiatWallets: "",
    spotWallets: "",
  });

  const { LIMIT: internalFee = 0 } = exchange.fees;

  const [loading, setLoading] = useState(false);
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [maximumAmount, setMaximumAmount] = useState(0);
  const [minimumReqPrice, setMinimumReqPrice] = useState(0);
  const [maximumReqPrice, setMaximumReqPrice] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [maximumDecimalAmount, setMaximumDecimalAmount] = useState(0);
  const [maximumDecimalPrice, setMaximumDecimalPrice] = useState(0);
  const [baseAssetBalance, setBaseAssetBalance] = useState(0);
  const [base, setBase] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    formikRef.current.resetForm();
  }, [spot]);

  const vaildationMethodSchema = () => {
    let schema = {
      amount: yup
        .number("فقط عدد لاتین وارد کنید.")
        .required("این فیلد الزامی است.")
        .min(
          minimumAmount,
          `حداقل مقدار مجاز برابر ${base} ${math
            .ceil(minimumAmount, maximumDecimalAmount)
            .toString()} است`
        )
        .max(
          maximumAmount,
          `حداکثر مقدار مجاز پرداختی برابر ${maximumAmount.toLocaleString()} ${base} است`
        )
        .lessThan(baseAssetBalance, "موجودی حسابت کافی نیست"),
      requestedPrice: yup
        .number("فقط عدد لاتین وارد کنید.")
        .required("این فیلد الزامی است.")
        .min(
          minimumReqPrice,
          `حداقل قیمت مجاز درخواستی برابر ${math
            .fix(minimumReqPrice, maximumDecimalAmount)
            .toLocaleString()} ${base} است`
        )
        .max(
          maximumReqPrice,
          `حداکثر قیمت مجاز درخواستی برابر ${maximumReqPrice.toLocaleString()} ${base} است`
        ),
    };

    return yup.object().shape(schema);
  };

  const onSubmit = async (
    { amount, requestedPrice, type, market },
    formActions
  ) => {
    try {
      const body = {
        baseAsset: base,
        quoteAsset: quote,
        amount,
        requestedPrice,
      };

      setLoading(true);
      // const { data, status } = await orderServices.limit(body);
      // if (status === 202) {
      //   Toastify.success(data.message);
      //   formActions.resetForm({
      //     values: {
      //       type,
      //       amount: "",
      //       requestedPrice: "",
      //       market,
      //     },
      //   });
      // }
    } catch (error) {
      // Toastify.error(error.message);
    } finally {
      setLoading(false);
      refreshHistory();
    }
  };

  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize={true}
      validateOnChange={true}
      initialValues={{
        type: state?.type || "sell",
        amount: "",
        market: spot.split("-").join(""),
        requestedPrice: "",
      }}
      validationSchema={vaildationMethodSchema}
      // validate={vaildationMethod}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, values, setFieldValue }) => (
        <Form className="d-flex flex-wrap justify-content-center align-items-stretch px-2 pb-3">
          <Col xs={12} className="px-1 mb-4 pb-1">
            <Field
              as={MarketInput}
              name="market"
              labelClassName="size-1 text-gray-3"
              type={values.type}
              userBalances={balance.spotWallets}
              changeTypeHandler={(type) => {
                setFieldValue("type", type);
              }}
              setAmount={(amount) =>
                setFieldValue("amount", math.fix(amount, maximumDecimalAmount))
              }
            />
          </Col>

          <Col xs={12} id={"farzin"} className="px-1 mb-2">
            <Field
              as={InputElement}
              label="قیمت"
              name="requestedPrice"
              type="tel"
              inputMode="decimal"
              prepend={
                <span className="size-1 fw-500 text-gray-1 en">
                  {spot.split("-").join(" / ")}
                </span>
              }
              tradeInput
              className="en fw-500"
              maxLength={15}
              onKeyDown={(evt) => {
                let current_value = math.largerEq(Number(evt.key), 0)
                  ? [evt.target.value, evt.key].join("")
                  : evt.target.value;

                if (current_value.includes(".")) {
                  if (
                    math.larger(
                      current_value.split(".")[1].length,
                      maximumDecimalPrice
                    )
                  ) {
                    evt.preventDefault();
                  }
                }
              }}
              onPaste={(evt) => {
                let clipboardData, pastedData;
                evt.stopPropagation();

                clipboardData = evt.clipboardData || window.clipboardData;
                pastedData = clipboardData.getData("Text");

                if (!new RegExp(/^[\d.]+$/, "g").test(pastedData)) {
                  evt.preventDefault();
                } else if (math.largerEq(pastedData.split(".").length, 2)) {
                  evt.preventDefault();
                  setFieldValue(
                    "amount",
                    pastedData.split(".").slice(0, 2).join(".")
                  );
                }
              }}
            />
          </Col>

          <Col xs={12} className="px-1 mb-2">
            <Field
              as={AmountInput}
              label="مقدار"
              name="amount"
              symbol={base}
              limit={{
                label: "حداقل مقدار",
                value: minimumAmount,
              }}
              sliderVariant="#00BABA"
              maxDecimal={maximumDecimalAmount}
              maxValue={baseAssetBalance}
              minValue={0}
            />
          </Col>

          <Col xs={12} className="px-1 mb-2">
            <div className="d-flex justify-content-between  ween px-1">
              <div>
                <span className="size-1 text-gray-2">جمع</span>
                <span className="size-1 en fw-500 text-gray-3">{quote}</span>
                <span className="size-1 text-gray-2"> با کسر کارمزد</span>
              </div>

              <div className="d-flex align-items-center ">
                <span className="size-1 text-gray-2">کارمزد : </span>
                <span className="size-1 en text-gray-2 text-gray-2 mx-1">
                  {quote}
                </span>
                <span className="size-1 en text-gray-4">
                  {Number(totalFee)
                    .toFixed(0)
                    .toString()
                    .replace(/(\.\d+?)0+\b/g, "$1")
                    .toLocaleString()}
                </span>
              </div>
            </div>
            <InputElement
              name="get_amount"
              tradeInput
              prepend={
                <span className="size-1 fw-500 text-gray-1 en">{quote}</span>
              }
              readOnly
              className="en fw-500"
              value={receivedAmount ? receivedAmount.toFixed(8) : 0}
            />
          </Col>

          <Col xs={12} className="px-1">
            <div className="d-flex justify-content-end">
              <CustomizedButton
                isFullWidth
                type="submit"
                leftIcon={<FaChevronLeft size="20" />}
                className="tradeBtn size-3 fw-700"
                size="sm"
                variant="lightBlue"
                disabled={!(isValid && dirty)}
                loading={loading}
              >
                دریافت
                <span className="en fw-700 me-2">{quote}</span>
              </CustomizedButton>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
}
