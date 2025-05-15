import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      Products
      <Link to="List">List</Link>
      <Link to="details">Details</Link>
      <Outlet /> {/*rendering child components */}
    </div>
  );
};

export default Products;
