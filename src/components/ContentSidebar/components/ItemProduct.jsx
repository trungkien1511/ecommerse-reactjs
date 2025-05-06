import { IoClose } from 'react-icons/io5';

const ItemProduct = () => {
    return (
        <div className='py-[20px] px-[12px] flex hover:bg-[#f7f7f7] group transition-all duration-300 ease relative'>
            <a className='mr-[20px] '>
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg'
                    alt=''
                    className='max-w-[5rem] max-h-[100px]'
                />
            </a>
            <div className='absolute top-[10px] right-[10px] cursor-pointer translate-x-[10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                <IoClose className='text-[20px]' />
            </div>
            <div>
                <p className='text-[15px]'>10k Yellow Gold</p>
                <p>$99.99</p>
            </div>
        </div>
    );
};

export default ItemProduct;
