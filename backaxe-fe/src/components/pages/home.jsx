import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { getCategories, getMakes } from "../../api/shop";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";
import { UserStatus } from "../../App";
import { Grid } from "@mui/material";
import Item from "../atoms/Item";
import Slider from "../organisms/carousel";
import { SideBar } from "../organisms/sidebar";

export function Home() {
  let navigate = useNavigate();

  let [category, setCategory] = React.useState(0);
  let [makes, setMakes] = React.useState();

  let catalogStyle = {
    display: "flex",
    justifyContent: "center",
  };

  React.useEffect(() => {
    getCategories(setCategory);
    getMakes(setMakes);
  }, []);

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item xs={12} md={10}>
        <Grid container xs={12} justify="center" align="center">
          <Grid item xs={12} justify="center" align="center">
            <h1 style={{ fontSize: "35px" }}>Makes</h1>
            <Grid container xs={12} justify="center" align="center" spacing={1}>
              {makes?.map((item, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4}>
                    <ImageListItem
                      // onClick={() => {
                      //   navigate(`/category/${item.id}`);
                      // }}
                      key={i}
                      href="/category/"
                    >
                      <img
                        src={`${item.photo}`}
                        srcSet={`${item.photo}`}
                        alt={item.name}
                        loading="lazy"
                        style={{ width: "17vw", height: "35vh" }}
                      />
                      <ImageListItemBar
                        title={item.name}
                        subtitle={i}
                        actionIcon={
                          <IconButton
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                            aria-label={`info about ${item.name}`}
                          >
                            <ArrowCircleRightIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} justify="center" align="center">
          <Grid item xs={12} justify="center" align="center">
            <h1 style={{ fontSize: "35px" }}>Categories</h1>
            <Grid container xs={12} justify="center" align="center" spacing={1}>
              {category &&
                category.map((item, i) => {
                  return (
                    <Grid item xs={12} md={6} lg={4}>
                      <ImageListItem
                        onClick={() => {
                          navigate(`/category/${item.id}`);
                        }}
                        key={i}
                        href="/category/"
                      >
                        <img
                          src={`${item.image}`}
                          srcSet={`${item.image}`}
                          alt={item.name}
                          loading="lazy"
                          style={{ height: "35vh" }}
                        />
                        <ImageListItemBar
                          title={item.name}
                          subtitle={"Discover More"}
                          actionIcon={
                            <IconButton
                              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                              aria-label={`info about ${item.name}`}
                            >
                              <ArrowCircleRightIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
