import { Grid, Skeleton } from "@mui/material";
import React from "react";
import { getCategories, getMakes } from "../api/shop";
import { NaviBar } from "../components/organisms/AppBar";
import { NavBar } from "../components/organisms/NavBar";
import { SideBar } from "../components/organisms/sidebar";

export const UserContainer = ({ children }) => {
  let [makes, setMakes] = React.useState();
  let [category, setCategory] = React.useState(0);

  const sideBarStyles = {
    backgroundColor: "lightGrey",
    Color: "white",
    height: "83vh",
  };

  React.useEffect(() => {
    getCategories(setCategory);
    getMakes(setMakes);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <NaviBar />
        </Grid>
        <Grid container xs={12} spacing={0}>
          <Grid display={{ xs: "none", md: "block" }} item xs={0} md={2}>
            {category && makes ? (
              <SideBar
                styles={sideBarStyles}
                category={category}
                makes={makes}
              />
            ) : (
              <Skeleton variant="rectangular" width={200} height={800} />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
            style={{ height: "83vh", overflowY: "scroll", overflowX: "hidden" }}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
