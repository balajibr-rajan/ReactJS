import ProductDetails from "./ProductDetails";

const Products = ({product}) => {
   // console.log(props);
 // let {product} = props;
 //console.log(product);
  
  return (
    <div>
        <h2>Product</h2>
        {/* <section>
        <h4>{product.Name}</h4>
        <h4>{product.Model}</h4>
        <h4>{product.Price}</h4>
        </section>  */}
      <ProductDetails 
         deepName = {product.Name }
         deepPrice ={product.Price}
         deepModel = {product.Model}
      />
        
    </div>
  )
}

export default Products
