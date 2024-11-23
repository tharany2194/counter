import React, { useState } from "react";
import './App.css';

function App(){

  setInterval(updateTime,1000);
  setInterval(updateDate,1000);

 const now = new Date().toLocaleTimeString();
 const today = new Date().toLocaleDateString();
 

 const [time, setTime] = useState(now);
 const [date, setDate] = useState(today);

 function updateTime(){
  const  newTime = new Date().toLocaleTimeString();

  setTime(newTime);
 }
 function updateDate(){
  const  newDate = new Date().toLocaleDateString();

  setDate(newDate);
 }


  return (
        <div className="container">
          <h1>{time}</h1>
        
          <button onClick={updateTime}>Time</button>
          <h1>{date}</h1>
          <button onClick={updateDate}>Date</button>
        </div>
        )
}
export default App;

//Alternative code
// import { useState } from "react";

// function App() {
//   const now = new Date();
//   const initialTime = now.toLocaleTimeString();
//   const initialDate = now.toLocaleDateString();

//   const [dateTime, setDateTime] = useState({ time: initialTime, date: initialDate });

//   function updateTime() {
//     const current = new Date();
//     const newTime = current.toLocaleTimeString(); // Get the current time
//     const newDate = current.toLocaleDateString(); // Get the current date
//     setDateTime({ time: newTime, date: newDate }); // Update state with new time and date
//   }

//   return (
//     <div className="container">
//       <h1>{dateTime.time}</h1>
//       <h2>{dateTime.date}</h2>
//       <button onClick={updateTime}>Get Time & Date</button>
//     </div>
//   );
// }

// export default App;









// function App(){
// const [count, setCount] =useState(0);


// function increase() {
//   setCount(count+1);
// }
// function decrease() {
//   setCount(count-1);
// }
// return (<div className='container'>
//   <h1>{count}</h1>
//   <button onClick={increase}>+</button>
//   <button onClick={decrease}>-</button>
//   </div>);

// }
// export default App;



