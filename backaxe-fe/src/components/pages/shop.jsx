import React from "react";
import CategoryContainer from "../organisms/categoryContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { TopBar } from "../organisms/TopBar";
import { ShopHero } from "../organisms/shopHero";
import { Footer } from "../organisms/Footer";
import {
  getSingleCategory,
  getOneCategory,
  getMakes,
  getCategories,
} from "../../api/shop";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { getProductsByMakesAndCategory } from "../../api/shop";
import { SideBar } from "../organisms/sidebar";
import { Divider, Grid, Skeleton, Typography } from "@mui/material";
import Spinner from "../atoms/spinner";
import { Filters } from "../molecules/filters";

export const Shop = () => {
  const theme = createTheme();
  let [products, setProducts] = React.useState(0);
  let [category, setCategory] = React.useState(0);
  let [makes, setMakes] = React.useState(0);
  let { id } = useParams();

  React.useEffect(() => {
    getSingleCategory(setProducts, id);
    getOneCategory(setCategory, id);
    getMakes(setMakes);
  }, []);

  const handleMakesChange = (e) => {
    // !(e.target.value == -1)
    //   ? getProductsByMakesAndCategory(setProducts, e.target.value, id)
    //   : getSingleCategory(setProducts, id);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container justifyContent="start" spacing={3} ml={2}>
          <Grid item sm={10} md={8}>
            {products ? (
              <>
                <CategoryContainer
                  category={category}
                  shop={true}
                  prod={products}
                />
              </>
            ) : (
              <>
                <Grid container justifyContent="start" spacing={3}>
                  <Grid item sm={10} md={2} borderRight="solid grey">
                    <Skeleton
                      variant="rectangular"
                      width={"15vw"}
                      height={"100vh"}
                    />
                  </Grid>
                  <Grid item sm={10} md={8}>
                    <Skeleton variant="rectangular" width={700} height={118} />
                    <br />
                    <Skeleton variant="rectangular" width={700} height={118} />
                    <br />
                    <Skeleton variant="rectangular" width={700} height={118} />
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
};
