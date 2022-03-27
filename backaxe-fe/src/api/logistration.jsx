import React from "react";
import axios from "axios";
import axiosService from "../utils";

export const getIfUserCanLogIn = async (data, setToken) => {
  console.log("dakhla;");
  JSON.stringify(data);

  axiosService
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
  axiosService
    .post("http://127.0.0.1:8000/auth1/register/", data)
    .then((res) => console.log(res));
};

export const GetUser = (id, setUser) => {
  axios
    .get(`http://127.0.0.1:8000/users/get/${id}/`)
    .then((res) => {
      setUser(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
