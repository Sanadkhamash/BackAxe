import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import HomeIcon from "@mui/icons-material/Home";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab icon={<HomeIcon />} label="Home" onClick={() => navigate("/")} />
      <Tab
        icon={<CarRepairIcon />}
        label="Shop"
        onClick={() => navigate(`/shop`)}
      />
      <Tab icon={<PersonPinIcon />} label="Profile" />
      <Tab icon={<InfoIcon />} label="About Us" />
    </Tabs>
  );
}
