import { Container } from "@mui/material";
import React from "react";

export const Product = ({ title }) => {
  const mainStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-around",
  };

  return (
    <>
      <Container maxWidth="lg">
        <h1>{title}</h1>
        <div className="main" style={mainStyles}>
          <div>
            <img src="http://i.imgur.com/BCbxVui.png" />
          </div>
          <div>
            <p>Username</p>
            <p>prodcut name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>
              description: Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Illum cumque illo quibusdam vel eaque atque, molestiae
              consequuntur dolorum, aut non facilis enim nam ex molestias.
              Aspernatur ullam nemo alias quo facilis! Accusantium consectetur,
              ipsum repellat numquam voluptatibus quam esse velit natus quasi
              veniam corrupti id voluptate aliquam quaerat repudiandae
              doloribus.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
