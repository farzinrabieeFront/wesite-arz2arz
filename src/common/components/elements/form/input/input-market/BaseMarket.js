/**internal imports */
import { useEffect, useState } from "react";
import Styles from "./MarketInput.module.scss";
import DefaultIcon from "../../../../../../../public/images/coin-binance1.png";
/**eternal imports */
// import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
// import { IoWalletOutline } from "react-icons/io";
import * as math from "mathjs";
/**component imports */
import ModalMarket from "./ModalMarket";
let configs = {
  BTC: {
    externalDepositEnable: true,
    externalWithdrawEnable: true,
    faName: "بیت کوین",
    icon: "1647156934166-Bitcoin.svg.png",
    internalDepositEnable: true,
    internalWithdrawEnable: true,
    isActive: true,
    isMain: false,
    name: "bitcoin",
    networks: [
      {
        addressRegex: "^(0x)[0-9A-Fa-f]{40}$",
        externalDepositEnable: true,
        externalWithdrawEnable: true,
        internalDepositEnable: true,
        internalWithdrawEnable: true,
        internalWithdrawMax: "10000000000",
        internalWithdrawMin: "0.0012",
        isDefault: false,
        memoRegex: "",
        minConfirm: 12,
        name: "ethereum (erc20)",
        network: "ETH",
        resetAddressStatus: "false",
        sameAddress: false,
        symbol: "BTC",
        withdrawFee: "0.0006",
        withdrawMax: "10000000000",
        withdrawMin: "0.0012",
      },
    ],
    symbol: "BTC",
    trading: true,
  },
  USD: {
    externalDepositEnable: true,
    externalWithdrawEnable: true,
    faName: null,
    icon: null,
    internalDepositEnable: false,
    internalWithdrawEnable: true,
    isActive: true,
    isMain: false,
    name: "usd",
    networks: [
      {
        addressRegex: "",
        externalDepositEnable: true,
        externalWithdrawEnable: true,
        internalDepositEnable: true,
        internalWithdrawEnable: true,
        internalWithdrawMax: "9999999999.99999999",
        internalWithdrawMin: "0",
        isDefault: true,
        memoRegex: "",
        minConfirm: 0,
        name: "fiat",
        network: "FIAT_MONEY",
        resetAddressStatus: "false",
        sameAddress: false,
        symbol: "USD",
        withdrawFee: "0",
        withdrawMax: "9999999999.99999999",
        withdrawMin: "0",
      },
    ],
    symbol: "USD",
    trading: false,
  },
  USDT: {
    externalDepositEnable: true,
    externalWithdrawEnable: true,
    faName: "تتر",
    icon: "1647157174576-tether-usdt-logo.png",
    internalDepositEnable: true,
    internalWithdrawEnable: true,
    isActive: true,
    isMain: false,
    name: "tetherus",

    networks: [
      {
        addressRegex: "^(0x)[0-9A-Fa-f]{40}$",
        externalDepositEnable: true,
        externalWithdrawEnable: true,
        internalDepositEnable: true,
        internalWithdrawEnable: true,
        internalWithdrawMax: "10000000000",
        internalWithdrawMin: "50",
        isDefault: true,
        memoRegex: "",
        minConfirm: 12,
        name: "ethereum (erc20)",
        network: "ETH",
        resetAddressStatus: "false",
        sameAddress: false,
        symbol: "USDT",
        withdrawFee: "10",
        withdrawMax: "10000000000",
        withdrawMin: "50",
      },
    ],
    symbol: "USDT",
    trading: true,
  },
  BNB: {
    externalDepositEnable: true,
    externalWithdrawEnable: true,
    faName: "بایننس کوین",
    icon: "1647157236847-bnb.png",
    internalDepositEnable: false,
    internalWithdrawEnable: true,
    isActive: true,
    isMain: false,
    name: "bnb",
    networks: [
      {
        addressRegex: "^(0x)[0-9A-Fa-f]{40}$",
        externalDepositEnable: true,
        externalWithdrawEnable: true,
        internalDepositEnable: true,
        internalWithdrawEnable: true,
        internalWithdrawMax: "10000000000",
        internalWithdrawMin: "0.01",
        isDefault: false,
        memoRegex: "",
        minConfirm: 15,
        name: "bnb smart chain (bep20)",
        network: "BSC",
        resetAddressStatus: "false",
        sameAddress: false,
        symbol: "BNB",
        withdrawFee: "0.0005",
        withdrawMax: "10000000000",
        withdrawMin: "0.01",
      },
    ],
    symbol: "BNB",
    trading: true,
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
    status: "TRADING",
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
    status: "TRADING",
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
    status: "TRADING",
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
function BaseMarket({
  market,
  type,
  userBalances = {},
  changeMarketHandler,
  changeTypeHandler,
  setAmount,
}) {
  // let { config, market: marketState } = useSelector((state) => state);
  // let { configs } = config;
  // let { marketInfo } = marketState;

  const [showModal, setShowModal] = useState(false);
  const [coinList, setCoinList] = useState([]);
  const [coin, setCoin] = useState("");

  useEffect(() => {
    setShowModal(false);
    if (marketInfo[market]) {
      const { baseAsset: baseMarket, quoteAsset: quoteMarket } =
        marketInfo[market];

      if (type === "sell") setCoin(baseMarket);
      else setCoin(quoteMarket);
    }
  }, [market, type]);

  useEffect(() => {
    if (Object.keys(configs).length) {
      let list = [];
      for (const key in configs) {
        const { trading } = configs[key];
        if (trading) list.push(key);
      }
      setCoinList(list);
    }
  }, [configs]);

  const changeCoinHandler = async (new_coin) => {
    let list = [];

    const new_market = market.replace(coin, new_coin);

    for (const key in marketInfo) {
      let { baseAsset, quoteAsset, spotTradingAllowed, status } =
        marketInfo[key];

      if (spotTradingAllowed && status === "TRADING")
        if ([baseAsset, quoteAsset].includes(new_coin)) {
          const current_market = [baseAsset, quoteAsset].join("");
          console.log("current_market", current_market);

          if (!list.includes(current_market)) list.push(current_market);

          if (new_market === current_market) {
            changeMarketHandler(new_market);
            return;
          }
        }
    }

    if (!list.includes(new_market)) {
      await changeMarketHandler(list[0]);
      changeTypeHandler("sell");
    }
  };

  let element = (
    <div className={`${Styles.base} px-3`} onClick={() => setShowModal(true)}>
      <div className="pointer">
        {configs[coin]?.icon ? (
          <img
            className={`${Styles.imgIcon} ml-2`}
            src={`https://main.arz2arz.net/api/v1/spotCurrency/images/${configs[coin]?.icon}`}
            alt=""
          />
        ) : (
          <img
            className={`${Styles.imgIcon} ml-2`}
            src={"/images/coin-binance1.png"}
          />
        )}

        <span className="size-4 text-gray-4 en fw-500 mx-2">{coin}</span>
        <label className={`${Styles.label} size-1 fw-500 text-gray-3 mb-2`}>
          ارز پایه
        </label>
      </div>
      <FiChevronDown size={20} className="text-gray-2 " />
      <div
        className={`${Styles.balance} px-2 size-1 fw-400 d-flex align-items-center pointer`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setAmount(userBalances[coin].balance);
        }}
      >
        <span className="text-gray-2 size-1 en">{coin}</span>
        <span className="mx-1 size-1 text-gray-4 en">
          {/*{userBalances[coin] ? math.fix(userBalances[coin]?.balance, 8) : 0}*/}
        </span>
        {/*<IoWalletOutline className="text-blue" size={16} />*/}
      </div>
    </div>
  );

  return [
    element,
    showModal ? (
      <ModalMarket
        configs={configs}
        title="انتخاب ارز پایه"
        show={showModal}
        data={coinList}
        onHide={() => setShowModal(false)}
        onChange={(new_coin) => changeCoinHandler(new_coin)}
      />
    ) : null,
  ];
}
export default BaseMarket;
