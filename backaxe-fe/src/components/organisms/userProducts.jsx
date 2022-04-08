import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getUserProducts } from "../../api/shop";
import { UserStatus } from "../../App";
import { SideBar } from "../organisms/sidebar";

export const UserProducts = () => {
  const { id } = useParams();
  let [product, setProduct] = useState();
  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;

  useEffect(() => {
    getUserProducts(setProduct, id);
  }, []);
  return (
    <div
      style={{
        margin: "5% 0 0 20%",
      }}
    >
      <Grid container spacing={4}>
        {product ? (
          product.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "50%",
                  width: "100%",
                  display: "flex",
                  marginBottom: "2.5%",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    pt: 0,
                    width: "300px",
                    height: "160px",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      navigate(`/shop/${card.id}`);
                    }}
                    size="small"
                  >
                    Shop
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Grid>
      );
    </div>
  );
};
