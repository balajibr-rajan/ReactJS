import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Products = () => {
  let [Count, setCount] = useState(0);
  let [Count1, setCount1] = useState(0);
  // we will achieve life cycle method by using useEffect in functional component - Phases: Mounting, Updatig, Unmounting
  useEffect(() => {
    console.log("only function effect");
  }); //everytime component re-rendering
  useEffect(() => {
    console.log("function and dependency effect");
  }, []); // only one time execute
  useEffect(() => {
    console.log("function and state defendecy effect");
  }, [Count]); // only executes when particular states updating
  useEffect(() => {
    console.log("function and state defendecy effect for count1");
  }, [Count1]); // only executes when particular states updating
  // useEffect(() => {
  //   console.log("function and state defendecy effect for count1");
  // }, [, Count, Count1]); // only executes when particular states updating

  console.log("Initial render");

  return (
    <div>
      Products-{Count}-{Count1}
      <Button
        variant="primary"
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        Increase
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          setCount1(Count1 + 1);
        }}
      >
        Increase1
      </Button>
      <Link to="List">List</Link>
      <Link to="details">Details</Link>
      <Outlet /> {/*rendering child components */}
    </div>
  );
};

export default Products;
