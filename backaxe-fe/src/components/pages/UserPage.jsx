import React, { useEffect, useState } from "react";
import { GetUser } from "../../api/logistration";
import { useParams } from "react-router-dom";
import { getUserProducts } from "../../api/shop";
import { Link } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();
  let [user, setUser] = useState();
  let [product, setProduct] = useState();

  useEffect(() => {
    GetUser(id, setUser);
    getUserProducts(setProduct, id);
  }, []);

  return (
    <div>
      <p>Email:{user && user.email}</p>
      <p>Username:{user && user.username}</p>
      <h1>Products ({product && product.length})</h1>
      {product &&
        product.map((product, key) => {
          return (
            <div>
              <Link to={`/shop/${product.id}`} key={key}>
                {product.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};
