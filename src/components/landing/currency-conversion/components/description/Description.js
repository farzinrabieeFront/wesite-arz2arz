import React from 'react';
import Styles from './Description.module.scss';
import { Button } from 'react-bootstrap';
import Title from '../../../../title/Title';
import CustomizedButton from '../../../../../components/form/button/Button';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { descriptionsData } from "../../data";

const Description = ({
    setIslearning,
    isLearning = false,
    next,
    prev,
    currentStep, }) => {
    const totalStep = descriptionsData.length - 1;

    return (
        <div className={Styles.box}>
            <h1 className={Styles.title}>
                <Title lightTitle="معاملات " darkTitle="تبدیل ارزها به یکدیگر" className="text-right" icon="/images/currency-conversion.png" />
            </h1>
            <div className="d-flex align-items-center gray mt-5">
                {currentStep > -1 ?
                    <p className="mb-0">
                        {descriptionsData[currentStep].text}

                    </p> :
                    <p className="mb-0">در پنل کاربری صرافی بخشی برای تبدیل ارز ها به یکدیگر است که شما به سـادگی میتـوانید پس از احـراز هویـت در صـرافی ارز تو ارز در بخـش تبــدیـل ارز های پنـل کــاربری، ارز هـای خود را به یکدیـگر تبدیـل کنیـد در قسمت روبرو بخـشی قرار گرفته شـده که به آسانی با کلیک روی علامت  های ســـــوال توضیــحــات هر بخــش ظــاهـر میشــود. پـس از مشــاهــده توضیحات این بخش  پس از ثبت نام و احراز هویت به راحتی میتوانید روی دکمه زیر کلیک کنید و معاملات تبدیل ارز ها به یکدیگر انجام دهید.</p>
                }
            </div>
            {!isLearning ? <div className={`${Styles.buttons} mt-5 d-flex justify-content-end py-3`}>
                <div className="px-2">
                    <CustomizedButton variant="darkBlue" size="md" className="font-weight-bold py-2 radius-md" >
                        شروع معاملات تبدیل<FiChevronLeft size="20" className="mr-1" />
                    </CustomizedButton>
                </div>
                <div className="px-2">
                    <CustomizedButton variant="outline-darkBlue" size="md" className="font-weight-bold py-2 radius-md" >
                        پرسش های متداول تبدیل<FiChevronLeft size="20" className="mr-1" />
                    </CustomizedButton>
                </div>
            </div>
                :
                <div className={`${Styles.buttons} mt-5 d-flex justify-content-end py-3`}>



                    {
                        currentStep ?
                            <div className="px-2">
                                <CustomizedButton
                                    onClick={() => {
                                        prev();
                                        if (!currentStep) {
                                            setIslearning(false)
                                        }
                                    }}
                                    variant="outline-darkBlue" size="md" className="font-weight-bold py-2 radius-md" >
                                    <FiChevronRight size="20" className="mr-1" /> قبلی
                        </CustomizedButton>
                            </div>
                            : ""
                    }


                    {
                        currentStep < totalStep ?
                            <div className="px-2">
                                <CustomizedButton
                                    onClick={() => next()}
                                    variant="darkBlue" size="md" className="font-weight-bold py-2 radius-md" >
                                    بعدی<FiChevronLeft size="20" className="mr-1" />
                                </CustomizedButton>
                            </div>
                            :
                            <div className="px-2">
                                <CustomizedButton
                                    onClick={() => setIslearning(false)}
                                    variant="yellow" size="md" className="font-weight-bold py-2 radius-md" >
                                    پایان اموزش<FiChevronLeft size="20" className="mr-1" />
                                </CustomizedButton>
                            </div>
                    }

                </div>}
        </div>
    )
}

export default Description
