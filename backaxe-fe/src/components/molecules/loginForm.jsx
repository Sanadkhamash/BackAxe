import { UnderLinedText, StartIconText } from "../atoms/inputs";
import { SuccessBtn } from "../atoms/buttons";
import { getIfUserCanLogIn } from "../../api/logistration";
import { useState } from "react";
//////////
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { UserStatus } from "../../App";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [canLogin, setCanLogin] = useState(false);
  const [token, setUserToken] = useState(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });
  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;

  const handleErrors = (e) => {
    if (e.target.username.value.length < 3) {
      setErrors({ ...errors, username: true });
      setCanLogin(false);
    } else setErrors({ ...errors, username: false });

    if (e.target.password.value.length < 8) {
      setErrors({ ...errors, password: true });
      setCanLogin(false);
    } else setErrors({ ...errors, password: false });

    if (!(errors.username && errors.password)) setCanLogin(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userData;
    const data = new FormData(event.currentTarget);
    handleErrors(event);
    if (canLogin) {
      userData = {
        username: data.get("username"),
        password: data.get("password"),
      };
      console.log(userData);
      let loginstatus = await getIfUserCanLogIn(userData, setLoggedUser);
      if (loginstatus) navigate("/");
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                onClick={() => {
                  navigate("/register");
                }}
                variant="body2"
                style={{ cursor: "pointer" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
