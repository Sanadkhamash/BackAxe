import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { UserStatus } from "../../App";
import { useNavigate } from "react-router-dom";
import { checkIfDataIsFilled } from "../../helpers/validators";
import { updateUser } from "../../api/logistration";

export const EditForm = () => {
  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;
  let [info, setInfo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let canSubmit = true;
    const data = {
      id: loggedUser.id,
      first_name: e.target.fName.value,
      last_name: e.target.lName.value,
      mobile: e.target.phone.value,
      address: e.target.address.value,
    };
    const values = Object.values(data);

    for (let i of values) {
      if (i) continue;
      else {
        canSubmit = false;
        break;
      }
    }

    console.log(canSubmit);
    console.log(data);
    if (canSubmit) {
      updateUser(data, loggedUser.id);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Basic Info
        </Typography>
        <Box component="form" noValidate onSubmit={(e) => handleSubmit(e)}>
          <TextField
            margin="normal"
            fullWidth
            id="fName"
            label="First Name"
            name="fname"
            autoComplete="first name"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="lName"
            label="Last Name"
            autoComplete="last name"
            id="lName"
          />
          <TextField
            margin="normal"
            fullWidth
            name="phone"
            label="Phone Number"
            id="phone"
          />
          <TextField
            margin="normal"
            fullWidth
            name="address"
            label="Address"
            id="address"
            autoComplete="address"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Store"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
