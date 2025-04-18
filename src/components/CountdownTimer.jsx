import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDateString }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Map for display labels
    const intervalLabels = {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Mins',
        seconds: 'Secs'
    };

    useEffect(() => {
        // Parse the target date from the prop
        const targetDate = new Date(targetDateString);

        // Check if the date is valid
        if (isNaN(targetDate.getTime())) {
            console.error('Invalid date format provided to CountdownTimer');
            return;
        }

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDateString]);

    // Function to pad numbers with leading zeros
    const formatNumber = (num) => {
        return num.toString().padStart(2, '0');
    };

    return (
        <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
                {Object.keys(timeLeft).map((interval) => (
                    <div className='bg-gray-100 rounded-md space-x-1 w-20 h-16 flex items-center justify-center'>
                        <span>{formatNumber(timeLeft[interval])}</span>
                        <span className='text-gray-500 text-sm mt-1'>
                            {intervalLabels[interval]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
