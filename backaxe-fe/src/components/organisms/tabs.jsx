import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AddForm } from "../molecules/addForm";
import { Info } from "./info";
import { EditForm } from "../molecules/editForm";
import CategoryContainer from "./categoryContainer";
import { UserStatus } from "../../App";
import { useParams } from "react-router-dom";

export default function LabTabs() {
  const [value1, setValue] = React.useState("1");

  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;
  let { id } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value1}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="Products" value="3" />
            {loggedUser.id == id && <Tab label="ُEdit Info" value="2" />}
            {loggedUser.id == id && <Tab label="Add Product" value="4" />}
          </TabList>
        </Box>

        <TabPanel value="1">
          <Info />
        </TabPanel>

        <TabPanel value="3">
          <CategoryContainer />
        </TabPanel>

        <TabPanel value="2">
          <EditForm />
        </TabPanel>

        <TabPanel value="4">
          <AddForm />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
