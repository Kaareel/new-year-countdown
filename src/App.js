import { useState, useEffect } from 'react';
import Box from './components/Box';
import TimeDisplay from './components/TimeDisplay';
import calculateTime from './Utils/calculateTime';
import formatTime from './Utils/formatTime';
import './App.css'

function App() {
  const [time, setTime] = useState({
    seconds: '0',
    minutes: '0',
    hours: '0',
    days: '0',

})
useEffect(() => {
  const interval = setInterval(() => {
      const { seconds, minutes, hours, days, isNewYear } = calculateTime();
      setTime({
          seconds: formatTime(seconds),
          minutes: formatTime(minutes),
          hours: formatTime(hours),
          days: days
      })

      if (isNewYear) {
          alert('¡Happy new year!')
      }

  }, 1000);
  return () => clearInterval(interval);
}, [])
  return (
    <div className="App">
      <div className="countdown-container">
            <div className='title'>
                <h1>New year</h1>
            </div>
            <Box>
                <TimeDisplay text='days' value={time.days} />
                <TimeDisplay text='hours' value={time.hours} />
                <TimeDisplay text='minutes' value={time.minutes} />
                <TimeDisplay text='seconds' value={time.seconds} />
            </Box>

        </div>
    </div>
  );
}

export default App;