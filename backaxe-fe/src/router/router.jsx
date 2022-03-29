import React from "react";
import ProductContainer from "../components/organisms/singleCatContainer";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { AddForm } from "../components/molecules/addForm";
import { Home } from "../components/pages/home";
import { AboutUs } from "../components/pages/aboutUs";
import { SingleProduct } from "../components/pages/singleProduct";
import { Shop } from "../components/pages/shop";
import { UserProfile } from "../components/pages/userProfile";
import { NavBar } from "../components/organisms/NavBar";
import { RegForm } from "../components/molecules/regForm";
import { SignIn } from "../components/molecules/loginForm";
import Dashboard from "../components/pages/admin";
import { UserPage } from "../components/pages/UserPage";
import { UserStatus } from "../App";
import { Info } from "../components/organisms/info";
import { UserProducts } from "../components/organisms/userProducts";
import CategoryContainer from "../components/organisms/categoryContainer";

export function AdminRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="/shop/:id" element={<ProductContainer />} />
        <Route path="/add-product" element={<AddForm />} />
      </Switch>
    </BrowserRouter>
  );
}

export function UserRouter() {
  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Shop />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/register" element={<RegForm />} />
          <Route path="/signin" element={!loggedUser ? <SignIn /> : <Home />} />
          <Route path="/user/:id" element={<UserPage />}>
            <Route path="info" element={<Info />} />
            <Route path="products" element={<CategoryContainer />} />
            <Route path="add" element={<AddForm />} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
