import { useEffect, useState } from 'react';
import Cards from './components/Cards'
import './App.css'


function App() {


  const [countDown, setCountDown] = useState(10);
  const [timeOut, setTimeOut] = useState(90);
  const [isCountDownVisible, setIsCountDownVisible] = useState(true);




  useEffect(() => {
    const timer = countDown > 0 && setInterval(() => setCountDown(countDown - 1), 1000);

    return () => clearInterval(timer);
  }, [countDown]);

  useEffect(() => {
    if (countDown === 0) {
      setIsCountDownVisible(false);



      const timeOut1 = timeOut > 0 && setInterval(() => setTimeOut(timeOut - 1), 1000);
      if (timeOut === 0) {
        window.alert("Game Over");
        window.location.reload(false);
      }

      return () => clearInterval(timeOut1);
    }


  }, [timeOut, countDown]);



  return (
    <div className="App">
      <div className='timeout'>
        <h3>Timer : {timeOut} Sec Remaining</h3>
      </div>
      <h1>Match The Images</h1>

      {isCountDownVisible && <div >
        <div ><h3>Game Will Start in: {countDown} sec<br />Remember the Cards</h3></div>
      </div>}
      <Cards />
    </div>
  );
}

export default App;
