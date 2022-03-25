import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryContainer from "./components/organisms/categoryContainer";
import ProductContainer from "./components/organisms/singleCatContainer";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { AdminRouter, UserRouter } from "./router/router";
let is_Admin = false;
let is_Logged = false;

function App() {
  return <>{!(is_Admin && is_Logged) ? <UserRouter /> : <AdminRouter />}</>;
}

export default App;
