import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import "./Login.css";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/Home", { state: { id: email } });
          } else if ((res.data = "notexist")) {
            alert("User have not Sign Up");
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
    <div className="login">
      
      
      <h3>Login Into Your Account</h3><br />
      <Form action="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label className="Label"> Email Address</Form.Label>
          <br />
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Your Email 
            address"
            />
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="Label">Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password"
          />{" "}
        </Form.Group>
        <br />
        <Button
          className="submit"
          type="submit"
          variant="primary"
          size="lg"
          onClick={submit}
        >
          Login Now
        </Button>
      </Form>
      <br />

      <p className="or"><b>______________</b>OR<b>_______________</b></p>
      <br />

      <Link to="/SignUp"><Button className="signUp" Button variant="outline-primary" size="lg" >
        Signup Now
      </Button></Link>
    </div>
    </div>
    
  );
}

export default Login;
