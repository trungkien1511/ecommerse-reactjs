import { useEffect, useState } from 'react';
import useScrollHandling from './useScrollHanding';

const useTranslateXImage = () => {
    const [translateXPosition, setTranslateXPosition] = useState(0);

    const { scrollPosition } = useScrollHandling();

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
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition
    };
};

export default useTranslateXImage;
