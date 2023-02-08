import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App center">
     <Counter></Counter>
    </div>
  );
}
 
function Counter(){

  // Custome style for button
  const st={ backgroundColor:"peru", color:"white",marginLeft:"10px",padding:"5px",fontSize:"20px",borderRadius:"5px"}


  // details bakkha note
  const [count,setCount]=useState(0);
  //increase Handler
  const increaseHandle=()=>{
    const newCount=count+1;
    setCount(newCount);
  }
  //Decrease handler
  const decreseHandle=()=>{
    if(count>=1){
      const newCount=count-1;
      setCount(newCount);
    }
    else{
      return;
    }
    
  }
  return(
    <div className='counter-design'>
      <h1>Count:{count}</h1>
      <button style={st} onClick={increaseHandle}>Incrase</button>
      <button style={st}onClick={decreseHandle}>Decrese</button>
    </div>

  );
}


export default App;
