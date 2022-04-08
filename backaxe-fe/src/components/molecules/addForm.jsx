import React, { useEffect, useState } from "react";
import { UnderLinedText } from "../atoms/inputs";
import { AddProduct, getCategories, getMakes } from "../../api/shop";
import { checkIfDataIsFilled } from "../../helpers/validators";
import { Grid } from "@mui/material";
import { SuccessBtn } from "../atoms/buttons";

export const AddForm = () => {
  let [category, setCategory] = useState(0);
  let [makes, setMakes] = useState(0);

  const cardHeader = {
    backgroundColor: "lightGray",
    color: "black",
    padding: "0 0 0 10px",
  };

  const textAlign = { textAlign: "center" };

  const containerStyle = {
    margin: "15px",
    borderStyle: "solid",
    borderColor: "lightGrey",
  };

  useEffect(() => {
    getCategories(setCategory);
    getMakes(setMakes);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let canBeSubmitted = checkIfDataIsFilled(e.target);
    if (canBeSubmitted) {
      let productDetails = {
        name: e.target.name.value,
        description: e.target.description.value,
        price: e.target.price.value,
        quantity: e.target.quantity.value,
        image: e.target.image.value,
        make: {
          id: e.target.make.value,
        },
        category: {
          id: e.target.category.value,
        },
      };
      console.log(productDetails);
      AddProduct(productDetails);
    }
  };
  return (
    <Grid style={containerStyle} container xs={10}>
      <Grid justifyContent="center" item xs={12}>
        <h3 style={cardHeader}>Add a product</h3>
      </Grid>
      <Grid justifyContent="center" item xs={12}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Grid
            style={textAlign}
            justifyContent="center"
            container
            xs={12}
            // spacing={2}
          >
            <Grid mb={1} container xs={5}>
              <UnderLinedText name="name" label="Product Name" />
              <UnderLinedText name="quantity" label="Quantity" />
            </Grid>
            <Grid mb={1} container xs={5}>
              <UnderLinedText name="price" label="Price" />
              <UnderLinedText name="description" label="description" />
            </Grid>
            <Grid mb={3} container xs={10}>
              <UnderLinedText name="image" label="Image URL" />
            </Grid>
            <Grid mb={1} style={textAlign} container xs={10} spacing={6}>
              <Grid item xs={6}>
                <select style={{ width: "100%" }} name="category">
                  <option>Select a Category</option>
                  {category &&
                    category.map((item, i) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
              </Grid>
              <Grid item xs={6}>
                <select style={{ width: "100%" }} name="make">
                  <option>Select a Make</option>
                  {makes &&
                    makes.map((item, i) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
              </Grid>
            </Grid>
            <Grid my={2} style={{ textAlign: "end" }} item xs={10}>
              <SuccessBtn>Add Product!</SuccessBtn>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
