import { createContext, useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Synopsis from './components/Synopsis'
import Consumercontext from './components/consumercontext'

export var userContext=createContext();

function App() {
  
  var [user, setUser]= useState({Name:"Balaji", Age:29 , Gmail:"balajibr156@gmail.com"})

  return (
    <userContext.Provider value={{user}}> 
      
        <Heading />
        <Synopsis/>
        <Consumercontext/>
      
      </userContext.Provider>
  )
}

export default App
