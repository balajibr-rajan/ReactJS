import React from 'react'
import {userContext} from '../App'
const Consumercontext = () => {
   var date =  new Date()
  return (
    <div>
        <h1>consumerContext</h1>
        <userContext.Consumer>
            {
                ({user})=>{
                    return(
                    <h1>{user.Name}-{date.getFullYear()}</h1>)
                }
            }
        </userContext.Consumer>
    </div>
  )
}

export default Consumercontext