import React from "react";
import CategoryContainer from "../organisms/categoryContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { TopBar } from "../organisms/TopBar";
import { ShopHero } from "../organisms/shopHero";
import { Footer } from "../organisms/Footer";
import { getCategories } from "../../api/shop";

export const Shop = () => {
  const theme = createTheme();
  let [category, setCategory] = React.useState(0);

  React.useEffect(() => {
    getCategories(setCategory);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {category && console.log(category)}
        {category ? (
          <>
            <TopBar category={category} />
            <ShopHero />
            <CategoryContainer category={category} />
          </>
        ) : (
          <h1>PLEASE WAIT...</h1>
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
};
