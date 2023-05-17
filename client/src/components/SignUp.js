import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./SignUp.css";

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/SignUp", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if ((res.data = "notexist")) {
            history("/Home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong Details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="FullPage">
      <div className="Login">
        <h3>Create Your New Account</h3>
        <Form action="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="Label"> Email Address</Form.Label> <br />
            <Form.Control
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="Label">Password</Form.Label>
            <br />
            <Form.Control
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />{" "}
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="Label">Mobile Number</Form.Label>
            <br />
            <Form.Control
              type=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="123-4567-8910"
            />{" "}
          </Form.Group>
          <br />
          <Button className="submit" type="submit" onClick={submit}>
            SignIn
          </Button>
        </Form>
        <br />
        <br />

        <p className="or">
          <b>______________</b>OR<b>_______________</b>
        </p>
        <br />
        <Link to="/">
          <Button className="SignUp">Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
