import React, { useContext } from 'react'
import Conclusion from './Conclusion'
import { userContext } from '../App'

const Synopsis = () => {
    var {user: {Name}}=useContext(userContext)
  return (
    <div>
        <h2>List of debts for - {Name}</h2>
        <ol>
            <li>
                <h2 >
                <p>Fivestar</p>
                <p>Sathyan</p>
                <p>Subbaiah</p>
                <p>Chandra</p>
                <p>Daily finance</p>
                <p>Shutrulla</p>
                <p>Vinayagar temple</p>
                </h2>
                <Conclusion/>
            </li>
        </ol>
    </div>
  )
}

export default Synopsis