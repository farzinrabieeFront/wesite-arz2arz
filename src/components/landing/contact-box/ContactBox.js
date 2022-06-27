import React from 'react';
import Styles from './ContactBox.module.scss';
import { Row, Col } from 'react-bootstrap';
import SupportIcon from '../../../components/support-icon/SupportIcon';
import CustomizedButton from '../../../components/form/button/Button';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

const ContactBox = () => {
    return (
        <div>
            <Row className="justify-content-center ">
                <Col lg={9} className={`${Styles.background} text-right align-items-center d-flex p-5`}>
                    <div className={`${Styles.info} d-flex align-items-center px-0 px-md-3`}>
                        <span><SupportIcon radius="radius" color="lightBlue" /></span>
                        <div className={`${Styles.desc} px-md-4 px-2`}>
                            <h3 className={`${Styles.title} mb-3 h3 font-weight-bold`}>با ما آنلاین در ارتباط باشید</h3>
                            <p className={`${Styles.text} mb-0`}>در صورتی که در مورد صرافی سوالی دارید میتوانید به راحتی از طریق پشتیبانی آنلاین وب سایت باما در اتباط باشید</p>
                        </div>
                    </div>
                    <div className={`${Styles.button} px-md-3 px-2`}>
                        {/* <CustomizedButton variant="lightGreen" size="md" className="font-weight-bold" >
                            ارتباط با ما<FiChevronLeft size="20" className="mr-1" />
                        </CustomizedButton> */}
                        <Link href="/contact-us">
                            <a className="btn btn-lightGreen font-weight-bold btn-md py-2 radius-md" >
                                ارتباط با ما<FiChevronLeft size="20" className="mr-1" />
                            </a>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactBox
