import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SideBarProvider';

const Menu = ({ content, href }) => {
    const { setIsOpen, setType } = useContext(SidebarContext);
    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    return (
        <a
            href={href}
            className='relative menu-underline text-[15px] text-black'
            onClick={() => handleOpenSideBar(content)}
        >
            {content}
        </a>
    );
};

export default Menu;
