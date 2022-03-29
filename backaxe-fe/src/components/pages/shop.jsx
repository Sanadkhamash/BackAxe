import React from "react";
import CategoryContainer from "../organisms/categoryContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { TopBar } from "../organisms/TopBar";
import { ShopHero } from "../organisms/shopHero";
import { Footer } from "../organisms/Footer";
import { getSingleCategory, getOneCategory, getMakes } from "../../api/shop";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { getProductsByMakesAndCategory } from "../../api/shop";
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
    !(e.target.value == -1)
      ? getProductsByMakesAndCategory(setProducts, e.target.value, id)
      : getSingleCategory(setProducts, id);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {products ? (
          <>
            <ShopHero name={category.name} />
            <select onChange={handleMakesChange}>
              <option value={-1}>All Makes</option>
              {makes &&
                makes.map((item, key) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
            </select>
            <CategoryContainer shop={true} />
          </>
        ) : (
          <h1>PLEASE WAIT...</h1>
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
};
