import CategoryContainer from "../components/organisms/categoryContainer";
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

export function AdminRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<CategoryContainer />} />
        <Route path="/shop/:id" element={<ProductContainer />} />
        <Route path="/add-product" element={<AddForm />} />
      </Switch>
    </BrowserRouter>
  );
}

export function UserRouter() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Shop />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/add-product" element={<AddForm />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route path="/register" element={<RegForm />} />
          <Route path="/signin" element={<SignIn />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
