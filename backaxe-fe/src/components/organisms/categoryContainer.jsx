import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function CategoryContainer({ products }) {
  let navigate = useNavigate();

  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {products &&
            products.map((item) => {
              return (
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
                    image={item.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography>a{item.description}</Typography>
                    <h5>JOD{item.price}</h5>
                    {item.category.map((item) => {
                      return <small>{item.name}</small>;
                    })}
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        navigate(`/shop/${item.id}`);
                      }}
                      size="small"
                    >
                      See More>>
                    </Button>
                  </CardActions>
                </Card>
                // </Grid>
              );
            })}
          ;
        </Grid>
        ;
      </Container>
    </main>
  );
}
