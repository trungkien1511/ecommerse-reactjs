import { useContext } from 'react';
import { SidebarContext } from '../contexts/SideBarProvider';
import { TfiClose } from 'react-icons/tfi';
import Login from './ContentSidebar/Login';
import Wishlist from './ContentSidebar/Wishlist';
import Compare from './ContentSidebar/Compare';

const Sidebar = () => {
    const { isOpen, setIsOpen, type } = useContext(SidebarContext);

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <Wishlist />;
            case 'cart':
                return <Cart />;

            default:
                return <Login />;
        }
    };

    return (
        <div className='relative'>
            <div
                className={`${
                    isOpen ? `fixed inset-0 bg-[#0000004d] z-[1000] transition-all 0.3 ease` : null
                } `}
            />

            <div
                className={`${
                    isOpen ? `translate-x-[0]  ` : `translate-x-[370px]`
                } fixed top-0 right-0 h-dvh w-[370px] z-[1001] bg-white transition-all duration-300 ease`}
            >
                <div
                    className={`${
                        isOpen
                            ? `absolute top-[30px] left-[-50px] cursor-pointer bg-white p-2 rounded-2xl group`
                            : null
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className='absolute inset-0 bg-black/10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    <TfiClose className='relative' />
                </div>
                <div className='pt-[20px] px-[30px]'>{handleRenderContent()}</div>
            </div>
        </div>
    );
};

export default Sidebar;
