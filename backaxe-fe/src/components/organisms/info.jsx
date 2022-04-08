import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GetUser, GetUserInfo } from "../../api/logistration";

export const Info = () => {
  let [user, setUser] = useState();
  let [userInfo, setUserInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    GetUser(id, setUser);
  }, []);

  return (
    <>
      {user && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Info</Card.Header>
            <Card.Body>
              <Card.Title>First Name</Card.Title>
              <Card.Text>{user.first_name}</Card.Text>
              <Card.Title>Last Name</Card.Title>
              <Card.Text>{user.last_name}</Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Header>Contact</Card.Header>
            <Card.Body>
              <Card.Title>Email Address</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};
