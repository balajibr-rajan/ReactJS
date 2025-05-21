import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LifeLine } from "react-loading-indicators";

const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [error, SetError] = useState("");
  let [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Search proper data");
        }
      })
      .then((data) => {
        setProducts(data);
      })

      .catch((error) => {
        SetError(error.message);
      })
      .finally(() => {
        SetIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <center>
        {/* <p>Loading...</p> */}
        <LifeLine
          color="#32cd32"
          size="medium"
          text="loading"
          textColor="red"
        />
      </center>
    );
  }
  return (
    <div>
      <p>ProductList</p>
      <section className="products">
        {products.map((product) => (
          <Card
            key={product.id}
            style={{ width: "25%", height: "40rem" }}
            className="product"
          >
            <center>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "9rem", height: "12rem" }}
              />
            </center>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text style={{ overflow: "scroll", height: "200px" }}>
                {product.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Card.Text
                style={{
                  background: "green",
                  padding: "10px",
                  textAlign: "center",
                  borderRadius: "15%",
                  fontFamily: "sans-serif",
                  height: "100%",
                  width: "30%",
                  justifyContent: "space-evenly",
                }}
              >
                ₹{product.price}
              </Card.Text>
              <Button variant="primary">Add cart</Button>
            </Card.Footer>
          </Card>
        ))}
      </section>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default ProductList;
