import React from 'react';
import Styles from './Description.module.scss';
import { Button } from 'react-bootstrap';
import Title from '../../../../title/Title';
import CustomizedButton from '../../../../../components/form/button/Button';
import { FiChevronLeft } from 'react-icons/fi';

const Description = () => {
    return (
        <div className={Styles.box}>
            <h1 className={Styles.title}>
                <Title lightTitle="معاملات " darkTitle="اتوماتیک ارزها" className="text-right" icon="/images/currency-conversion.png" />
            </h1>
            <div className="d-flex align-items-center gray mt-5">
                <p className="mb-0">
                    بخش دیگری که در پنل صرافی ارز تو ارز وجود دارید معاملات بصورت
                    خودکار می‌باشد. که شما به راحتی می‌توانید با رسیدن یک ارز به یک
                    قیمت مشخص بصورت اتوماتیک معامله خرید یا فروش داشته باشید.
                    در قسمت روبرو بخش معاملات خودکار را مشاهده می‌کنید که می‌توانید
                    با کلیک رو دکمه شروع آموزش، به سادگی این بخش را فرا بگیرید.
                </p>
            </div>
            <div className={`${Styles.buttons} mt-5 d-flex justify-content-end py-3`}>
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
        </div>
    )
}

export default Description
