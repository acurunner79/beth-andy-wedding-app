import React, {useState, useEffect} from 'react';
import './countdown.css'


const Countdown = () => {

    const calculateTimeLeft = () => {
    
        const difference = +new Date(`${2022}-04-30`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span className='counter'>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
      return (
        <div>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      );
    }


export default Countdown