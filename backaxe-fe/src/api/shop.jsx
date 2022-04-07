import React from "react";
import axios from "axios";
import axiosService from "../utils";

export const getCategories = async (setCategory) => {
  axiosService
    .get("http://127.0.0.1:8000/shop/category/")
    .then((res) => {
      setCategory(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllProducts = async (setProducts) => {
  axiosService
    .get("http://127.0.0.1:8000/shop/products/")
    .then((res) => {
      setProducts(res.data);
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
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleCategory = async (setProducts, id) => {
  axiosService
    .get(`http://127.0.0.1:8000/shop/category/prod/${id}/`)
    .then((res) => setProducts(res.data))
    .catch((err) => {
      console.log(err);
    });
};

export const getMakes = async (setMakes) => {
  axiosService
    .get(`http://127.0.0.1:8000/shop/makes/`)
    .then((res) => {
      setMakes(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOneCategory = async (setCat, id) => {
  axiosService
    .get(`http://127.0.0.1:8000/shop/category/${id}/`)
    .then((res) => {
      setCat(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserProducts = async (setProducts, userId) => {
  axiosService
    .get(`http://127.0.0.1:8000/shop/product/listsingleuser/${userId}`)
    .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllMakes = async (setMakes) => {
  axiosService
    .get(`http://127.0.0.1:8000/shop/makes`)
    .then((res) => {
      setMakes(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getProductsByMakesAndCategory = async (
  setMakes,
  makeId,
  categoryId
) => {
  axiosService
    .get(
      `http://127.0.0.1:8000/shop/product/Category/Make/${categoryId}/${makeId}`
    )
    .then((res) => {
      setMakes(res.data);
      console.log(
        `http://127.0.0.1:8000/shop/product/Category/Make/${categoryId}/${makeId}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
