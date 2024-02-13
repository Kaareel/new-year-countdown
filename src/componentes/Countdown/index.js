import { useState, useEffect } from 'react';
import './index.css';

export const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const changingDate = new Date('1 jan 2025');
            const totalSeconds = Math.floor((changingDate - currentDate) / 1000);
            setDays((Math.floor(totalSeconds / 3600 / 24)))
            setHour(formatTime(Math.floor(totalSeconds / 3600) % 24))
            setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60))
            setSeconds(formatTime(Math.floor(totalSeconds % 60)))

            if (totalSeconds === -1) {
                alert('¡Happy new year!')
            }

        }, 1000);
        return () => clearInterval(interval);
    }, [])

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <div className="countdown-container">
            <div className='title'>
                <h1>New year</h1>
            </div>
            <div className="countdown-values">
                <div className="countdown-value">
                    <p className="big-text">{days}</p>
                    <span>days</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">{hour}</p>
                    <span>hour</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">{minutes}</p>
                    <span>mins</span>
                </div>
                <div className="countdown-value">
                    <p className="big-text">{seconds}</p>
                    <span>seconds</span>
                </div>
            </div>
        </div>

    )
};
