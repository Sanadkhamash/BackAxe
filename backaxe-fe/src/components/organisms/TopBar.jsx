import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export const TopBar = ({ category, product, username }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/">
          <Typography variant="p" color="white" noWrap>
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
          </Typography>
        </Link>
        {category && (
          <Typography variant="p" color="inherit" noWrap>
            {">"}
            {category.name}
          </Typography>
        )}
        {product && (
          <Typography variant="p" color="inherit" noWrap>
            {">"}
            {product}
          </Typography>
        )}
        {username && (
          <Typography variant="p" color="inherit" noWrap>
            {">"}
            {username}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};
