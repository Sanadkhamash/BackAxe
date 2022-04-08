import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getUserProducts } from "../../api/shop";
import { UserStatus } from "../../App";
import { SideBar } from "../organisms/sidebar";
import LabTabs from "../organisms/tabs";

export const UserPage = () => {
  const { id } = useParams();
  let [product, setProduct] = useState();
  const { value } = React.useContext(UserStatus);

  useEffect(() => {
    getUserProducts(setProduct, id);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <LabTabs />
    </div>
  );
};
