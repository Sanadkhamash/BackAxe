import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { UserStatus } from "../../App";
import { Grid } from "@mui/material";
import { NavDropdown } from "react-bootstrap";
const theme = createTheme({
  typography: {
    fontFamily: ["Arial", "Helvetica,sans-serif"].join(","),
  },
});

export const NaviBar = () => {
  const { categories } = React.useContext(UserStatus);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{ minHeight: "0", backgroundColor: "black" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={4}>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {categories &&
                  categories.map((item) => {
                    return (
                      <NavDropdown.Item
                        key={item.id}
                        href={`http://localhost:3000/category/${item.id}`}
                      >
                        {item.name}
                      </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
            </Grid>

            <Grid item xs={4}>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "none" }}
                variant="h6"
                color="inherit"
              >
                Shop By Make
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "none" }}
                variant="p"
              >
                Shop By Country
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
