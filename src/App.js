import { useEffect,  useState } from 'react';
import './app.css'

function App() {
  const [date, setDate] = useState('1 Jan 2023');
  const selectedDate = new Date(date);
  const currentDate = new Date();
  const [totalSeconds, setTotalSeconds] = useState((selectedDate - currentDate) / 1000);
  const [days, setDays] = useState(Math.floor(totalSeconds / 3600 / 24));
  const [hours, setHours] = useState(Math.floor(totalSeconds / 3600) % 24);
  const [minutes, setMinutes] = useState(Math.floor(totalSeconds / 60) % 60);
  const [seconds, setSeconds] = useState(Math.floor(totalSeconds) % 60);
  const [count, setCount] = useState(0);

  const [nameEvent, setNameEvent] = useState('New Years Eve');

  function countdown(){    
    setTotalSeconds((selectedDate - currentDate) / 1000)
    setDays(Math.floor(totalSeconds / 3600 / 24));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds) % 60); 
  }

  function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
  }

  function handleChangeNameEvent(event){
    setNameEvent(event.target.value);
  }
  function handleChangeDate(event){
    setDate(event.target.value);
  }

  useEffect(() => {    
    const interval = setInterval(() => {
      countdown()
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);    
  }, [count]);
  
  return (
    <div className="App">
      <h1> {nameEvent}</h1>
      <div className="countdown-container">
        <div className="countdown-element">
          {formatTime(days)}
          <p className="big-text" id="days">
            <span>days</span>
          </p>
        </div>
        <div className="countdown-element">
          {formatTime(hours)}
          <p className="big-text" id="hours">
            <span>hours</span>
          </p>
        </div>
        <div className="countdown-element">
          {formatTime(minutes)}
          <p className="big-text" id="mins">
            <span>mins</span>
          </p>
        </div>
        <div className="countdown-element">
          {formatTime(seconds)}
          <p className="big-text" id="seconds">
            <span>seconds</span>
          </p>
        </div>
      </div>

      <div className="input-container">
        <div className="date-input">
          <span>Write the date you want to countdown eg. (1 Jan 2023)</span>
          <input type="text" value={date} onChange={handleChangeDate}>
          </input>
        </div>
        <div className="description-input">
          <span>What's the name of the event on this date? </span>
          <input type="text" value={nameEvent} onChange={handleChangeNameEvent}>
          </input>
        </div>
      </div>
      
    </div>
  );
}

export default App;
