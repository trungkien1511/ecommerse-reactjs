import React from 'react';

const Menu = ({ content, href }) => {
    return (
        <a href={href} className='relative menu-underline text-[15px] text-black'>
            {content}
        </a>
    );
};

export default Menu;
