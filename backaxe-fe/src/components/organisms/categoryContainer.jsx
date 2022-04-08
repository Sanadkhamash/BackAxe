import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCategory, getUserProducts } from "../../api/shop";
import { borderColor } from "@mui/system";
import { UserStatus } from "../../App";
export default function CategoryContainer({ shop, prod, category }) {
  let navigate = useNavigate();
  let [products, setProduct] = React.useState();
  let { id } = useParams();
  const { value } = React.useContext(UserStatus);
  const [loggedUser, setLoggedUser] = value;

  React.useEffect(() => {
    !shop ? getUserProducts(setProduct, id) : setProduct(prod);
  }, []);

  return (
    <main>
      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={0}>
          <h1 style={{ margin: "0 0 20px 0" }}>
            {console.log(products && products)}
            {category ? category.name : products[0].user.username}
          </h1>

          {products &&
            products.map((item) => {
              return (
                <Card
                  sx={{
                    height: "50%",
                    width: "100%",
                    display: "flex",
                    marginBottom: "0.5%",
                    borderStyle: "solid",
                    borderColor: "grey",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: 0,
                      width: "270px",
                      height: "160px",
                    }}
                    image={item.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }} border>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography>Amman | Jordan </Typography>
                    <small>{item.make.name} | </small>
                    {item.category.map((item) => {
                      return <small>{item.name} </small>;
                    })}
                    <h5 color="red">JOD{item.price}</h5>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        navigate(`/shop/${item.id}`);
                      }}
                      size="small"
                    >
                      Show Details...
                    </Button>
                  </CardActions>
                </Card>
                // </Grid>
              );
            })}
        </Grid>
      </Container>
    </main>
  );
}
