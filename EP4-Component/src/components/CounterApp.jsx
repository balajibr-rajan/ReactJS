import React, { useState } from 'react'



const CounterApp = () => {

    
    //var[sample, setSample] = useState(returnState())// onle use function reference or else use anonymous function
    var[sample, setSample] = useState(()=>{ return returnState()})
 
    function returnState(){
        console.log("unnessary loading");
        return 100        
    }

    //var count = 0;
    var [count, setCount]= useState(0);
    //console.log(useState(2)); 

    
    function increase(){
        // count=count+1;
        // console.log(count)
       // setCount(count+1)
       setCount((prevCount)=>prevCount+1)
       setCount((prevCount)=>prevCount+1)
       
       
       
    }

    function decrease(){
        // count=count-1
        // console.log(count)
       // setCount(count-1)
       setCount((prevCount)=>prevCount-1)
       setCount((prevCount)=>prevCount-1)
       setCount((prevCount)=>prevCount-1)
    }

    
    //t   ypes of conditional rendering
    //let message="";
    // if (count>10) message="You reached to unlock 10% offer";
    // count>20 && message =="You are a click master";
  return (
  
    <div><h1>CounterApp-{count}-{sample}</h1>
    <button onClick={()=>increase()}>Increase</button>
    <button onClick={decrease}>Decrease</button>
 
    
    </div>
  )
}

export default CounterApp