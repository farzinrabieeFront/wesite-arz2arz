import React from 'react';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

const MenuItems = ({ title, url, hasArrow }) => {
    return (
        <>
            {
                hasArrow ?
                    <Link href={url} as={url}>
                        <a className="w-100 darkBlue d-flex align-items-center justify-content-between px-0 yekan-Medium nav-link">
                            <span>{title}</span>
                            <FiChevronLeft size="20" />
                        </a>
                    </Link>
                    :
                    <Link href={url} as={url}>
                        <a className="darkBlue px-0 pl-5 yekan-Medium nav-link">{title}</a>
                    </Link>
            }
        </>
    )
}

export default MenuItems
