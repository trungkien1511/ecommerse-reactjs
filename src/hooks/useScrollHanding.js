import { useEffect, useRef, useState } from 'react';

const useScrollHandling = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null); // 'up', 'down', or null
    const previousScrollPosition = useRef(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        // Xác định hướng cuộn
        let direction = null;
        if (currentScrollPosition > previousScrollPosition.current) {
            direction = 'down';
        } else if (currentScrollPosition < previousScrollPosition.current) {
            direction = 'up';
        }

        // Cập nhật state
        setScrollPosition(currentScrollPosition);
        setScrollDirection(direction);

        // Lưu vị trí hiện tại
        previousScrollPosition.current = currentScrollPosition;
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollPosition,
        scrollDirection
    };
};

export default useScrollHandling;
