import BoxIcon from '../BoxIcon';
import Menu from '../Menu';
import { dataIcon, dataMenu } from './constants';
import Logo from '@icons/images/Logo-retina.png';
import reloadIcon from '@icons/svgs/reload.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart.svg';

const MyHeader = () => {
    return (
        <div className='Header'>
            <div className='absolute top-0 left-[50%] -translate-x-[50%] flex justify-between w-[1250px] items-center h-[83px]'>
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
                    <div className='icon_container'>
                        <img src={reloadIcon} alt='' className='w-[20px] h-[20px]' />
                        <img src={heartIcon} alt='' className='w-[20px] h-[20px]' />
                        <img src={cartIcon} alt='' className='w-[20px] h-[20px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;
