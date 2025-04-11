import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'

const Heading = () => {
    var {user:{Name}}=useContext(userContext)
  return (
    <div>
        <h1 style={{textAlign:"center"}} >welcome to my world<span style={{backgroundColor:"Red", borderRadius:"20px", boxShadow:" 10px 10px 10px black"}}>
            {Name.slice(0,1)}</span></h1>
    
    </div>
  )
}

export default Heading