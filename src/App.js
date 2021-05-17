import './App.css';
import moment from 'moment';
import { useState , React , useEffect ,useCallback } from 'react';
// import random_length from './random_length.css';


function App() {
  const [date , setDate] = useState('')
  const [circleBoolean, setCircleBoolean] = useState(false);
  const [random_number, setRandom_number] = useState(0);
  // const [randomLength , setRandomLength] = useState(1);
  
  const doThings= useCallback(()=>{
    setCircleBoolean((prev)=>{
      return !prev});
    setDate(moment().format('MMMM Do YYYY, h:mm:ss a')) ;
    setRandom_number(Math.random() * 100);
    // setRandomLength(Math.random()*3);
    // console.log(randomLength);
  } , []) 

  useEffect(() => {
    const interval = setInterval(() => {
      doThings()
    }, 1000);
    return () => clearInterval(interval);
  }, [doThings]);

  



  return (
    <div className="App">
      <div className="bg">
        <div style={{ top:`${random_number}%`, left:`${random_number}%` }}  className={circleBoolean ? "circle" : ""} />
        {/* <div style={random_length.circle}  className={circleBoolean ? "circle" : ""} /> */}
        <div className="card">
          <p className="card-info">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
