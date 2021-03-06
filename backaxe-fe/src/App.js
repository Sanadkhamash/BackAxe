import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AdminRouter, UserRouter } from "./router/router";
import { getCategories } from "./api/shop";

export const UserStatus = React.createContext();

function App() {
  let [isAdmin, setIsAdmin] = useState(false);

  let [token, setToken] = useState(
    localStorage.getItem("access")
      ? JSON.parse(localStorage.getItem("access"))
      : null
  );

  let [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh")
      ? JSON.parse(localStorage.getItem("refresh"))
      : null
  );

  let [allCategories, setAllCategories] = useState(null);

  let [loggedUser, setLoggedUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : false
  );
  useEffect(() => {
    getCategories(setAllCategories);
    if (loggedUser) if (loggedUser.is_superuser == true) setIsAdmin(true);
  }, []);

  return (
    <>
      <UserStatus.Provider
        value={{
          value: [loggedUser, setLoggedUser],
          token: [token, setToken],
          refreshToken: [refreshToken, setRefreshToken],
          categories: allCategories,
        }}
      >
        {!(isAdmin && loggedUser) ? <UserRouter /> : <AdminRouter />}
      </UserStatus.Provider>
    </>
  );
}

export default App;
