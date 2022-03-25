import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/">
          <Typography variant="p" color="white" noWrap>
            Home
          </Typography>
        </Link>
        <Typography variant="p" color="inherit" noWrap>
          >
        </Typography>
        <Typography variant="p" color="inherit" noWrap>
          Categories
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
