import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { getCategories, getMakes } from "../../api/shop";
import { UserStatus } from "../../App";
import { Grid } from "@mui/material";

export function NavBar() {
  const navigate = useNavigate();
  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;
  let [makes, setMakes] = React.useState(0);

  let [category, setCategory] = React.useState(0);
  React.useEffect(() => {
    getCategories(setCategory);
    getMakes(setMakes);
  }, []);
  return (
    <Grid containter xs={12}>
      <Grid item xs={12}>
        <Navbar style={{ zIndex: 1300 }} bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand
              style={{ cursor: "pointer", color: "navi" }}
              onClick={() => navigate(`/`)}
            >
              <h4>BackAxe</h4>
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
                {loggedUser ? (
                  <NavDropdown title="Profile" id="navbarScrollingDropdown">
                    <NavDropdown.Item>
                      {" "}
                      <Link to={`user/${loggedUser.id}/`}>Profile</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={() => {
                        localStorage.removeItem("access");
                        localStorage.removeItem("user");
                        localStorage.removeItem("refresh");
                        setLoggedUser(null);
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link onClick={() => navigate(`/signin`)}>
                    Sign In
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Grid>
    </Grid>
  );
}
