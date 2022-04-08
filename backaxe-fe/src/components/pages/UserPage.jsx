import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getUserProducts } from "../../api/shop";
import { UserStatus } from "../../App";
import { SideBar } from "../organisms/sidebar";
import LabTabs from "../organisms/tabs";

export const UserPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <LabTabs />
    </div>
  );
};
