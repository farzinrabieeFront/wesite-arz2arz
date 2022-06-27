import React from 'react';
import Styles from './ModalFixed.module.scss';
import { RiExchangeFundsLine, RiCloseFill } from 'react-icons/ri';
import { Alert } from 'react-bootstrap'
import MenuItems from '../../../layout/header/component/menu-items/MenuItems';
const ModalFixed = ({ setOpenModal, openModal }) => {
    return (
        <div className={`${Styles.ModalFixed} ${openModal ? Styles.show : ""}`}>
            <div className={`${Styles.header} text-center text-white p-3 bg-lightBlue`}>
                <span className="h6">شروع معاملات</span>
                <span className={Styles.close} onClick={() => setOpenModal(false)}><RiCloseFill size="30" /></span>
            </div>
            <div className="py-4 px-3">
                <div>
                    <Alert variant="info" className=" text-right" >
                        برای شروع معاملات  لطفا ابتدا لاگین کنید
                    </Alert>
                </div>
                <div className={Styles.links}>
                    <ul className="mb-0 text-right">
                        <li className="px-3 py-2 d-flex align-items-center justify-content-between darkBlue"><MenuItems hasArrow title="معاملات اتوماتیک" url="/" /> </li>
                        <li className="px-3 py-2 d-flex align-items-center justify-content-between darkBlue"><MenuItems hasArrow title="تبدیل ارز" url="/" /></li>
                        <li className="px-3 py-2 d-flex align-items-center justify-content-between darkBlue"><MenuItems hasArrow title="خرید و فروش" url="/" /></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ModalFixed
