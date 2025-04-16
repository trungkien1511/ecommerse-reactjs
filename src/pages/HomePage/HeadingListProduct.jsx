import CountdownTimer from './Info/CountdownTimer';

const HeadingListProduct = () => {
    return (
        <div className='max-w-[1260px] mx-auto'>
            <div className='flex justify-between'>
                <div className='w-[49.048%] h-[408px] bg-cover bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/photo-of-man-wearing-white-hoodie-5474310.jpeg)] flex flex-col justify-center items-center space-y-2'>
                    <CountdownTimer targetDateString='2025-12-31T23:59:59' />
                    <div>
                        <h2 className='text-[28px]'>The classics make a comeback</h2>
                    </div>
                    <div>
                        <button className='button_highlight'>Buy now</button>
                    </div>
                </div>
                <div className='flex'>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </div>
    );
};

export default HeadingListProduct;
