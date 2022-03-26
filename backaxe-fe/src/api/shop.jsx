import React from "react";
import axios from "axios";
import axiosService from "../utils";

export const getCategories = async (setCategory) => {
  axios
    .get("http://127.0.0.1:8000/shop/category/")
    .then((res) => {
      setCategory(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllProducts = async (setProducts) => {
  axios
    .get("http://127.0.0.1:8000/shop/products/")
    .then((res) => {
      setProducts(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetProduct = async (id, setProduct) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };
  axiosService
    .get(`http://127.0.0.1:8000/shop/products/${id}/`, headers)
    .then((res) => {
      setProduct(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddProduct = async (data) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axiosService
    .post("http://127.0.0.1:8000/shop/products/", data, headers)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleCategory = async (setProducts, id) => {
  axios
    .get(`http://127.0.0.1:8000/shop/category/prod/${id}/`)
    .then((res) => {
      setProducts(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMakes = async (setMakes) => {
  axios
    .get(`http://127.0.0.1:8000/shop/makes/`)
    .then((res) => {
      setMakes(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOneCategory = async (setCat, id) => {
  axios
    .get(`http://127.0.0.1:8000/shop/category/${id}/`)
    .then((res) => {
      setCat(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
