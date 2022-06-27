/**internal imports */
import { useState, useEffect } from "react";
import Styles from "./SelectCoin.module.scss";
import DefaultIcon from "../../../../../../../public/images/coin-binance1.png";
/**external imports */
import { useField } from "formik";
import { RiCopperCoinLine } from "react-icons/ri";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
// import IoWalletOutline from "react-icons/io";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
/**component imports */
import TriangleTitle from "../../../../../../components/triangle-title/TriangleTitle";

export default function SelectCoin({
  label,
  balance,
  showBalance = false,
  options = [],
  setAmount,
  ...props
}) {
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////var
  let data = {
    INCHBTC: {
      externalDepositEnable: true,
      externalWithdrawEnable: true,
      faName: "وان اینچ",
      icon: "1647173442001-1INCH.png",
      internalDepositEnable: false,
      internalWithdrawEnable: true,
      isActive: true,
      isMain: false,
      name: "1inch",
      networks: [
        {
          addressRegex: "^(0x)[0-9A-Fa-f]{40}$",
          externalDepositEnable: true,
          externalWithdrawEnable: true,
          internalDepositEnable: true,
          internalWithdrawEnable: true,
          internalWithdrawMax: "10000000000",
          internalWithdrawMin: "32",
          isDefault: true,
          memoRegex: "",
          minConfirm: 12,
          name: "ethereum (erc20)",
          network: "ETH",
          resetAddressStatus: "false",
          sameAddress: false,
          symbol: "1INCH",
          withdrawFee: "19",
          withdrawMax: "10000000000",
          withdrawMin: "38",
        },
      ],
      symbol: "1INCH",
      trading: true,
    },
    INCHBUSD: {
      externalDepositEnable: true,
      externalWithdrawEnable: true,
      faName: "وان اینچ",
      icon: "1647173442001-1INCH.png",
      internalDepositEnable: false,
      internalWithdrawEnable: true,
      isActive: true,
      isMain: false,
      name: "1inch",
      networks: [
        {
          addressRegex: "^(0x)[0-9A-Fa-f]{40}$",
          externalDepositEnable: true,
          externalWithdrawEnable: true,
          internalDepositEnable: true,
          internalWithdrawEnable: true,
          internalWithdrawMax: "10000000000",
          internalWithdrawMin: "32",
          isDefault: true,
          memoRegex: "",
          minConfirm: 12,
          name: "ethereum (erc20)",
          network: "ETH",
          resetAddressStatus: "false",
          sameAddress: false,
          symbol: "1INCH",
          withdrawFee: "19",
          withdrawMax: "10000000000",
          withdrawMin: "38",
        },
      ],
      symbol: "1INCH",
      trading: true,
    },
    USDT: {
      externalDepositEnable: true,
      externalWithdrawEnable: true,
      faName: "وان اینچ",
      icon: "1647173442001-1INCH.png",
      internalDepositEnable: false,
      internalWithdrawEnable: true,
      isActive: true,
      isMain: false,
      name: "1inch",
      networks: [
        {
          addressRegex: "^(0x)[0-9A-Fa-f]{40}$",
          externalDepositEnable: true,
          externalWithdrawEnable: true,
          internalDepositEnable: true,
          internalWithdrawEnable: true,
          internalWithdrawMax: "10000000000",
          internalWithdrawMin: "32",
          isDefault: true,
          memoRegex: "",
          minConfirm: 12,
          name: "ethereum (erc20)",
          network: "ETH",
          resetAddressStatus: "false",
          sameAddress: false,
          symbol: "1INCH",
          withdrawFee: "19",
          withdrawMax: "10000000000",
          withdrawMin: "38",
        },
      ],
      symbol: "1INCH",
      trading: true,
    },
  };
  const [{ value }, , { setValue }] = useField(props);

  // const { configs } = useSelector((state) => state.config);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////state
  const [configs, setConfigs] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [infoValue, setInfoValue] = useState({});
  const [searchBox, setSearchBox] = useState("");
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////hooks
  useEffect(() => {
    setSearchBox("");
  }, [showModal]);

  useEffect(() => {
    if (value in configs) setInfoValue(configs[value]);
  }, [value, configs]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////function
  const renderOptions = () => {
    let list = [];

    for (const currency of options) {
      let { icon, name } = configs[currency];
      if (new RegExp(searchBox, "gi").test(currency))
        list.push(
          <li
            key={currency}
            className={`${Styles.item} transition p-2 d-flex align-items-center `}
            onClick={() => {
              setValue(currency);
              setShowModal(false);
            }}
          >
            <div className="d-flex align-items-center">
              <div className={`ml-2`}>
                {icon ? (
                  <img
                    src={`https://main.arz2arz.net/api/v1/spotCurrency/images/${icon}`}
                    alt=""
                  />
                ) : (
                  <img src={DefaultIcon} />
                )}
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <span className="size-1 text-gray-4 en fw-500 ">
                    {currency}
                  </span>
                  <span className="size-1 text-gray-2 en me-2">
                    {name ? `(${name})` : null}
                  </span>
                </div>
              </div>
            </div>
          </li>
        );
    }

    return list.length ? (
      list
    ) : (
      <li className="text-gray-2">ارز مورد نظر یافت نشد.</li>
    );
  };

  const rendermodal = () => (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header className="px-4 pt-4 d-flex" closeButton>
        <Modal.Title className={`text-gray-4 size-1`}>
          <TriangleTitle>{label}</TriangleTitle>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="h-100">
        <div className={`${Styles.head} mb-3`}>
          <div className={Styles.searchInput}>
            <span>
              <FiSearch className={`${Styles.icon} text-gray-1`} size={25} />
            </span>
            <input
              type="text"
              placeholder="جستجو"
              className="size-1 text-gray-2 form-control"
              onChange={(e) => setSearchBox(e.target.value)}
            />
          </div>
        </div>
        <ul className={`${Styles.list} px-2 mb-0`}>{renderOptions()}</ul>
      </Modal.Body>
    </Modal>
  );

  const inputElement = (
    <>
      {label || showBalance ? (
        <div className="d-flex justify-content-between align-items-center mb-1">
          {label ? (
            <label className="fw-500 size-1 text-gray-3 px-1">{label}</label>
          ) : null}
          {showBalance ? (
            <div className="px-1 size-1 fw-400 d-flex align-items-center">
              <span className="text-gray-2 size-1 en">{infoValue?.symbol}</span>
              <span
                className="mx-1 size-1 text-gray-4 en pointer"
                onClick={() => {
                  if (setAmount) setAmount(Number(balance || 0)?.toFixed(8));
                }}
              >
                {balance ? Number(balance)?.toFixed(8) : 0}
              </span>
              {/*<IoWalletOutline className="text-blue" size={16} />*/}
            </div>
          ) : null}
        </div>
      ) : null}

      <div
        className="d-flex justify-content-between align-items-center form-control pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="d-flex align-items-center">
          {infoValue?.icon ? (
            <img
              width={24}
              height={24}
              className={` ml-2`}
              src={`https://main.arz2arz.net/api/v1/spotCurrency/images/${infoValue?.icon}`}
              alt=""
            />
          ) : (
            <RiCopperCoinLine size="30" className="text-gray-1 ml-2" />
          )}

          <div className="d-flex align-items-center me-2">
            <div className={`text-gray-4 en fw-500 size-1`}>
              {infoValue?.symbol}
            </div>
          </div>
        </div>

        <HiOutlineChevronDown size="16" className="text-gray-3" />
      </div>
      {showModal ? rendermodal() : null}
    </>
  );

  return inputElement;
}
