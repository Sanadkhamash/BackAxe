import React, { useState } from "react";
import { Divider, Grid, List } from "@mui/material";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export const SideBar = ({ category, makes, children, styles }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    paddingLeft: "15px",
  };

  return (
    <>
      <List style={styles} component="nav">
        <React.Fragment>{children}</React.Fragment>
        <small style={linkStyle}>Makes:</small>
        <br />
        {makes?.map((item, key) => {
          return (
            <Grid sx={{ my: 1 }}>
              <Link to={`/make/${item.id}`} style={linkStyle}>
                <Avatar
                  src={item.photo}
                  style={{ display: "inline-block" }}
                  sx={{ width: 24, height: 24 }}
                  alt={item.name}
                />
                <span style={{ paddingLeft: "5px" }}>{item.name}</span>
              </Link>
            </Grid>
          );
        })}
        <br />
        <Divider sx={{ my: 1 }} />
        <small style={linkStyle}>Categories:</small>
        <Grid container sx={12} spacing={1}>
          {category?.map((item) => {
            return (
              <Grid item sx={5}>
                <Link style={linkStyle} to={`/category/${item.id}`}>
                  {item.name}
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </List>
    </>
  );
};
