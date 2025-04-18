import React, { useState } from 'react'
import Products from './Products'


const Shop = () => {


    let [Product, setProduct]= useState({Price: 10000,
        Model :"G6 power"})


  return (
    <div >
        <h1>Welcome to Balaji Mobiles</h1> 
        <Products product={Product}/>
    </div>
  )
}

export default Shop