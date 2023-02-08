import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className='center'>
      <Counter></Counter>
      </div>
     <div>
     <Externaluser> </Externaluser>
     </div>
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


// Data load Api

function Externaluser(){

  const [users,setUsers]= useState([]);
    useEffect( ()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setUsers(data))
    } ,[])


  
  return(
    <div>
      <h2>External user Using Api</h2>
      <div className='center'>
      <div className='counter-design'>
      {
        users.map(user=> <User Name={user.name} Email={user.email}></User>)
      }
      </div>
      </div>
      
    </div>

  );
}

function User(props){
  return(
    <div>
      <h2> Name:  {props.Name}</h2>
      <p> Email: {props.Email}</p>
      
    </div>

  );
}


export default App;
