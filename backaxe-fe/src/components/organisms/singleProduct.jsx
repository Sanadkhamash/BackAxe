import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProduct } from "../../api/shop";

export const Product = ({ title }) => {
  const mainStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-around",
  };
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  const { id } = useParams();
  let [product, setProduct] = useState();

  useEffect(() => {
    GetProduct(id, setProduct);
  }, []);

  return (
    <>
      {product ? (
        <Container maxWidth="lg">
          <div className="prod_header" style={{ headerStyles }}>
            <h1>{product.name}</h1>
          </div>
          <p>Posted: {product.date}</p>
          <div className="main" style={mainStyles}>
            <div style={{ width: "85%" }}>
              <img
                style={{ width: "85%" }}
                src="http://i.imgur.com/BCbxVui.png"
              />
            </div>
            <div>
              <p>Posted By: Username</p>
              <p>{product.name}</p>
              <p>Price: {product.price}</p>
              <p>Quantity Left: {product.quantity}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
        </Container>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
