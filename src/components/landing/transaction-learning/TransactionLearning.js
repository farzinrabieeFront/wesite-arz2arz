import { useState, useEffect } from "react";
import Styles from "./TransactionLearning.module.scss";
// component
import Description from "./components/description/Description";
import Demo from "./components/demo/Demo";
const stepLearning = [
  "activeTab",
  "activeLogoCurrency",
  "searchCurrency",
  "listCurrency",
  "payCount",
  "getCount",
  "infoCurrency",
  "button",
];
const TransactionLearning = () => {
  const [transactionType, setTransactionType] = useState("buy");
  const [isLearning, setIslearning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  
  //   useEffect(() => {
  //      console.log(currentStep)
  //      console.log(stepLearning[currentStep])
  //   }, [currentStep])

  return (
    <div className={`${Styles.background} d-flex align-items-center flex-wrap py-5 px-3`}>
      <div className={`${Styles.description} text-right `}>
        <Description
          setTransactionType={(type) => setTransactionType(type)}
          transactionType={transactionType}
          setIslearning={(status) => setIslearning(status)}
          isLearning={isLearning}
          next={(st = 1) => setCurrentStep((prev) => prev + st)}
          prev={(st = 1) => setCurrentStep((prev) => prev - st)}
          currentStep={currentStep}
        />
      </div>
      <div className={`${Styles.demo}`}>
        <Demo
          isLearning={isLearning}
          transactionType={transactionType}
          currentStep={currentStep}
          currentEl={currentStep ? stepLearning[currentStep] : null}
        />
      </div>
    </div>
  );
};

export default TransactionLearning;
