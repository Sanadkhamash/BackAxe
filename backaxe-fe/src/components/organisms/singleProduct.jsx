import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export const Product = ({ product }) => {
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

  return (
    <>
      <Container maxWidth="lg">
        <div className="prod_header" style={{ headerStyles }}>
          <h1>{product.name}</h1>
        </div>
        <p>Posted: {product.date}</p>
        <div className="main" style={mainStyles}>
          <div style={{ width: "85%" }}>
            <img style={{ width: "85%" }} src={product.image} />
          </div>
          <div>
            <p>
              Posted By:{" "}
              <Link to={`/user/${product.user.id}`}>
                {product.user.username}
              </Link>
            </p>
            <p>{product.name}</p>
            <p>Price: {product.price}</p>
            <p>Quantity Left: {product.quantity}</p>
            <p>Description: {product.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
};
