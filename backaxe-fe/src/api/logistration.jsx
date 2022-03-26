import React from "react";
import axios from "axios";

export const getIfUserCanLogIn = async (data, setToken) => {
  console.log("dakhla;");
  JSON.stringify(data);

  axios
    .post("http://127.0.0.1:8000/auth1/login/", data)
    .then((res) => {
      localStorage.setItem("access", JSON.stringify(res.data.access));
      localStorage.setItem("refresh", JSON.stringify(res.data.refresh));
      localStorage.setItem("user", JSON.stringify(res.data.user));
    })
    .catch((err) => {
      setToken("Username or Password Error");
      console.log(err);
    });
  return JSON.parse(localStorage.getItem("user"));
};

export const RegisterUser = (data, setToken) => {
  axios
    .post("http://127.0.0.1:8000/users/reg/", data, {
      headers: {
        Authorization: localStorage.getItem("access_token")
          ? "JWT " + localStorage.getItem("access_token")
          : null,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    .then((res) => console.log(res));
};
