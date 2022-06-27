import { useState } from 'react';
import Styles from "./CurrencyConversion.module.scss";
// component
import Description from './components/description/Description';
import Demo from './components/demo/Demo';
const stepLearning = [
    "step1",
    "step2",
    "step3",
    "step4",
    "step5",
    "step6",
];
const CurrencyConversion = () => {
    const [isLearning, setIslearning] = useState(false);
    const [currentStep, setCurrentStep] = useState(-1);
    return (

        <div className={`${Styles.background} d-flex align-items-center py-5 `}>
            <div className={`${Styles.description} text-right `}>
                <Description
                    setIslearning={(status) => setIslearning(status)}
                    isLearning={isLearning}
                    next={(st = 1) => setCurrentStep((prev) => prev + st)}
                    prev={(st = 1) => setCurrentStep((prev) => prev - st)}
                    currentStep={currentStep}
                    totalStep
                />
            </div>
            <div className={`${Styles.demo} `}>
                <Demo setIslearning={(status) => setIslearning(status)}
                    isLearning={isLearning}
                    currentStep={currentStep}
                    currentEl={currentStep > -1 ? stepLearning[currentStep] : null}
                    next={(st = 1) => setCurrentStep(0)}

                />
            </div>
        </div>

    )
}

export default CurrencyConversion
