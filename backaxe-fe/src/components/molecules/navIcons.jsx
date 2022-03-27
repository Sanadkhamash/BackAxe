import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import HomeIcon from "@mui/icons-material/Home";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { UserStatus } from "../../App";

export default function IconLabelTabs() {
  const [value1, setValue] = React.useState(0);
  const navigate = useNavigate();

  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value1}
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
      {!loggedUser ? (
        <>
          <Tab icon={<InfoIcon />} label="Sign Up" />
          <Tab icon={<InfoIcon />} label="Sing In" />
        </>
      ) : (
        <Tab
          icon={<InfoIcon />}
          label="Sign Out"
          onClick={() => {
            localStorage.removeItem("access", "refresh", "user");
            setLoggedUser(null);
          }}
        />
      )}
    </Tabs>
  );
}
