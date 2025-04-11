import React, { useContext } from 'react'
import { userContext } from '../App'

const Conclusion = () => {
   var {user}=  useContext(userContext) // destructuring
   console.log(user);
   
  return (
    <div>
        <h2>Total amount</h2>
        <article>
            <h1>userName: {user.Name}</h1>
        </article>
    </div>
  )
}

export default Conclusion