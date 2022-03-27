// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";
// import IconLabelTabs from "../molecules/navIcons";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { styled, alpha } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import { useNavigate } from "react-router-dom";
// import { UserStatus } from "../../App";

// const theme = createTheme();

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: "15%",
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export const NavBar = () => {
//   const { value } = React.useContext(UserStatus);

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <Typography variant="h6" color="inherit">
//             backAxe
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <IconLabelTabs />
//         </Toolbar>
//       </AppBar>
//     </ThemeProvider>
//   );
// };

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../api/shop";
import { UserStatus } from "../../App";

export function NavBar() {
  const navigate = useNavigate();
  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;

  let [category, setCategory] = React.useState(0);
  React.useEffect(() => {
    getCategories(setCategory);
  }, []);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/`)}
        >
          BackAxe-بككس
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate(`/`)}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate(`/about`)}>About Us</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              {category &&
                category.map((item) => {
                  return (
                    <NavDropdown.Item
                      key={item.id}
                      href={`http://localhost:3000/category/${item.id}`}
                    >
                      {item.name}
                    </NavDropdown.Item>
                  );
                })}
            </NavDropdown>
            <NavDropdown title="Makes" id="navbarScrollingDropdown">
              {/* {make &&
                make.map((item) => {
                  return (
                    <NavDropdown.Item
                      key={item.id}
                      href={`http://localhost:3000/category/${item.id}`}
                    >
                      {item.name}
                    </NavDropdown.Item>
                  );
                })} */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            {!loggedUser ? (
              <Nav.Link onClick={() => navigate(`/signin`)}>Sign In</Nav.Link>
            ) : (
              <Nav.Link
                onClick={() => {
                  localStorage.removeItem("access", "refresh", "user");
                  setLoggedUser(null);
                }}
              >
                Sign Out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
