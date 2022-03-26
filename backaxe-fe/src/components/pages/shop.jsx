import React from "react";
import CategoryContainer from "../organisms/categoryContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { TopBar } from "../organisms/TopBar";
import { ShopHero } from "../organisms/shopHero";
import { Footer } from "../organisms/Footer";
import { getSingleCategory, getOneCategory } from "../../api/shop";
import { useParams } from "react-router-dom";

export const Shop = () => {
  const theme = createTheme();
  let [products, setProducts] = React.useState(0);
  let [category, setCategory] = React.useState(0);
  let { id } = useParams();

  React.useEffect(() => {
    getSingleCategory(setProducts, id);
    getOneCategory(setCategory, id);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {products && console.log(products)}
        {products ? (
          <>
            <TopBar name={category.name} />
            <ShopHero name={category.name} />
            <CategoryContainer products={products} />
          </>
        ) : (
          <h1>PLEASE WAIT...</h1>
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
};
