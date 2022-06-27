import React, { useState } from 'react';
// componnets
import Header from './header/Header';
import Footer from './footer/Footer';
import MobileMenu from './mobile-menu/MobileMenu';
import ModalFixed from '../components/modal/modal-fixed/ModalFixed';
import MobileNavbar from './mobile-navbar/MobileNavbar';
import Support from '../components/support/Support';

const Layout = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Header setOpenMenu={(status) => setOpenMenu(status)} setOpenModal={(status) => setOpenModal(status)} />


            <MobileMenu openMenu={openMenu} setOpenMenu={(status) => setOpenMenu(status)} />


            <div className="content">
                {children}
            </div>
            <Footer />
            <Support />

            <ModalFixed openModal={openModal} setOpenModal={(status) => setOpenModal(status)} />
            <MobileNavbar />
        </>
    )
}

export default Layout
