import Fragment from 'react' //import React from 'react'
import './App.css'
import React from 'react'


// function user(){
//   return "Balaji", "Raji", true
  
// }

// console.log(user());
 
var Name = "Balaj.B.R"
var isPassed = true
function App() {


  return (
       <Fragment key={2}> {/*<React.Fragment> allows only key*/}
        <h1 className='heading' style={{backgroundColor:"red", color:"white"}}>Balaji</h1>
        <p>Rajeshwari</p>
        <label htmlFor="Name">Age</label>
        <label htmlFor="Name">Name</label><br />
        <input type="text" id='Name' />
        <button onClick={"click()"}> Submit</button>
        <p>{Name}</p>
        {/* conditional rendering */}
        {
          isPassed && <p>Your result is pass</p>
        }
      </Fragment>);  {/*</React.Fragment> */} }

export default App
