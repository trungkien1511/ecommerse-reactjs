import Logo from '@icons/images/marseille-logo.webp';
import { dataFooter } from '@components/Header/constants.js';
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='w-full bg-[#363636] py-[40px]'>
                <div className='max-w-[83.29%] mx-auto p-[15px] text-white'>
                    <div className='flex flex-col justify-center items-center space-y-[20px]'>
                        <div className='w-[160px] h-auto'>
                            <img src={Logo} alt='' className='w-full h-full' />
                        </div>
                        <div className='flex items-center mt-[15px]'>
                            {dataFooter.map((item, index) => (
                                <div key={index} className='mx-[22.5px] cursor-pointer'>
                                    <p className='hover:opacity-[0.6] transition-all duration-200 ease-in'>
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p>Guaranteed safe ckeckout</p>
                        </div>
                        <div className='mb-[35px]'>
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                                alt=''
                            />
                        </div>
                        <div>
                            <div>
                                Copyright © 2024 XStore theme. Created by 8theme – WordPress
                                WooCommerce themes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
