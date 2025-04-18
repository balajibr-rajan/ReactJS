import React from 'react'
import PropTypes from 'prop-types'
const ProductDetails = ({deepName=<h3>samsung</h3>, deepPrice, deepModel}) => {

    //console.log(props);

  return (
    <div>
        <section>
        <h4>ProductDetails</h4>
        <h6>{deepName}</h6>
        <h6>{deepModel}</h6>
        <h6>{deepPrice}</h6>
        </section>
    </div>
  )
}

export default ProductDetails

// third part library import by npm install propTypes

// not working- dis not throw error
// ProductDetails.PropTypes={
//     deepName: PropTypes.number.isRequired,
//     deepPrice : PropTypes.number.isRequired,
//     deepModel : PropTypes.string.isRequired
// }


//not working- did not pass default parameter
// ProductDetails.defaultpProps={
//     deepName :"samsung"
// }