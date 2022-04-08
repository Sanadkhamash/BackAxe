import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { UserStatus } from "../../App";
import { Link } from "react-router-dom";

export default function SearchField() {
  const { categories } = React.useContext(UserStatus);

  return (
    <Autocomplete
      id="grouped-demo"
      options={categories?.map((item) => item.name)}
      groupBy={(categories) => categories.firstLetter}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}
