/** internal import */
import { useState, useEffect, useRef, memo } from "react";
// import { useOrder } from "../../../../../context/OrderServises";
// import { Toastify } from "../../../../../utils";
// import { orderServices } from "../../../../../services";

/** external import */
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
let marketInfo = {
  BZRXBTC: {
    LOT_SIZE_maxQty: "90000000.00000000",
    LOT_SIZE_minQty: "1.00000000",
    MIN_NOTIONAL: 0.00012,
    PERCENT_PRICE_multiplierDown: "0.2",
    PERCENT_PRICE_multiplierUp: "5",
    PRICE_FILTER_maxPrice: "1000.00000000",
    PRICE_FILTER_minPrice: "0.00000001",
    baseAsset: "BZRX",
    fee: "0.001",
    quoteAsset: "BTC",
    spotTradingAllowed: true,
    status: "BREAK",
  },
  BZRXBNB: {
    LOT_SIZE_maxQty: "9000000.00000000",
    LOT_SIZE_minQty: "0.10000000",
    MIN_NOTIONAL: 0.060000000000000005,
    PERCENT_PRICE_multiplierDown: "0.2",
    PERCENT_PRICE_multiplierUp: "5",
    PRICE_FILTER_maxPrice: "1000.00000000",
    PRICE_FILTER_minPrice: "0.00001000",
    baseAsset: "BZRX",
    fee: "0.001",
    quoteAsset: "BNB",
    spotTradingAllowed: true,
    status: "BREAK",
  },
  BUSDUSDT: {
    LOT_SIZE_maxQty: "15000000.00000000",
    LOT_SIZE_minQty: "1.00000000",
    MIN_NOTIONAL: 12,
    PERCENT_PRICE_multiplierDown: "0.2",
    PERCENT_PRICE_multiplierUp: "5",
    PRICE_FILTER_maxPrice: "1000.00000000",
    PRICE_FILTER_minPrice: "0.00010000",
    baseAsset: "BUSD",
    fee: "0",
    quoteAsset: "USDT",
    spotTradingAllowed: true,
    status: "TRADING",
  },
  BALBNB: {
    LOT_SIZE_maxQty: "900000.00000000",
    LOT_SIZE_minQty: "0.01000000",
    MIN_NOTIONAL: 0.060000000000000005,
    PERCENT_PRICE_multiplierDown: "0.2",
    PERCENT_PRICE_multiplierUp: "5",
    PRICE_FILTER_maxPrice: "10000.00000000",
    PRICE_FILTER_minPrice: "0.00010000",
    baseAsset: "BAL",
    fee: "0.001",
    quoteAsset: "BNB",
    spotTradingAllowed: true,
    status: "BREAK",
  },
  BTCUSDT: {
    LOT_SIZE_maxQty: "15000000.00000000",
    LOT_SIZE_minQty: "1.00000000",
    MIN_NOTIONAL: 12,
    PERCENT_PRICE_multiplierDown: "0.2",
    PERCENT_PRICE_multiplierUp: "5",
    PRICE_FILTER_maxPrice: "1000.00000000",
    PRICE_FILTER_minPrice: "0.00010000",
    baseAsset: "BUSD",
    fee: "0",
    quoteAsset: "USDT",
    spotTradingAllowed: true,
    status: "TRADING",
  },
};
const prices = {
  AAVEUSDT: "135.10000000",
  ACABTC: "0.00002557",
  ACABUSD: "0.91900000",
  ACAUSDT: "0.91800000",
  ACHBTC: "0.00000061",
  ACHBUSD: "0.02222000",
  ACHUSDT: "0.02222000",
  ACMBTC: "0.00014590",
  ACMBUSD: "5.24500000",
  ACMUSDT: "5.23400000",
  ADAAUD: "1.09400000",
  ADABIDR: "11323.00",
  ADABNB: "0.00205100",
};
function Market({ refreshHistory }) {
  const formikRef = useRef(null);
  // const navigate = useNavigate();
  // const { spot } = useParams();
  // const { state } = useLocation();
  const [state] = useState({ type: "sell" });
  const spot = "BTC-USDT";
  // const { prices, balance } = useOrder();

  const [balance] = useState({
    fiatWallets: "",
    spotWallets: "",
  });

  // const { market, exchange } = useSelector((state) => state);
  // const { marketInfo } = market;
  const { MARKET: internalFee = 0 } = exchange?.fees;

  const [loading, setLoading] = useState(false);
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [maximumAmount, setMaximumAmount] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [maximumDecimalAmount, setMaximumDecimalAmount] = useState(0);
  const [baseAssetBalance, setBaseAssetBalance] = useState(0);
  const [base, setBase] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    formikRef.current.resetForm();
  }, [spot]);

  useEffect(() => {
    if (Object.keys(marketInfo).length && Object.keys(prices).length) {
      vaildationMethod(formikRef.current.values);
    }
  }, [prices, marketInfo]);

  const vaildationMethod = ({ type, amount, market }) => {
    // if (market !== spot.split("-").join(""))
    //   navigate(
    //     [marketInfo[market].baseAsset, marketInfo[market].quoteAsset].join("-"),
    //     { state: { type } }
    //   );
    //
    // if (type !== state?.type) navigate(spot, { state: { type } });

    let spotWallets = balance.spotWallets || {},
      market_price = Number(prices[market] || 0),
      {
        LOT_SIZE_minQty = 0,
        LOT_SIZE_maxQty = 0,
        MIN_NOTIONAL = 0,
        fee = 0,
        baseAsset = "",
        quoteAsset = "",
      } = marketInfo[market] || {};

    // calculate lowest amount
    const lowest =
      type === "sell"
        ? math.divide(Number(MIN_NOTIONAL), market_price)
        : Number(MIN_NOTIONAL);
    if (lowest && lowest !== Infinity && lowest !== minimumAmount)
      setMinimumAmount(lowest);

    // calculate highest amount
    const highest =
      type === "sell"
        ? Number(LOT_SIZE_maxQty)
        : math.multiply(Number(LOT_SIZE_maxQty), market_price);
    if (highest && highest !== Infinity && highest !== maximumAmount)
      setMaximumAmount(highest);

    // calculate max decimal amount
    if (type === "sell" && LOT_SIZE_minQty) {
      LOT_SIZE_minQty.split(".")[1]
        .split("")
        .forEach((num, i) => {
          if (num !== "0") {
            setMaximumDecimalAmount(i + 1);
            return;
          }
        });
    } else setMaximumDecimalAmount(8);

    // calculate recieve and fee amount
    if (Number(amount) && market_price) {
      let quote_amount = 0;

      quote_amount =
        type === "sell"
          ? math.multiply(Number(amount), market_price)
          : math.divide(Number(amount), market_price);

      const total_fee = math.add(
        math.divide(Number(internalFee), 100),
        Number(fee)
      );

      const fee_amount = math.multiply(quote_amount, total_fee);
      const recieve_amount = math.subtract(quote_amount, fee_amount);

      setTotalFee(fee_amount);
      setReceivedAmount(recieve_amount);
    } else {
      setTotalFee(0);
      setReceivedAmount(0);
    }

    setBaseAssetBalance(Number(spotWallets[base]?.balance || 0));

    setBase(type === "sell" ? baseAsset : quoteAsset);
    setQuote(type === "sell" ? quoteAsset : baseAsset);
  };

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
    };

    return yup.object().shape(schema);
  };

  const onSubmit = async ({ amount, type, market }, formActions) => {
    try {
      const body = {
        baseAsset: base,
        quoteAsset: quote,
        amount,
      };

      setLoading(true);
      // const { data, status } = await orderServices.market(body);
      // if (status === 202) {
      //   // Toastify.success(data.message);
      //   formActions.resetForm({
      //     values: {
      //       type,
      //       amount: "",
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
      }}
      validationSchema={vaildationMethodSchema}
      validate={vaildationMethod}
      onSubmit={onSubmit}
      onReset={() => {
        setTotalFee(0);
        setReceivedAmount(0);
      }}
    >
      {({ isValid, dirty, values, setFieldValue }) => (
        <Form className="d-flex flex-wrap justify-content-center align-items-stretch px-2 pb-3">
          <Col xs={12} className="px-1 mb-4 pb-1">
            <Field
              as={MarketInput}
              name="market"
              labelClassName="size-5 text-gray-3"
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

          <Col xs={12} className="px-1 mb-2">
            <InputElement
              label="قیمت"
              name="requestedPrice"
              tradeInput
              prepend={
                <span className="size-1 fw-500 text-gray-1 en">
                  {spot.split("-").join(" / ")}
                </span>
              }
              className="en fw-500"
              readOnly
              value={prices[values.market]?.toString() || "0"}
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
            <div className="d-flex justify-content-between px-1">
              <div>
                <span className="size-1 text-gray-2">جمع</span>{" "}
                <span className="size-1 en fw-500 text-gray-3">{quote}</span>{" "}
                <span className="size-1 text-gray-2">با کسر کارمزد</span>
              </div>

              <div className="d-flex align-items-center ">
                <span className="size-1 text-gray-2">کارمزد : </span>
                <span className="size-1 en text-gray-2 text-gray-2 mx-1">
                  {quote}
                </span>
                <span className="en size-1 text-gray-4">
                  {parseFloat(totalFee)
                    .toFixed(8)
                    .replace(/(\.\d+?)0+\b/g, "$1")
                    .toLocaleString()}
                </span>
              </div>
            </div>
            <InputElement
              name="get_amount"
              tradeInput
              className="en fw-500"
              prepend={
                <span className="size-51 fw-500 text-gray-1 en">{quote}</span>
              }
              readOnly
              value={receivedAmount ? receivedAmount.toFixed(8) : 0}
            />
          </Col>

          <Col xs={12} className="px-1">
            <div className="d-flex justify-content-end">
              <CustomizedButton
                isFullWidth
                leftIcon={<FaChevronLeft size="20" />}
                type="submit"
                className="tradeBtn size-3 fw-400 py-1"
                size="sm"
                variant="lightBlue"
                disabled={!(isValid && dirty)}
                loading={loading}
              >
                دریافت
                <span className="en fw-600 me-2">
                  {values.type === "sell"
                    ? spot.split("-")[1]
                    : spot.split("-")[0]}
                </span>
              </CustomizedButton>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
}

export default memo(Market);
