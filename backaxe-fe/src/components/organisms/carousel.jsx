import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Slider({ images }) {
  return (
    <div
      style={{
        display: "block",
        width: "75%",
        padding: 30,
      }}
    >
      <Carousel>
        {images.map((image) => {
          return (
            <Carousel.Item interval={1500}>
              <img className="d-block w-100" src={image} alt="Image One" />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
