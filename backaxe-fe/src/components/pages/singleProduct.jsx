import React, { useEffect, useState } from "react";
import { Footer } from "../organisms/Footer";
import { Product } from "../organisms/singleProduct";
import { TopBar } from "../organisms/TopBar";
import { useParams } from "react-router-dom";
import { GetProduct } from "../../api/shop";

export const SingleProduct = () => {
  const { id } = useParams();
  let [product, setProduct] = useState();

  useEffect(() => {
    GetProduct(id, setProduct);
  }, []);

  return (
    <>
      {product ? (
        <>
          <TopBar product={product.name} />
          <Product product={product} />
        </>
      ) : (
        <h1>Please Wait</h1>
      )}
      <Footer />
    </>
  );
};
