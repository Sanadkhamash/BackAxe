import { Divider, Typography } from "@mui/material";
import React from "react";

export const Filters = ({ handleMakesChange, makes }) => {
  return (
    <>
      <Typography>Filter By:</Typography>
      <select onChange={handleMakesChange}>
        <option value={-1}>All Makes</option>
        {makes &&
          makes.map((item, key) => {
            return <option value={item.id}>{item.name}</option>;
          })}
      </select>
      <select onChange={handleMakesChange}>
        <option value={-1}>All Makes</option>
        {makes &&
          makes.map((item, key) => {
            return <option value={item.id}>{item.name}</option>;
          })}
      </select>
      <Divider sx={{ my: 1 }} />
      <Typography>Sort By:</Typography>
      <select onChange={handleMakesChange}>
        <option value={-1}>All Makes</option>
        {makes &&
          makes.map((item, key) => {
            return <option value={item.id}>{item.name}</option>;
          })}
      </select>
      <Divider sx={{ my: 1 }} />
    </>
  );
};
