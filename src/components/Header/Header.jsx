import BoxIcon from '../BoxIcon';
import Menu from '../Menu';
import { dataIcon, dataMenu } from './constants';
import Logo from '@icons/images/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import useScrollHandling from '@hooks/useScrollHanding';
import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '@/contexts/SideBarProvider';

const MyHeader = () => {
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState();
    const { setIsOpen, setType } = useContext(SidebarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        if (scrollPosition > 80) {
            setFixedPosition(true);
        } else {
            setFixedPosition(false);
        }
    }, [scrollPosition]);

    return (
        <div className='Header'>
            <div
                className={`${
                    fixedPosition
                        ? 'fixed top-0 bg-white shadow-md w-full transition-all duration-500 z-50 '
                        : 'absolute top-0 bg-transparent w-full transition-all duration-700'
                }`}
            >
                <div className='w-[1260px] mx-auto flex justify-around items-center h-[83px]'>
                    <div className='flex items-center space-x-[20px]'>
                        <div className='icon_container'>
                            {dataIcon.slice(0, 3).map((item) => {
                                return <BoxIcon type={item.type} href={item.href} />;
                            })}
                        </div>
                        <div className='menu_container'>
                            {dataMenu.slice(0, 3).map((item) => {
                                return <Menu content={item.content} href={item.href} />;
                            })}
                        </div>
                    </div>
                    <div className='w-[153px] w[53px]'>
                        <img src={Logo} alt='' />
                    </div>
                    <div className='flex items-center space-x-[20px]'>
                        <div className='menu_container'>
                            {dataMenu.slice(3, dataMenu.length).map((item) => {
                                return <Menu content={item.content} href={item.href} />;
                            })}
                        </div>
                        <div className='icon_container space-x-[15px]'>
                            <TfiReload
                                className='text-[20px] '
                                onClick={() => handleOpenSideBar(`compare`)}
                            />

                            <CiHeart
                                className='text-[25px]'
                                onClick={() => handleOpenSideBar(`wishlist`)}
                            />

                            <PiShoppingCartThin
                                className='text-[20px]'
                                onClick={() => handleOpenSideBar(`cart`)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;
