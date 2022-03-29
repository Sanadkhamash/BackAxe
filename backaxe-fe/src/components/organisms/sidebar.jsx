import React, { useState } from "react";
import { UserStatus } from "../../App";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate, useParams } from "react-router-dom";

export const SideBar = () => {
  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;
  const { id } = useParams();
  let [user, setUser] = useState();
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <React.Fragment>
          <ListItemButton onClick={() => navigate(`info`)}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Info" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate(`products`)}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
          {loggedUser?.id == id && (
            <ListItemButton onClick={() => navigate(`addform`)}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Add a Product" />
            </ListItemButton>
          )}
        </React.Fragment>
        <Divider sx={{ my: 1 }} />
        {/* {secondaryListItems} */}
      </List>
    </Drawer>
  );
};
