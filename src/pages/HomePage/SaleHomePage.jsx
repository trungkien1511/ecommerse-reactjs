import { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button';

const SaleHomePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const previousScrollPosition = useRef(0);
    const [translateXPosition, setTranslateXPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        setScrollPosition(currentScrollPosition);
        previousScrollPosition.current = currentScrollPosition;
    };

    const handleTranslateX = () => {
        // Bắt đầu hiệu ứng khi scrollPosition >= 1500
        if (scrollPosition >= 1500) {
            // Tính toán translateX dựa trên scrollPosition
            const translateValue = Math.min((scrollPosition - 1500) * 0.1, 100); // 0.1 là tốc độ di chuyển, 100 là giới hạn tối đa
            setTranslateXPosition(translateValue);
        } else {
            // Khi scroll lên trên 1500, trở về vị trí giữa cột
            setTranslateXPosition(0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

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
                                <Button />
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
