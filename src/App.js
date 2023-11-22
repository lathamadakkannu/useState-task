//import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function State() {
  const [state, setState] = useState(false)
  const [change,setChange] = useState(false)

  const signIn = () => {
    setChange(false)
    setState(true)
  }

  const signOut = () => {
     setState(false)
     setChange(true)
  }

  return (
    <div className='App'>
      {state ? (
        <div>
          <h3>Welcome...</h3>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : 
      (
        <div>
          <h3>Please sign In</h3>
          <button onClick={signIn}>Sign In</button>
        </div>
      )}
    </div>
  )
}

export default State;

/*function App(){
  const[state,setState]=useState({
    count:1,
    theme:"Red"
  })
  
  const{count,theme}=state

  const countInc=()=>{
    setState(ps=>{
      return{
        ...ps,
        count:ps.count+1
      }
    })
  }
  const countDec=()=>{
    setState(ps=>{
      return{
        ...ps,
        count:ps.count-1
      }
    })
  }
  return(
    <div className='App'>
      <button onClick={countInc}>Incrememt</button>
      <h3>{count} {theme}</h3>
      <button onClick={countDec}>Decrement</button>
      
    </div>
  )
}

export default App;*/
