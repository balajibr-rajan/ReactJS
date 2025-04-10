import React, { useState } from 'react'
import styled from 'styled-components'

var Button = styled.button
`
width:100px;
height:50px;
background: red;
border-radius:20px;
border-color:blue;
border-width:4px
`

const CounterApp = () => {

 let[count, setCount]= useState(0)
 let[data, setData]= useState("success")

  function increase(){
    setCount(count+1)
    console.log(count+1);}

    //types of conditional rendering

    let message="";
    if (count>=5 && count<10) message= ( <p> you click {count} times & 20 % offers unlocked </p> ) 
        // count>20 && message =="You are a click master";
    let remainingClick;

    let displayComp=()=>{
      switch(data){

        case "loading" : {return <LoadingComp/>}
        break;
        
        case "success" : {return <SuccessComp/>}
        break;
      }


    }
    


  return (
    <div>

       <h1>Click to add Rewards🎉 - {count}</h1>
    
       <Button onClick={()=>increase()}>Increase</Button>
      
      {displayComp()}

        {count<=1? <p>you need to click more</p> : ((count<5 && count>=2)? <p> 10% rewards unlocked</p> : <p></p>) }
      
        {message}

        {count>=10 && <p>20% offer unlocked.you have obtain maximum offer</p> }

        {<h3>click needs- {remainingClick}</h3>}


    </div>
  )
}

export default CounterApp

function LoadingComp(){
  return(
  <h6>Loading...</h6>
  )
}

function SuccessComp(){
  return(
  <h6>Success...</h6>
  )
}




