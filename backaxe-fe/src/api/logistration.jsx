import React from "react";
import axios from "axios";
import axiosService from "../utils";

export const getIfUserCanLogIn = async (data, setLoggedUser) => {
  JSON.stringify(data);

  axiosService
    .post("http://127.0.0.1:8000/auth1/login/", data)
    .then((res) => {
      localStorage.setItem("access", JSON.stringify(res.data.access));
      localStorage.setItem("refresh", JSON.stringify(res.data.refresh));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setLoggedUser(JSON.parse(localStorage.getItem("user")));
    })
    .catch((err) => {
      setLoggedUser("Username or Password Error");
      console.log(err);
    });
  return JSON.parse(localStorage.getItem("user"));
};

export const RegisterUser = (data, setToken) => {
  axiosService.post("http://127.0.0.1:8000/auth1/register/", data);
};

export const GetUser = (id, setUser) => {
  axiosService
    .get(`http://127.0.0.1:8000/users/get/${id}/`)
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetUserInfo = (id, setUser) => {
  axiosService
    .get(`http://127.0.0.1:8000/users/root/${id}/`)
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUser = (data, id) => {
  axiosService
    .patch(`http://127.0.0.1:8000/users/root/${id}/`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
