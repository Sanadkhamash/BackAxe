import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { DangerBtn, SuccessBtn } from "../atoms/buttons";

export const Product = ({ product }) => {
  const captionStyle = {
    color: "grey",
    margin: "15%",
    fontSize: "1.2vw",
    textDecoration: "none",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const tipsStyle = {
    display: "block",
    color: "red",
  };

  return (
    <Grid container xs={12} style={{ margin: "25px 0 0 5px" }} spacing={2}>
      <Grid className="head" item xs={8} position="sticky">
        <h3>{product.name}</h3>
        <small>Published: {product.date.substring(0, 10)}</small>
      </Grid>
      <Grid className="Btn" item xs={2}>
        <SuccessBtn>Request</SuccessBtn>
      </Grid>
      <Grid className="left-product" item xs={11} md={6}>
        <Grid
          style={{
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "gold",
          }}
          item
          xs={12}
        >
          <img src={product.image} style={{ width: "90%", margin: "5%" }} />
          <Grid item xs={2}>
            <span style={captionStyle}>City:Amman</span>
            <span style={captionStyle}>Status:New</span>
            <span style={captionStyle}>
              Category:
              <Link
                style={linkStyle}
                to={`/category/${product.category[0].id}`}
              >
                {product.category[0].name}
              </Link>
            </span>
            <span style={captionStyle}>
              Make:
              <Link style={linkStyle} to={`/makes/${product.make.id}`}>
                {product.make.name}
              </Link>
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="right-product" item xs={11} md={4}>
        {/* PRICE----- */}
        <Grid style={{ backgroundColor: "lightGrey" }} item xs={12}>
          <h3 style={{ color: "red" }}>
            {product.price}
            <small style={{ fontSize: "13px" }}>JD</small>
          </h3>
        </Grid>
        {/* USER ----- */}
        <Grid style={{ backgroundColor: "#F3F3F3" }} item xs={12}>
          <Link to={`/user/${product.user.id}`} style={linkStyle}>
            {product.user.username}
          </Link>
          <br />
          <small>{product.user.email}</small>
          <br />
          <small>
            Member Since:{product.user.date_joined.substring(0, 10)}
          </small>
        </Grid>
        <br />
        <Divider />
        <p>Quantity: {product.quantity}</p>
        <Divider />
        <Grid item xs={12}>
          <small style={tipsStyle}>Warning:</small>
          <small style={tipsStyle}>- Only meet in public places</small>
          <small style={tipsStyle}>
            - Never pay or transfer money in advance.
          </small>
          <small style={tipsStyle}>
            - Inspect the product before you buy it.
          </small>
        </Grid>
        <Divider />
        <Grid xs={12} style={{ margin: "20px 0px" }}>
          <DangerBtn>Report</DangerBtn>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        item
        xs={10}
        style={{
          backgroundColor: "#F3F3F3",
          margin: "15px 0 0 16px",
        }}
      >
        <p>Description:</p>
        <p>{product.description}</p>
      </Grid>
    </Grid>
  );
};
