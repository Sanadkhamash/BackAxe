import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import { getCategories } from "../../api/shop";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";
import { UserStatus } from "../../App";

export function Home() {
  let navigate = useNavigate();

  let [category, setCategory] = React.useState(0);

  let catalogStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const { value } = React.useContext(UserStatus);
  let [loggedUser, setLoggedUser] = value;

  React.useEffect(() => {
    getCategories(setCategory);
    console.log(value);
  }, []);

  return (
    <div className="catalog" style={catalogStyle}>
      <ImageList sx={{ width: 1150, height: 550 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Choose Category</ListSubheader>
        </ImageListItem>
        {category &&
          category.map((item) => (
            <ImageListItem
              onClick={() => {
                navigate(`/category/${item.id}`);
              }}
              key={item.id}
            >
              <img
                src={`${item.image}`}
                srcSet={`${item.image}`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.name}
                subtitle={item.description}
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
          ))}
      </ImageList>
    </div>
  );
}
