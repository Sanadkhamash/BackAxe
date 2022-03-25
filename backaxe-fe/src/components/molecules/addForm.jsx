import React, { useEffect, useState } from "react";
import { UnderLinedText } from "../atoms/inputs";
import { AddProduct, getCategories, getMakes } from "../../api/shop";
import { checkIfDataIsFilled } from "../../helpers/validators";

export const AddForm = () => {
  let [category, setCategory] = useState(0);
  let [makes, setMakes] = useState(0);

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
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <UnderLinedText name="name" label="Product Name" />
      <UnderLinedText name="price" label="Price" />
      <UnderLinedText name="quantity" label="Quantity" />
      <UnderLinedText name="description" label="description" />
      <UnderLinedText name="image" label="Image URL" />
      <select name="category">
        <option>Select a Category</option>
        {category &&
          category.map((item, i) => (
            <option value={item.id}>{item.name}</option>
          ))}
      </select>
      <select name="make">
        <option>Select a Make</option>
        {makes &&
          makes.map((item, i) => <option value={item.id}>{item.name}</option>)}
      </select>
      <button type="submit">Add Product!</button>
    </form>
  );
};
