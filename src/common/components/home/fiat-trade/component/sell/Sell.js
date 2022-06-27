import React, { useState, useEffect, useRef } from "react";
import * as math from "mathjs";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { Col } from "react-bootstrap";
import CustomizedButton from "../../../../../../components/form/button/Button";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";
import SelectCoin from "../../../../elements/form/input/select-coin/SelectCoin";
import AmountInput from "../../../../elements/form/input/amount-input/AmountInput";
import InputElement from "../../../../elements/form/input/element-input/input/Input";

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
  INCHBTC: {
    LOT_SIZE_maxQty: "90000000.00000000",
    LOT_SIZE_minQty: "0.10000000",
    MIN_NOTIONAL: 0.00012,
    PERCENT_PRICE_multiplierDown: "0.2",
    PERCENT_PRICE_multiplierUp: "5",
    PRICE_FILTER_maxPrice: "1000.00000000",
    PRICE_FILTER_minPrice: "0.00000001",
    baseAsset: "1INCH",
    fee: "0.001",
    quoteAsset: "USDT",
    spotTradingAllowed: true,
    status: "TRADING",
  },
  INCHBUSD: {
    LOT_SIZE_maxQty: "900000.00000000",
    LOT_SIZE_minQty: "0.10000000",
    MIN_NOTIONAL: 12,
    PERCENT_PRICE_multiplierDown: "0.2",
    PERCENT_PRICE_multiplierUp: "5",
    PRICE_FILTER_maxPrice: "1000.00000000",
    PRICE_FILTER_minPrice: "0.00100000",
    baseAsset: "1INCH",
    fee: "0.001",
    quoteAsset: "USDT",
    spotTradingAllowed: true,
    status: "TRADING",
  },
};
export default function Sell({ spotBalance, refreshHistory }) {
  const route = useRouter();
  const formikRef = useRef(null);
  // const navigate = useNavigate();
  // const { spot } = useParams();
  // const { prices, refCurrency } = useOrder();

  // const { market, exchange } = useSelector((state) => state);
  // const { marketInfo } = market;

  const [loading, setLoading] = useState("");
  const [prices, setPrice] = useState({});
  const [refCurrency, setRefCurrency] = useState({});
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [maximumAmount, setMaximumAmount] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [maximumDecimalAmount, setMaximumDecimalAmount] = useState(0);

  const { FIAT: internalFee = 0 } = exchange?.fees;
  const { fiatSell: internalLimit = {} } = exchange?.limits?.orderLimits;

  // useEffect(() => {
  //   if (Object.keys(marketInfo).length && Object.keys(prices).length) {
  //     vaildationMethod(formikRef.current.values);
  //   }
  // }, [prices, marketInfo]);
  //
  // const vaildationMethod = ({ amount, spotAsset }) => {
  //   if (spotAsset !== route.query) {
  //     // navigate(`/fiat-trade/${spotAsset}`);
  //     setReceivedAmount(0);
  //     setMaximumDecimalAmount(0);
  //   }
  //
  //   const usd_price = Number(refCurrency.USD?.buyPrice || 0),
  //     market_price = Number(prices[`${spotAsset}USDT`] || 0),
  //     {
  //       LOT_SIZE_minQty = 0,
  //       LOT_SIZE_maxQty = 0,
  //       MIN_NOTIONAL = 0,
  //       fee = 0,
  //     } = marketInfo[`${spotAsset}USDT`] || {};
  //
  //   // calculate lowest amount
  //   const lowest =
  //     spotAsset === "USDT"
  //       ? Number(internalLimit?.lowest || 0)
  //       : math.max(
  //           math.divide(Number(internalLimit.lowest || 0), market_price),
  //           math.divide(Number(MIN_NOTIONAL), market_price)
  //         );
  //   if (lowest && lowest !== Infinity && lowest !== minimumAmount)
  //     setMinimumAmount(lowest);
  //
  //   // calculate highest amount
  //   const highest =
  //     spotAsset === "USDT"
  //       ? Number(internalLimit.highest || 0)
  //       : math.min(
  //           math.divide(Number(internalLimit.highest || 0), market_price),
  //           math.divide(Number(LOT_SIZE_maxQty), market_price)
  //         );
  //   if (highest && highest !== Infinity && highest !== maximumAmount)
  //     setMaximumAmount(highest);
  //
  //   // calculate max decimal amount
  //   if (spotAsset !== "USDT") {
  //     LOT_SIZE_minQty?.split(".")[1]
  //       .split("")
  //       .forEach((num, i) => {
  //         if (num !== "0") {
  //           setMaximumDecimalAmount(i + 1);
  //           return;
  //         }
  //       });
  //   } else setMaximumDecimalAmount(2);
  //
  //   // calculate recieve and fee amount
  //   if (Number(amount) && usd_price) {
  //     let usdt_amount = 0;
  //
  //     if (spotAsset !== "USDT")
  //       usdt_amount = math.multiply(Number(amount), market_price);
  //     else usdt_amount = Number(amount);
  //
  //     const total_fee = math.add(
  //       math.divide(Number(internalFee), 100),
  //       Number(fee)
  //     );
  //     const irt_amount = math.multiply(usdt_amount, usd_price);
  //     const fee_amount = math.multiply(irt_amount, total_fee);
  //     const recieve_amount = math.subtract(irt_amount, fee_amount);
  //
  //     setTotalFee(fee_amount);
  //     setReceivedAmount(recieve_amount);
  //   } else {
  //     setTotalFee(0);
  //     setReceivedAmount(0);
  //   }
  // };

  const vaildationMethodSchema = () => {
    const { spotAsset } = formikRef.current.values;

    let schema = {
      amount: yup
        .number("فقط عدد لاتین وارد کنید.")
        .required("این فیلد الزامی است.")
        .min(
          minimumAmount,
          `حداقل مقدار مجاز برابر ${spotAsset} ${math
            .ceil(minimumAmount, maximumDecimalAmount)
            .toString()} است`
        )
        .max(
          maximumAmount,
          `حداکثر مقدار مجاز برابر ( ${spotAsset} )${math
            .fix(maximumAmount, maximumDecimalAmount)
            .toString()} است`
        )
        .lessThan(
          Number(spotBalance[spotAsset]?.balance || 0),
          "موجودی حسابت کافی نیست"
        ),
    };

    return yup.object().shape(schema);
  };

  const onSubmit = async (vals) => {
    try {
      setLoading(true);
      const { data, status } = await orderServices.fiat(vals);
      if (status === 202) {
        // Toastify.success(data.message);
        formikRef.current.resetForm({});
      }
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
        amount: "",
        side: "SELL",
        spotAsset: "spot",
      }}
      onReset={() => {
        setTotalFee(0);
        setReceivedAmount(0);
      }}
      validationSchema={vaildationMethodSchema}
      // validate={vaildationMethod}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, values, setFieldValue }) => (
        <Form className="d-flex flex-column align-items-end rounded-20 bordered p-md-7 p-3">
          <Col xs={12} className="mb-4">
            <Field
              as={SelectCoin}
              label="نام ارز"
              name="spotAsset"
              showBalance
              options={[
                "USDT",
                ...Object.keys(marketInfo)
                  .filter((key) => {
                    if (marketInfo[key].quoteAsset === "USDT")
                      if (
                        marketInfo[key].spotTradingAllowed &&
                        marketInfo[key].status === "TRADING"
                      )
                        return key;
                  })
                  .map((market) => market.replace("USDT", "")),
              ]}
              balance={spotBalance[values.spotAsset]?.balance || 0}
              setAmount={(amount) => setFieldValue("amount", amount)}
            />
          </Col>

          <Col xs={12} className=" ">
            <Field
              as={AmountInput}
              label="مقدار پرداختی"
              name="amount"
              symbol={values.spotAsset}
              limit={{
                label: "حداقل مقدار فروش",
                value: minimumAmount,
              }}
              sliderVariant="#00BABA"
              maxDecimal={maximumDecimalAmount}
              maxValue={spotBalance[values.spotAsset]?.balance || 0}
              minValue={0}
              amountString
              hiddenSymbolLabel
            />
          </Col>

          <Col xs={12} className="mb-4 ">
            <div className="d-flex justify-content-between mb-1 px-1">
              <label className="text-gray-2 size-1">
                <span className="text-gray-3 fw-500">مقدار دریافتی تومان </span>
                با کسر کارمزد
              </label>
              <div className="d-flex align-items-center ">
                <span className="size-1 text-gray-2"> کارمزد : </span>
                <span className="size-1 mx-1 text-gray-2">تومان</span>
                <span className="size-1 text-gray-4">
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
              type="tel"
              prepend={<span className="size-1 text-gray-1 fw-500">تومان</span>}
              className="fw-500 size-4 en"
              readOnly
              value={math.fix(receivedAmount, 0).toLocaleString()}
              amountString
            />
          </Col>

          <Col xs={12}>
            <div className="d-flex justify-content-end mb-3">
              <CustomizedButton
                isFullWidth
                leftIcon={<FaChevronLeft size="20" />}
                type="submit"
                className="fw-700 size-3"
                size="sm"
                variant="danger"
                disabled={!(isValid && dirty)}
                loading={loading}
              >
                فروش <span className="en">{values.spotAsset}</span>
              </CustomizedButton>
            </div>
          </Col>
        </Form>
      )}
    </Formik>
  );
}
