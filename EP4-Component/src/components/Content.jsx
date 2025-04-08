import React, { useState } from 'react';
import styled from 'styled-components';

var Button = styled.button
`color: blue;
background: red;
margin: 1em;
padding: 0.25em 1em;
border: 2px solidrgb(100, 79, 191);
border-radius: 3px;
`;
var NewButton = styled(Button)
`color:Green;
`
function change(){
  console.log("Hello");
  user="chitra";
  console.log(user);
}

function changeParameter(user){
  //console.log("With parameter");
  console.log(user);
  
 // console.log();
    
}

function changeEvent(Event){

  console.log(Event.target.textContent);
  
}

var user="Rajan"


export const Content = () => {
 
  return (
    <main>
      <h1     style={{color: "white", fontSize: '50px', backgroundColor:"red", width:"100%", borderRadius:"20px" }}>Content-{user}</h1>
      <div    style={{ color: 'blue', fontSize: '16px' }}>Hello</div>
      <button style={{color:"white", width:"10%", backgroundColor:"red", height:"40px", fontSize:"20px", borderRadius:"20px", boxShadow:" 10px 10px 10px blue"}}> Click me!</button>     
      <Button onClick={change}> Click me!</Button>
      <button onClick={(e)=>changeEvent(e)}>Event</button>
      <NewButton onClick={()=>{changeParameter("Balaji")}}>NewButton</NewButton>
     
    </main>
  )
}


// export class Content extends Component {
//   render() {
//     return (
//       <div>Content</div>
//     )
//   }
// }

// export default Content
// export const Content = () => {
//   return (
//     <>
//           <h2>Content</h2>
//       </>
//   )
// }