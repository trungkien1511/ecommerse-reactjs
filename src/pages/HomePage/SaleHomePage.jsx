import Button from '../../components/Button';
import useTranslateXImage from '../../hooks/useTranslateXImage';

const SaleHomePage = () => {
    const { translateXPosition } = useTranslateXImage();
    return (
        <div className='SaleHomePage'>
            <div className='mt-20 w-full mx-auto mb-[5.65em]'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    {/* Left Column - 40% width */}
                    <div className='w-full md:w-[40%] flex justify-center'>
                        <div
                            style={{
                                transform: `translateX(${-translateXPosition}px)`, // Ảnh trái di chuyển sang trái
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                                alt='Sale Image Left'
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                    {/* Center Column - 19.232% width */}
                    <div className='w-full md:w-[19.232%] relative z-10'>
                        <div className='space-y-5 flex flex-col items-center justify-center text-center p-4'>
                            <h2 className='text-2xl font-bold'>Sale of the Year</h2>
                            <div className='text-gray-600'>
                                Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
                            </div>
                            <div className='mt-2'>
                                <Button content={'Read More'} />
                            </div>
                        </div>
                    </div>
                    {/* Right Column - 40% width */}
                    <div className='w-full md:w-[40%] flex justify-center'>
                        <div
                            style={{
                                transform: `translateX(${translateXPosition}px)`, // Ảnh phải di chuyển sang phải
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <img
                                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                                alt='Sale Image Right'
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleHomePage;
