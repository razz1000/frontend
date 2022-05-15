import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

let Frontpage = () => {
  const [newUser, setNewUser] = useState([]);

  let fetchDate = async () => {
    let response = await fetch("http://localhost:3003/users/", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(response);
    }
  };

  let handleChange = (propertyName, targetValue) => {
    setNewUser({
      ...newUser,
      [propertyName]: targetValue,
    });
  };

  let buttonClick = (event) => {
    event.preventDefault();
    fetchDate();
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>enter Your email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(event) => {
                  handleChange("email", event.target.calue);
                }}
                value={newUser.email}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>
                Select the number of keywords you would like to track
              </Form.Label>
              <Form.Control
                as="select"
                onChange={(event) => {
                  handleChange("keyword", event.target.value);
                }}
                value={newUser.keyword}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                onChange={(event) => {
                  handleChange("comment", event.target.value);
                }}
                value={newUser.comment}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={buttonClick}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Frontpage;
