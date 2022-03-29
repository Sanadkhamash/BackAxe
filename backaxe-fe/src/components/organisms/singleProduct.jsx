import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export const Product = ({ product }) => {
  const mainStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-around",
  };
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };

  return (
    <>
      <Container className="min-vh-90">
        <Row className="my-5">
          <Col>
            <div>
              <img style={{ width: "90%" }} src={product.image} />
            </div>
          </Col>
          <Col>
            <div className="main" style={mainStyles}>
              <div className="prod_header" style={{ headerStyles }}>
                <h1 className="fw-bolder">{product.name.toUpperCase()}</h1>
              </div>
              <div className="fs-4">
                <p>
                  <span className="fw-bolder">Price:</span> {product.price}
                </p>
                <p>
                  <span className="fw-bolder">Quantity:</span>{" "}
                  {product.quantity}
                </p>
                <p>
                  <span className="fw-bolder">Posted By:</span>{" "}
                  <Link to={`/user/${product.user.id}/info`}>
                    {product.user.username}
                  </Link>
                </p>
                <p>
                  <span className="fw-bolder">Posted:</span>{" "}
                  {toString(Date.UTC(product.date))}
                </p>
                <button className="btn btn-primary fw-bolder text-uppercase px-3 py-2">
                  {" "}
                  Test Button
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col>
            <div>
              <span className="fw-bolder fs-3">Description:</span>
              <p>{product.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
